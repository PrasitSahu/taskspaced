import {
  integer,
  pgTable,
  real,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

const transactionTable = pgTable("transactions", {
  id: serial().primaryKey(),
  amount: real().notNull(),
  send_date: timestamp().defaultNow(),
  receive_date: timestamp(),
  payer_id: integer().notNull(),
  payee_id: integer().notNull(),
  status: text({ enum: ["success", "fail", "pending"] }).notNull(),
  note: text(),
});

export default transactionTable;
