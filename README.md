<p align="center">
  <img src="https://user-images.githubusercontent.com/84136055/205307321-017e8c3b-2d79-459f-a2e6-76a08990c6b1.png" alt="Beat Cancer Project Banner">
</p>

<h1 align="center">BeatCancer 🩺💻</h1>

<p align="center">
  An AI-powered cancer care assistant, built with React and Google Gemini, that analyzes medical records to create personalized treatment plans.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Gemini_AI-4A80F5?style=for-the-badge&logo=googlebard&logoColor=white" alt="Gemini AI">
  <img src="https://img.shields.io/badge/Privy-2F2B2B?style=for-the-badge&logo=privy&logoColor=white" alt="Privy">
  <img src="https://img.shields.io/badge/Neon-0E1015?style=for-the-badge&logo=neon&logoColor=white" alt="Neon">
  <img src="https://img.shields.io/badge/Drizzle_ORM-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black" alt="Drizzle ORM">
</p>

---

## 🚀 Key Features

* 🔐 **Secure Authentication:** User login and signup handled by **Privy**.
* 👤 **New User Onboarding:** A "Get Started" page to save new user profiles to the database.
* 📤 **File Upload:** Users can upload medical reports for analysis.
* 🧠 **AI Medical Analysis:** Uses **Google Gemini AI** to read medical reports and generate a detailed text analysis.
* 📊 **AI Treatment Plan:** Calls Gemini a second time to parse the text analysis into a structured JSON task list.
* ↔️ **Interactive Kanban Board:** A drag-and-drop board (using **@dnd-kit/core**) to visualize and manage the "Todo," "Work in progress," and "Done" tasks.
* 💾 **Persistent State:** Saves all user data, medical records, and Kanban board changes to a **Neon** cloud database.

---

## 🛠️ Tech Stack

* **Frontend:** React.js (with Vite)
* **Styling:** Tailwind CSS
* **Authentication:** Privy
* **Database:** Neon (PostgreSQL)
* **ORM:** Drizzle ORM
* **AI Integration:** Google Gemini AI
* **Drag & Drop:** @dnd-kit/core

---

## 💾 Get Started

Follow these instructions to get the project running locally.

### 1. Clone the Repository
```bash
git clone [https://github.com/Shivang2608/Beat-Cancer-Project-.git](https://github.com/Shivang2608/Beat-Cancer-Project-.git)

2. Navigate to Project Folder
Bash

cd Beat-Cancer-Project-
3. Install Dependencies
Bash

npm install
4. Setup Environment
Create a .env file in the root of the project and add your API keys:

VITE_PRIVY_APP_ID="your_privy_app_id"
DATABASE_URL="your_neon_database_url"
VITE_GOOGLE_GEMINI_API_KEY="your_gemini_api_key"
5. Push Database Schema
Push the Drizzle schema to your new Neon database:

Bash

npm run db:push
6. Run the App
Start the development server:

Bash

npm run dev
Open http://localhost:5173 in your browser.