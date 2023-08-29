import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function GET(req, res) {
  const msg = "I am GET and Successfully cookies get";

  const cookieStore = cookies();
  const all = cookieStore.getAll();

  return NextResponse.json({msg,all})
}
