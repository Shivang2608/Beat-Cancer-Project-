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
