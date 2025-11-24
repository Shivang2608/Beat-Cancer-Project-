import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// This is the correct, secure syntax for accessing the database URL 
// from Vercel's serverless environment variables.
const sql = neon(process.env.NEON_DATABASE_URL); 

export const db = drizzle(sql, { schema });