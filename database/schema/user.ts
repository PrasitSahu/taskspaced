import { pgTable, integer, text, json, serial } from "drizzle-orm/pg-core";

type Role = "freelancer" | "client";
type Gender = "male" | "female" | "others";

const userTable = pgTable("users", {
  id: serial().primaryKey(),
  email: text().unique().notNull(),
  password: text().notNull(),
  name: text().notNull(),
  username: text().unique().notNull(),
  age: integer(),
  gender: text().$type<Gender>().notNull(),
  role: text().$type<Role>().notNull(),
  transacions: integer().array().default([]),
  jobs: integer().array().default([]),
});

export default userTable;
