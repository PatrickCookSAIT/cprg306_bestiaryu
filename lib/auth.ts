/*
 * Description: Returns true if the logged-in user is an administrator.
 */

import { createClient } from "@/lib/server";

export async function isAdmin() {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return false;

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", auth.user.id)
    .single();

  return profile?.role === "admin";
}
