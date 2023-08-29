import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { headers } from "next/headers";

export async function GET(req, res) {
  const headersList = headers();
  const list = headersList.get("Bearer");

  return NextResponse.json({ "New Auth": list });
}
