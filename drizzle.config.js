// drizzle.config.js
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/utils/schema.jsx',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    // This is YOUR new, clean database. This is correct.
    url: (process.env.DATABASE_URL),
  },
});