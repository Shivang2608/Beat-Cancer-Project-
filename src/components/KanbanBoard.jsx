import React, { useMemo, useState } from "react";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import ColumnContainer from "./ColumnContainer";
import TaskCard from "./TaskCard";
import { IconPlus } from "@tabler/icons-react";
import { useStateContext } from "../context"; // Import context

function KanbanBoard({ state }) {
  const { updateRecord } = useStateContext();
  // Get the 'id' of the document from the state passed by the router
  const documentID = state?.state?.id;

  const defaultCols =
    state?.state?.columns?.map((col) => ({
      id: col?.id,
      title: col?.title,
    })) || [];

  const defaultTasks =
    state?.state?.tasks?.map((task) => ({
      id: task?.id,
      columnId: task?.columnId,
      content: task?.content,
    })) || [];

  const [columns, setColumns] = useState(defaultCols);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);
  const [tasks, setTasks] = useState(defaultTasks);
  const [activeColumn, setActiveColumn] = useState(null);
  const [activeTask, setActiveTask] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 10 } }),
  );

  return (
    <div className="mt-5 min-h-screen w-72 text-white">
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div className="m-auto flex gap-4">
          <div className="flex gap-4">
            <SortableContext items={columnsId}>
              {columns.map((col) => (
                <ColumnContainer
                  key={col.id}
                  column={col}
                  deleteColumn={deleteColumn}
                  updateColumn={updateColumn}
                  createTask={createTask}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                  tasks={tasks.filter((task) => task.columnId === col.id)}
                />
              ))}
            </SortableContext>
          </div>
          <button
            onClick={() => createNewColumn()}
            className="flex h-[60px] w-[350px] min-w-[350px] cursor-pointer gap-2 rounded-lg border-2 border-columnBackgroundColor bg-mainBackgroundColor p-4 ring-green-500 hover:ring-2"
          >
            <IconPlus />
            Add Column
          </button>
        </div>
        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                column={activeColumn}
                deleteColumn={deleteColumn}
                updateColumn={updateColumn}
                createTask={createTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
                tasks={tasks.filter(
                  (task) => task.columnId === activeColumn.id,
                )}
              />
            )}
            {activeTask && (
              <TaskCard
                task={activeTask}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            )}
          </DragOverlay>,
          document.body,
        )}
      </DndContext>
    </div>
  );

  // --- THESE FUNCTIONS NOW SAVE ON EVERY CHANGE ---

  function createTask(columnId) {
    const newTask = {
      id: generateId(),
      columnId,
      content: `Task ${tasks.length + 1}`,
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    saveToDatabase(columns, newTasks);
  }

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    saveToDatabase(columns, newTasks);
  }

  function updateTask(id, content) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, content } : task,
    );
    setTasks(newTasks);
    saveToDatabase(columns, newTasks);
  }

  function createNewColumn() {
    const newColumn = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    const newColumns = [...columns, newColumn];
    setColumns(newColumns);
    saveToDatabase(newColumns, tasks);
  }

  function deleteColumn(id) {
    const newColumns = columns.filter((col) => col.id !== id);
    setColumns(newColumns);
    const newTasks = tasks.filter((task) => task.columnId !== id);
    setTasks(newTasks);
    saveToDatabase(newColumns, newTasks);
  }

  function updateColumn(id, title) {
    const newColumns = columns.map((col) => (col.id === id ? { ...col, title } : col));
    setColumns(newColumns);
    saveToDatabase(newColumns, tasks);
  }

  function onDragStart(event) {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
    } else if (event.active.data.current?.type === "Task") {
      setActiveTask(event.active.data.current.task);
    }
  }

  // --- THIS IS THE CORRECTED FUNCTION ---
  function onDragEnd(event) {
    setActiveColumn(null);
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;
    if (active.id === over.id) return;

    const isActiveAColumn = active.data.current?.type === "Column";

    if (isActiveAColumn) {
      // User dragged a column
      setColumns((currentCols) => {
        const activeIndex = currentCols.findIndex((col) => col.id === active.id);
        const overIndex = currentCols.findIndex((col) => col.id === over.id);
        
        const newColumns = arrayMove(currentCols, activeIndex, overIndex);
        
        // Save the new state
        saveToDatabase(newColumns, tasks); 
        
        return newColumns; // Return new state for React
      });
    } else {
      // User dragged a task
      setTasks((currentTasks) => {
        const activeIndex = currentTasks.findIndex((t) => t.id === active.id);
        let newTasks = [...currentTasks]; // Make a copy

        const isOverATask = over.data.current?.type === "Task";
        if (isOverATask) {
          const overIndex = currentTasks.findIndex((t) => t.id === over.id);
          // Check if columns are different
          if (currentTasks[activeIndex].columnId !== currentTasks[overIndex].columnId) {
            newTasks[activeIndex] = { ...newTasks[activeIndex], columnId: currentTasks[overIndex].columnId };
            newTasks = arrayMove(newTasks, activeIndex, overIndex);
          } else {
            // Same column, just reorder
            newTasks = arrayMove(newTasks, activeIndex, overIndex);
          }
        } else {
          // Task is over a column
          const overColumnId = over.id;
          if (newTasks[activeIndex].columnId !== overColumnId) {
            newTasks[activeIndex] = { ...newTasks[activeIndex], columnId: overColumnId };
            newTasks = arrayMove(newTasks, activeIndex, activeIndex); // Keep position, just change column
          }
        }
        
        // Save the new state
        saveToDatabase(columns, newTasks);

        return newTasks; // Return new state for React
      });
    }
  }
  // --- END OF FIX ---

  async function saveToDatabase(newColumns, newTasks) {
    const kanbanData = {
      columns: newColumns,
      tasks: newTasks,
    };
    
    try {
      await updateRecord({
        documentID: documentID,
        kanbanRecords: JSON.stringify(kanbanData), // Save as a JSON string
      });
      console.log("Kanban board saved!");
    } catch (error) {
      console.error("Failed to save Kanban board:", error);
    }
  }

  function onDragOver(event) {
    const { active, over } = event;
    if (!over) return;
    if (active.id === over.id) return;

    const isActiveATask = active.data.current?.type === "Task";
    if (!isActiveATask) return;

    const isOverATask = over.data.current?.type === "Task";
    const isOverAColumn = over.data.current?.type === "Column";

    setTasks((tasks) => {
      const activeIndex = tasks.findIndex((t) => t.id === active.id);
      let newTasks = [...tasks];

      if (isOverATask) {
        const overIndex = tasks.findIndex((t) => t.id === over.id);
        if (newTasks[activeIndex].columnId !== newTasks[overIndex].columnId) {
          newTasks[activeIndex] = { ...newTasks[activeIndex], columnId: newTasks[overIndex].columnId };
          return arrayMove(newTasks, activeIndex, overIndex);
        }
        return arrayMove(newTasks, activeIndex, overIndex);
      } else if (isOverAColumn) {
        const overColumnId = over.id;
        if (newTasks[activeIndex].columnId !== overColumnId) {
          newTasks[activeIndex] = { ...newTasks[activeIndex], columnId: overColumnId };
          return arrayMove(newTasks, activeIndex, activeIndex);
        }
      }
      return newTasks;
    });
  }
}

function generateId() {
  return Math.floor(Math.random() * 10001);
}

export default KanbanBoard;