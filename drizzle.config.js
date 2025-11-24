// drizzle.config.js
import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

export default defineConfig({
  schema: './src/utils/schema.jsx',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: meta.env.VITE_NEON_DATABASE_URL,
  },
});
