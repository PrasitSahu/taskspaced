import userTable from "@/database/schema/user";
import { drizzle } from "drizzle-orm/node-postgres";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL!);

export async function GET(req: NextRequest) {
  const body = await req.json();
  const user = await db
    .select()
    .from(userTable)
    .where(eq(userTable.id, body.id));

  return NextResponse.json([user]);
}
