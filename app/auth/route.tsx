import { NextRequest, NextResponse } from "next/server";
import { drizzle } from "drizzle-orm/node-postgres";
import { z } from "zod";
import userTable from "@/database/schema/user";
import { and, eq } from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL!);

const LoginUser = z.object({
  email: z.string().email({ message: "invalid email" }),
  password: z
    .string()
    .min(8, {
      message: "length of the password should be more than 8 characters",
    })
    .max(32, {
      message: "length of the password should not be more than 32 characters",
    })
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
});

const SignupUser = LoginUser.extend({
  name: z.string(),
  username: z.string(),
  gender: z.enum(["male", "female", "others"]),
  role: z.enum(["freelancer", "client"]),
});

export async function POST(req: NextRequest) {
  const body: z.infer<typeof LoginUser> = await req.json();
  const parsed = LoginUser.safeParse(body);

  if (parsed.success) {
    const user = await db
      .select()
      .from(userTable)
      .where(
        and(
          eq(userTable.email, body.email),
          eq(userTable.password, body.password)
        )
      );

    return NextResponse.json(user);
  }

  return NextResponse.json({});
}

export async function PUT(req: NextRequest) {
  const user: z.infer<typeof SignupUser> = await req.json();
  if (!user.username) user.username = user.email.split("@")[0];
  if (!user.name) user.name = user.email.split("@")[0];

  const parsed = SignupUser.safeParse(user);

  if (parsed.success) {
    await db.insert(userTable).values(user as any);
    return NextResponse.json({}, { status: 201 });
  }

  return NextResponse.json({ error: parsed.error.message }, { status: 400 });
}

export async function GET(req: NextRequest) {
  return NextResponse.redirect(`${req.url}/login`);
}
