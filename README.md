
<p align="center">
  <img src="https://user-images.githubusercontent.com/84136055/205307321-017e8c3b-2d79-459f-a2e6-76a08990c6b1.png" alt="Beat Cancer Project Banner" width="100%">
</p>

<h1 align="center">BeatCancer 🩺💻</h1>

<p align="center">
  <strong>AI-Powered Precision Oncology Assistant</strong>
</p>

<p align="center">
  <a href="https://beat-cancer-project.vercel.app/">
    <img src="https://img.shields.io/badge/Live_Demo-Visit_Site-success?style=for-the-badge&logo=vercel" alt="Live Demo" />
  </a>
  <a href="#-getting-started-locally">
    <img src="https://img.shields.io/badge/Get_Started-Local_Setup-blue?style=for-the-badge&logo=github" alt="Get Started" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Drizzle_ORM-C5F74F?style=for-the-badge&logo=drizzle&logoColor=black" />
</p>

---

<img width="1282" height="560" alt="Screenshot 2025-11-23 111313" src="https://github.com/user-attachments/assets/5197e3d5-dc67-49b3-8586-5d4a61d1ae76" />
<img width="745" height="402" alt="Screenshot 2025-11-23 111858" src="https://github.com/user-attachments/assets/7144bdaa-9a92-4689-a56b-0dc22be51303" />
<img width="407" height="488" alt="Screenshot 2025-11-23 111839" src="https://github.com/user-attachments/assets/346b86b3-900d-4dcf-bfde-35e3b4fbae88" />
<img width="940" height="410" alt="Screenshot 2025-11-23 111829" src="https://github.com/user-attachments/assets/194fb529-956d-476b-a81e-715a3962fd7f" />
<img width="1033" height="384" alt="Screenshot 2025-11-23 111811" src="https://github.com/user-attachments/assets/d02c26de-c7b4-4950-ae75-72233858272b" />
<img width="1895" height="838" alt="Screenshot 2025-11-23 111429" src="https://github.com/user-attachments/assets/2e253c7a-df2f-4791-9e4f-1e16c1b588fd" />
<img width="892" height="432" alt="Screenshot 2025-11-23 111743" src="https://github.com/user-attachments/assets/36eff286-f1aa-4774-9edd-6159db352601" />
<img width="649" height="434" alt="Screenshot 2025-11-23 111755" src="https://github.com/user-attachments/assets/57b08f61-a440-4fb6-8eac-90112852b377" />
<img width="951" height="442" alt="Screenshot 2025-11-23 111654" src="https://github.com/user-attachments/assets/bf0762a3-7eaa-4218-bb34-d4594b27635d" />
<img width="940" height="453" alt="Screenshot 2025-11-23 111637" src="https://github.com/user-attachments/assets/21fea5ee-f003-4e57-b213-f48439ca3332" />

## 📖 Overview

**BeatCancer** is a cutting-edge web application designed to assist patients and care providers. It leverages **Google Gemini AI** to analyze complex medical data, generate personalized treatment roadmaps, and manage patient records via an interactive, secure platform.

## ✨ Features and Capabilities

Our platform integrates secure authentication with advanced data processing and visualization tools to provide a comprehensive cancer care management solution.

### 🧠 Core AI Engine (Powered by Google Gemini)
* **AI Medical Analysis:** Users can upload unstructured medical documents (e.g., pathology reports, lab results). The Gemini API performs a detailed textual analysis to extract key diagnostic information.
* **AI Treatment Plan Generation:** Gemini transforms the text summary into a highly structured, actionable JSON task list.
* **Personalized Roadmaps:** The AI output is tailored into individual task pipelines (screening, scheduling, protocols).

### 📊 Data Management & Interaction
* **Interactive Kanban Board:** Built with `@dnd-kit/core`. Users can drag-and-drop tasks across "To Do," "Work in Progress," and "Done" columns.
* **Persistent State:** All user profiles and Kanban board statuses are securely saved to a cloud-hosted **Neon (PostgreSQL)** database.
* **Secure File Upload:** Safely upload and store medical reports for AI processing.

### 🔐 Security and Architecture
* **Secure Authentication:** Powered by **Privy** for secure wallet-enabled and email/password login.
* **Data Isolation:** All user data is isolated and persistent, ensuring a secure patient journey.

---

## 📸 Interface Preview

<details>
<summary><strong>Click to view Dashboard & UI Screenshots</strong></summary>
<br>

| Dashboard View | Kanban Board |
| :---: | :---: |
| <img src="https://github.com/user-attachments/assets/33fd1cb0-7292-4679-870c-c0036123ebaa" width="100%" /> | <img src="https://github.com/user-attachments/assets/12694159-23e1-432b-a422-23fb0810e728" width="100%" /> |

| File Analysis | Treatment Plan |
| :---: | :---: |
| <img src="https://github.com/user-attachments/assets/9e6eca0f-d918-4a64-8c0b-efcc898477c1" width="100%" /> | <img src="https://github.com/user-attachments/assets/c550cf1e-c220-4d8c-b4fe-eaf0a1a66dfd" width="100%" /> |

</details>

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React.js (Vite) | Fast, modern frontend development. |
| **Styling** | Tailwind CSS | Utility-first CSS framework for responsive styling. |
| **AI/ML** | Google Gemini AI | Core engine for document analysis. |
| **Auth** | Privy | Secure authentication and identity management. |
| **Database** | Neon (PostgreSQL) | Serverless, scalable cloud database. |
| **ORM** | Drizzle ORM | TypeScript ORM for database schema interactions. |
| **UI** | @dnd-kit/core | Interactive drag-and-drop Kanban functionality. |

---

## 💾 Getting Started Locally

Follow these instructions to set up and run the project on your machine.

### Prerequisites
* Node.js (LTS version)
* A Privy application ID
* A Neon (PostgreSQL) database connection URL
* A Google Gemini API Key

### 1. Clone the Repository
```bash
git clone [https://github.com/Shivang2608/Beat-Cancer-Project-.git](https://github.com/Shivang2608/Beat-Cancer-Project-.git)
cd Beat-Cancer-Project-
2. Install Dependencies
Bash

npm install
3. Setup Environment Variables
Create a .env file in the root directory and add your API keys:

Bash

# --- SERVER-SIDE SECRETS (FOR DATABASE) ---
NEON_DATABASE_URL="your_neon_database_url" 

# --- CLIENT-SIDE SECRETS (FOR BROWSER) ---
VITE_PRIVY_APP_ID="your_privy_app_id"
VITE_GOOGLE_GEMINI_API_KEY="your_gemini_api_key"
4. Push Database Schema
Use Drizzle to push your schema structure to your Neon database:

Bash

npm run db:push
5. Run the App
Start the local development server:

Bash

npm run dev
The application will open at http://localhost:5173.

🌐 Deployment Configuration
For successful deployment on Vercel, perform these critical steps:

Vercel Secrets: In your Vercel Dashboard, set the NEON_DATABASE_URL as an Environment Variable.

Privy Authorized Domains: In your Privy application settings, add your deployment URL (https://beat-cancer-project.vercel.app) to the "Allowed Origins" list to prevent 403 errors.

<p align="center"> Built with ❤️ by Shivang </p>
