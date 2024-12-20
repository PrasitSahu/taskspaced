import {
  integer,
  pgTable,
  real,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

const jobTable = pgTable("jobs", {
  id: serial().primaryKey(),
  title: text().notNull(),
  description: text().notNull(),
  amount: real().notNull(),
  employee_id: integer(),
  employer_id: integer().notNull(),
  created_at: timestamp().defaultNow(),
  closed_at: timestamp(),
  proposals: integer().array().default([]),
  contracts: integer().array().default([]),
});

export default jobTable;
