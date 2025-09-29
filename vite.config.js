import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite"; // <-- Added loadEnv

export default defineConfig(({ mode }) => {
  // Load environment variables from .env file based on the current mode
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    
    // FIX: This 'define' block explicitly injects the NEON_DATABASE_URL value 
    // from the loaded .env file into the 'process.env' structure, 
    // resolving the local 'process is not defined' error.
    define: {
      'process.env.NEON_DATABASE_URL': JSON.stringify(env.NEON_DATABASE_URL),
      'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
    },
    
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    base: "./",
  };
});