// REST endpoint for the habitat collection.
import { NextResponse } from "next/server";
import { createClient } from "@/lib/server";
import { isAdmin } from "@/lib/auth";

export async function GET() {
  const supabase = await createClient();
  const { data } = await supabase.from("habitat").select("*");
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  if (!(await isAdmin()))
    return NextResponse.json({ error: "Admins only" }, { status: 403 });
  const supabase = await createClient();
  const body = await request.json();
  const { data } = await supabase.from("habitat").insert(body).select();
  return NextResponse.json(data);
}
