/*
 * Author: Ash Burn, Patrick Cook
 * Date: 2026-08-10
 * Description: Authorization for API routes. Reads the current user from session cookie and reports.
 * Checks if the user is an admin. Input is incoming requests session cookie.
 */

import { createClient } from "@/lib/server";

export async function isAdmin() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  return data.user?.app_metadata?.role === "admin";
}
