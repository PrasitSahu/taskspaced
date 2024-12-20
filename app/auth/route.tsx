import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const User = z.object({
  email: z.string().email({ message: "invalid email" }),
  password: z
    .string()
    .min(8, {
      message: "length of the password should be more than 8 characters",
    })
    .max(32, {
      message: "length of the password should not be more than 32 characters",
    })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]$/
    ),
});

export async function POST(req: NextRequest) {
  const user = await req.json();
  User.safeParse(user);
}

export async function GET(req: NextRequest) {
  return NextResponse.redirect(`${req.url}/login`);
}
