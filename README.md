<img width="1024" height="453" alt="Screenshot 2025-11-23 111915" src="https://github.com/user-attachments/assets/33fd1cb0-7292-4679-870c-c0036123ebaa" />
<img width="745" height="402" alt="Screenshot 2025-11-23 111858" src="https://github.com/user-attachments/assets/9e6eca0f-d918-4a64-8c0b-efcc898477c1" />
<img width="407" height="488" alt="Screenshot 2025-11-23 111839" src="https://github.com/user-attachments/assets/cd134f09-3a09-4e76-abb2-eec7ded8c6f9" />
<img width="940" height="410" alt="Screenshot 2025-11-23 111829" src="https://github.com/user-attachments/assets/695c67ef-7d15-46bf-a884-23388f11a956" />
<img width="1033" height="384" alt="Screenshot 2025-11-23 111811" src="https://github.com/user-attachments/assets/da1a9afa-a9da-411c-ba1f-0084e3458a61" />
<img width="649" height="434" alt="Screenshot 2025-11-23 111755" src="https://github.com/user-attachments/assets/435b992f-6ef6-480a-bead-c8fc300e7c60" />
<img width="892" height="432" alt="Screenshot 2025-11-23 111743" src="https://github.com/user-attachments/assets/c550cf1e-c220-4d8c-b4fe-eaf0a1a66dfd" />
<img width="805" height="443" alt="Screenshot 2025-11-23 111717" src="https://github.com/user-attachments/assets/fb3e73b8-26a4-4c53-a7e9-aed844937fce" />
<img width="951" height="442" alt="Screenshot 2025-11-23 111654" src="https://github.com/user-attachments/assets/a55a2eac-e955-4b80-8e80-d8b80673dbf4" />
<img width="940" height="453" alt="Screenshot 2025-11-23 111637" src="https://github.com/user-attachments/assets/12694159-23e1-432b-a422-23fb0810e728" />
<p align="center">
  <img src="https://user-images.githubusercontent.com/84136055/205307321-017e8c3b-2d79-459f-a2e6-76a08990c6b1.png" alt="Beat Cancer Project Banner">
</p>

BeatCancer 🩺💻

AI-Powered Precision Oncology Assistant

BeatCancer is a cutting-edge web application designed to assist patients and care providers by leveraging Google Gemini AI to analyze complex medical data, generate personalized treatment roadmaps, and manage patient records via an interactive, secure platform.

✨ Features and Capabilities

Our platform integrates secure authentication with advanced data processing and visualization tools to provide a comprehensive cancer care management solution.

🧠 Core AI Engine (Powered by Google Gemini)

AI Medical Analysis: Users can upload unstructured medical documents (e.g., pathology reports, lab results). The Gemini API reads these reports, performs a detailed textual analysis, and extracts key diagnostic and prognostic information.

AI Treatment Plan Generation: Using the analysis from the first step, Gemini is called a second time to transform the text summary into a highly structured, actionable JSON task list, ensuring treatment steps are clear and organized.

Personalized Roadmaps: The AI output is tailored into individual task pipelines, representing the next steps in screening, appointment scheduling, and treatment protocols.

📊 Data Management & Interaction

Interactive Kanban Board: All AI-generated treatment tasks are visualized on a drag-and-drop Kanban board built with @dnd-kit/core. Users can easily manage tasks across "To Do," "Work in Progress," and "Done" columns.

Persistent State: All user profiles, uploaded medical records, and the real-time status of the Kanban board are securely saved to a cloud-hosted Neon (PostgreSQL) database.

Secure File Upload: Users can safely upload and store their medical reports for AI processing and record-keeping.

🔐 Security and Architecture

Secure Authentication: User login and sign-up are handled by Privy, providing secure, wallet-enabled, and traditional email/password authentication.

New User Onboarding: A streamlined "Get Started" page ensures new user profiles are correctly initialized and saved to the database upon registration.

Data Isolation: All user data, medical records, and Kanban board changes are saved persistently, ensuring a continuous and secure patient journey.

🛠️ Tech Stack

Category

Technology

Purpose

Frontend

React.js (with Vite)

Fast, modern frontend development.

Styling

Tailwind CSS

Utility-first CSS framework for rapid, responsive styling.

AI/ML

Google Gemini AI

Core engine for document analysis and structured data generation.

Authentication

Privy

Secure, robust authentication and identity management.

Database

Neon (PostgreSQL)

Serverless, scalable cloud database for persistent state.

ORM

Drizzle ORM

TypeScript ORM for interacting with the database schema.

UI Interaction

@dnd-kit/core

Modern library for interactive drag-and-drop Kanban functionality.

💾 Get Started Locally

Follow these instructions to set up and run the project on your machine.

Prerequisites

Node.js (LTS version)

A Privy application ID.

A Neon (PostgreSQL) database connection URL.

A Google Gemini API Key.

1. Clone the Repository

git clone [https://github.com/Shivang2608/Beat-Cancer-Project-.git](https://github.com/Shivang2608/Beat-Cancer-Project-.git)
cd Beat-Cancer-Project-


2. Install Dependencies

Install all necessary dependencies (including the corrected Vite plugin versions):

npm install


3. Setup Environment Variables

Create a file named .env in the root directory of the project and add your API keys. Note the use of NEON_DATABASE_URL (server-side) for Drizzle and VITE_PRIVY_APP_ID (client-side) for Privy/Vite.

# --- SERVER-SIDE SECRETS (FOR DATABASE) ---
NEON_DATABASE_URL="your_neon_database_url" 

# --- CLIENT-SIDE SECRETS (FOR BROWSER) ---
VITE_PRIVY_APP_ID="your_privy_app_id"
VITE_GOOGLE_GEMINI_API_KEY="your_gemini_api_key"


4. Push Database Schema

Use Drizzle to push your schema structure to your Neon database:

npm run db:push


5. Run the App

Start the local development server:

npm run dev


The application will open at http://localhost:5173 (or a similar port) in your browser.

🌐 Deployment Configuration

For successful deployment on Vercel, you must perform these final, critical security and configuration steps:

Vercel Secrets: In your Vercel Dashboard, set the NEON_DATABASE_URL as an Environment Variable.

Privy Authorized Domains: In your Privy application settings, add your deployment URL (https://beat-cancer-project.vercel.app) to the Allowed origins list to prevent 403 Forbidden errors.