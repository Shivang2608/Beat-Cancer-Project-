// drizzle.config.js
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/utils/schema.jsx',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    // This is YOUR new, clean database. This is correct.
    url: "postgresql://neondb_owner:npg_Vitn6rYvQp5g@ep-solitary-bonus-a1xn12cz-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  },
});