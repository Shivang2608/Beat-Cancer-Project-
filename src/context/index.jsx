// src/context/index.jsx

import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import { db } from "../utils/dbConfig";
import { Users, Records } from "../utils/schema";
import { eq } from "drizzle-orm";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [records, setRecords] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isContextLoading, setIsContextLoading] = useState(true);

  // --- YEH SAB FUNCTIONS AB STABLE HAIN ---

  const fetchUsers = useCallback(async () => {
    try {
      const result = await db.select().from(Users).execute();
      setUsers(result);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, [db]);

  const fetchUserByEmail = useCallback(
    async (email) => {
      setIsContextLoading(true);
      try {
        const result = await db
          .select()
          .from(Users)
          .where(eq(Users.createdBy, email))
          .execute();
        if (result.length > 0) {
          setCurrentUser(result[0]);
          return result[0];
        }
        return null;
      } catch (error) {
        console.error("Error fetching user by email:", error);
        return null;
      } finally {
        setIsContextLoading(false);
      }
    },
    [db, setCurrentUser, setIsContextLoading]
  );

  const createUser = useCallback(
    async (userData) => {
      try {
        const newUser = await db
          .insert(Users)
          .values(userData)
          .returning({ id: Users.id, createdBy: Users.createdBy })
          .execute();

        if (newUser && newUser.length > 0) {
          setUsers((prevUsers) => [...prevUsers, newUser[0]]);
          return newUser[0];
        } else {
          console.error("DB insert returned empty array or undefined.");
          return null;
        }
      } catch (error) {
        console.error("Error creating user (in catch block):", error);
        return null;
      }
    },
    [db, setUsers]
  );

  const fetchUserRecords = useCallback(
    async (userEmail) => {
      try {
        const result = await db
          .select()
          .from(Records)
          .where(eq(Records.createdBy, userEmail))
          .execute();
        setRecords(result);
      } catch (error) {
        console.error("Error fetching user records:", error);
      }
    },
    [db, setRecords]
  );

  const createRecord = useCallback(
    async (recordData) => {
      try {
        const newRecord = await db
          .insert(Records)
          .values(recordData)
          .returning({ id: Records.id })
          .execute();

        if (newRecord && newRecord.length > 0) {
          setRecords((prevRecords) => [...prevRecords, newRecord[0]]);
          return newRecord[0];
        }
        return null;
      } catch (error) {
        console.error("Error creating record:", error);
        return null;
      }
    },
    [db, setRecords]
  );

  const updateRecord = useCallback(
    async (recordData) => {
      try {
        const { documentID, ...dataToUpdate } = recordData;
        await db
          .update(Records)
          .set(dataToUpdate)
          .where(eq(Records.id, documentID))
          .returning();
      } catch (error) {
        console.error("Error updating record:", error);
        return null;
      }
    },
    [db]
  );

  // --- YEH HAI ASLI FIX ---
  // 'value' object ko useMemo mein wrap kiya hai
  const contextValue = useMemo(
    () => ({
      users,
      records,
      fetchUsers,
      fetchUserByEmail,
      createUser,
      fetchUserRecords,
      createRecord,
      currentUser,
      updateRecord,
      isContextLoading,
      setIsContextLoading,
    }),
    [
      users,
      records,
      currentUser,
      isContextLoading,
      // Saari functions jo 'value' mein pass ho rahi hain,
      // unhe yahan dependencies mein daalna zaroori hai.
      fetchUsers,
      fetchUserByEmail,
      createUser,
      fetchUserRecords,
      createRecord,
      updateRecord,
      setIsContextLoading, // Yeh state setter bhi
    ]
  );

  return (
    <StateContext.Provider value={contextValue}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);