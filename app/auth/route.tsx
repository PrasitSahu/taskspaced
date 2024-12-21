import { NextRequest, NextResponse } from "next/server";
import { drizzle } from "drizzle-orm/node-postgres";
import { z } from "zod";
import userTable from "@/database/schema/user";
import { and, eq } from "drizzle-orm";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

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

export async function POST(req: NextRequest, res: NextResponse) {
  const cookieStore = cookies();

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

    if (user.length) {
      const token = jwt.sign(
        { email: user[0].email, password: user[0].password },
        process.env.JWT_TOKEN!
      );
      cookieStore.set("session", token);

      return NextResponse.json({}, { status: 202 });
    }

    return NextResponse.json(
      { error: "Invalid user credentials" },
      { status: 400 }
    );
  }

  return NextResponse.json({ error: parsed.error.message }, { status: 400 });
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
  const cookieStore = cookies();

  const token = cookieStore.get("session");
  if (token) {
    jwt.verify(token.value, process.env.JWT_TOKEN!, async (err, decoded) => {
      if (decoded) {
        const d = decoded as { email: string; password: string; iat: number };
        const user = await db
          .select()
          .from(userTable)
          .where(
            and(
              eq(userTable.email, d.email),
              eq(userTable.password, d.password)
            )
          );

        if (user.length) {
          return NextResponse.redirect(`${req.nextUrl.origin}/`);
        }
      }
    });
  }
  return NextResponse.redirect(`${req.url}/login`);
}
