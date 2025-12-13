<img width="1024" height="453" alt="Screenshot 2025-11-23 111915" src="https://github.com/user-attachments/assets/8b1f5387-740c-44f0-9f06-ba3d573df99c" />
<img width="745" height="402" alt="Screenshot 2025-11-23 111858" src="https://github.com/user-attachments/assets/00ae25bd-03cf-4ef8-b5aa-0ebec31f9fc7" />
<img width="407" height="488" alt="Screenshot 2025-11-23 111839" src="https://github.com/user-attachments/assets/9a5fe99d-ac7d-4b17-8308-c3c1860d995b" />
<img width="940" height="410" alt="Screenshot 2025-11-23 111829" src="https://github.com/user-attachments/assets/3a8aa886-0b25-43d2-bc73-92344cf11cb8" />
<img width="1033" height="384" alt="Screenshot 2025-11-23 111811" src="https://github.com/user-attachments/assets/4362d4f4-7aea-4e98-9830-87cc67a2b8f3" />
<img width="1895" height="838" alt="Screenshot 2025-11-23 111429" src="https://github.com/user-attachments/assets/b39b4a5c-f8eb-4317-a7d7-b4cf81937d7d" />
<img width="892" height="432" alt="Screenshot 2025-11-23 111743" src="https://github.com/user-attachments/assets/a30de705-f720-4d06-b414-232355e7196c" />
<img width="649" height="434" alt="Screenshot 2025-11-23 111755" src="https://github.com/user-attachments/assets/7030826c-59a5-4b21-9e6c-0ccf013fb853" />
<img width="951" height="442" alt="Screenshot 2025-11-23 111654" src="https://github.com/user-attachments/assets/3987f100-9269-4149-8ff0-b6177464cf7e" />
<img width="805" height="443" alt="Screenshot 2025-11-23 111717" src="https://github.com/user-attachments/assets/7e3dc5b3-2dfb-4c39-8796-a4a16c1e8e57" />
<img width="940" height="453" alt="Screenshot 2025-11-23 111637" src="https://github.com/user-attachments/assets/f45ec281-e0eb-4cfc-ae72-8a6bca32668a" />

<p align="center">
  <img src="https://user-images.githubusercontent.com/84136055/205307321-017e8c3b-2d79-459f-a2e6-76a08990c6b1.png" alt="Beat Cancer Project Banner" width="100%">
</p>

<h1 align="center">BeatCancer 🩺💻</h1>

AI-Powered Precision Oncology Assistant
BeatCancer is a cutting-edge web application designed to assist patients and care providers by leveraging Google Gemini AI to analyze complex medical data, generate personalized treatment roadmaps, and manage patient records via an interactive, secure platform.

✨ Features and Capabilities
Our platform integrates secure authentication with advanced data processing and visualization tools to provide a comprehensive cancer care management solution.

🧠 Core AI Engine (Powered by Google Gemini)
1. AI Medical Analysis: Users can upload unstructured medical documents (e.g., pathology reports, lab results). The Gemini API reads these reports, performs a detailed textual analysis, and extracts key diagnostic and prognostic information.
2. AI Treatment Plan Generation: Using the analysis from the first step, Gemini is called a second time to transform the text summary into a highly structured, actionable JSON task list, ensuring treatment steps are clear and organized.
3. Personalized Roadmaps: The AI output is tailored into individual task pipelines, representing the next steps in screening, appointment scheduling, and treatment protocols.

📊 Data Management & Interaction
1. Interactive Kanban Board: All AI-generated treatment tasks are visualized on a drag-and-drop Kanban board built with @dnd-kit/core. Users can easily manage tasks across "To Do," "Work in Progress," and "Done" columns.
2. Persistent State: All user profiles, uploaded medical records, and the real-time status of the Kanban board are securely saved to a cloud-hosted Neon (PostgreSQL) database.
3. Secure File Upload: Users can safely upload and store their medical reports for AI processing and record-keeping.

🔐 Security and Architecture
1. Secure Authentication: User login and sign-up are handled by Privy, providing secure, wallet-enabled, and traditional email/password authentication.
2. New User Onboarding: A streamlined "Get Started" page ensures new user profiles are correctly initialized and saved to the database upon registration.
3. Data Isolation: All user data, medical records, and Kanban board changes are saved persistently, ensuring a continuous and secure patient journey.

🛠️ Tech Stack
1. Frontend: React.js (with Vite) – Fast, modern frontend development.
2. Styling: Tailwind CSS – Utility-first CSS framework for rapid, responsive styling.
3. AI/ML: Google Gemini AI – Core engine for document analysis and structured data generation.
4. Authentication: Privy – Secure, robust authentication and identity management.
5. Database: Neon (PostgreSQL) – Serverless, scalable cloud database for persistent state.
6. ORM: Drizzle ORM – TypeScript ORM for interacting with the database schema.
7. UI Interaction: @dnd-kit/core – Modern library for interactive drag-and-drop Kanban functionality.

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
The application will open at http://localhost:5173.

🌐 Deployment Configuration
<<<<<<< HEAD
For successful deployment on Vercel, perform these critical steps:

Vercel Secrets: In your Vercel Dashboard, set the NEON_DATABASE_URL as an Environment Variable.

Privy Authorized Domains: In your Privy application settings, add your deployment URL (https://beat-cancer-project.vercel.app) to the "Allowed Origins" list to prevent 403 errors.

<p align="center"> Built with ❤️ by Shivang </p>
=======

For successful deployment on Vercel, you must perform these final, critical security and configuration steps:
1. Vercel Secrets: In your Vercel Dashboard, set the NEON_DATABASE_URL as an Environment Variable.
2. Privy Authorized Domains: In your Privy application settings, add your deployment URL (https://beat-cancer-project.vercel.app) to the Allowed origins list to prevent 403 Forbidden errors.

<<<<<<< HEAD
Vercel Secrets: In your Vercel Dashboard, set the NEON_DATABASE_URL as an Environment Variable.

Privy Authorized Domains: In your Privy application settings, add your deployment URL (https://beat-cancer-project.vercel.app) to the Allowed origins list to prevent 403 Forbidden errors.
>>>>>>> 8d01804 (Refactor README for improved clarity and organization)
=======
>>>>>>> 0604194 (Remove duplicate deployment instructions from README)
