import { pgTable, integer, text, json, serial } from "drizzle-orm/pg-core";

type UserType = "freelancer" | "client";
type Gender = "male" | "female" | "others";

const userSchema = pgTable("users", {
  id: serial().primaryKey(),
  email: text().unique().notNull(),
  password: text().notNull(),
  name: text().notNull(),
  username: text().unique().notNull(),
  age: integer().notNull(),
  gender: text().$type<Gender>().notNull(),
  user_type: text().$type<UserType>().notNull(),
  transacions: integer().array().default([]),
  jobs: integer().array().default([]),
});

export default userSchema;
