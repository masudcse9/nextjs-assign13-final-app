import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function GET(req, res) {
  const msg = "I am GET and Successfully cookies set";

  const cookieStore = cookies();
  cookieStore.set("Theme", "Dark", {
    httpOnly: true,
  });
  cookieStore.set("Language", "NextJS", {
    httpOnly: true,
  });
  cookieStore.set("Developer", "Md. Masud Rana", {
    httpOnly: true,
  });

  return NextResponse.json({ msg });
}
