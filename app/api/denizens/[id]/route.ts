// REST endpoint for a single denizen record.
import { NextResponse } from "next/server";
import { createClient } from "@/lib/server";
import { isAdmin } from "@/lib/auth";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(request: Request, { params }: Ctx) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from("denizens").select("*").eq("id", id);
  return NextResponse.json(data);
}

export async function PUT(request: Request, { params }: Ctx) {
  if (!(await isAdmin()))
    return NextResponse.json({ error: "Admins only" }, { status: 403 });
  const { id } = await params;
  const supabase = await createClient();
  const body = await request.json();
  const { data } = await supabase
    .from("denizens")
    .update(body)
    .eq("id", id)
    .select();
  return NextResponse.json(data);
}

export async function PATCH(request: Request, { params }: Ctx) {
  if (!(await isAdmin()))
    return NextResponse.json({ error: "Admins only" }, { status: 403 });
  const { id } = await params;
  const supabase = await createClient();
  const body = await request.json();
  const { data } = await supabase
    .from("denizens")
    .update(body)
    .eq("id", id)
    .select();
  return NextResponse.json(data);
}

export async function DELETE(request: Request, { params }: Ctx) {
  if (!(await isAdmin()))
    return NextResponse.json({ error: "Admins only" }, { status: 403 });
  const { id } = await params;
  const supabase = await createClient();
  await supabase.from("denizens").delete().eq("id", id);
  return NextResponse.json({ deleted: id });
}
