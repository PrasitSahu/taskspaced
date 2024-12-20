import { sql } from "drizzle-orm";
import {
  integer,
  pgTable,
  real,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

interface Transacion {
  id: number;
  amount: number;
  send_date: Date;
  receive_date: Date;
  payer_id: number;
  payee_id: number;
  status: "success" | "fail" | "pending";
  note: string;
}

const transaction = pgTable("transactions", {
  id: serial().primaryKey(),
  amount: real().notNull(),
  send_date: timestamp().defaultNow(),
  receive_date: timestamp(),
  payer_id: integer().notNull(),
  payee_id: integer().notNull(),
  status: text({ enum: ["success", "fail", "pending"] }).notNull(),
  note: text(),
});
