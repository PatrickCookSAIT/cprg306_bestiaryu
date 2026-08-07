import { supabase } from "./supabase";
import type { Animal, Denizen, Habitat } from "./types";

export async function getAnimals(): Promise<Animal[]> {
  const { data, error } = await supabase
    .from("species")
    .select("*")
    .order("id");
  if (error) throw error;
  return data;
}

export async function getHabitats(): Promise<Habitat[]> {
  const { data, error } = await supabase
    .from("habitat")
    .select("*")
    .order("id");
  if (error) throw error;
  return data.map((h) => h.name);
}

export async function getDenizens(): Promise<Denizen[]> {
  const { data, error } = await supabase
    .from("denizen")
    .select("*")
    .order("name");
  if (error) throw error;
  return data;
}


