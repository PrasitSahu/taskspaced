import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";
dotenv.config();

export default defineConfig({
  dialect: "postgresql",
  schema: "./database/schema/",
  out: "./drizzle",
  dbCredentials: {
    host: process.env.DATABASE_HOST!,
    database: process.env.DATABASE_NAME!,
    user: process.env.DATABASE_USER!,
    password: process.env.DATABASE_PASSWORD!,
    ssl: !process.env.DEV ? true : false,
  },
});
