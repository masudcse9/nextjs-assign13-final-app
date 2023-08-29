import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(req, res) {
  const msg = "I am GET and Successfully redirect";
  
  redirect('/')
}
