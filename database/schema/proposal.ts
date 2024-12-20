import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

const proposalTable = pgTable("proposals", {
  id: serial().primaryKey(),
  content: text().notNull(),
  user_id: integer().notNull(),
  created_at: timestamp().defaultNow(),
  seen: boolean().default(false),
});

export default proposalTable;
