import React from "react";
import { supabase } from "@/lib/supabase";

type Props = {
  params: Promise<{
    name: string;
  }>;
};

const IndividualHabitatPage = async ({ params }: Props) => {
  const { name } = await params;

  // removing URL additions like %20 to find the correct habitat
  const decodedName = decodeURIComponent(name);

  // finding the habitat information from the Supabase database
  const { data: habitat, error } = await supabase
    .from("habitat")
    .select("*")
    .eq("name", decodedName)
    .single();

  if (error || !habitat) {
    console.log("decodedName:", decodedName);
    console.log("error:", error);

    return <h1>{decodedName} not found</h1>;
  }
  //pull data from species table on supabase where the species resides in current habitat
  const { data: animals, error: animalError } = await supabase
  .from("species")
  .select("species")
  .eq("habitat", habitat.name);

  if (animalError) {
    console.error(animalError);
    return <h1>Failed to load animals</h1>;
  }

  return (
    <div>
      <h1>{habitat.name}</h1>
  <div>
    {animals.map((e) => (
      <p key={e.species}>{e.species}</p>
    ))}
  </div>
    </div>
  );
};

export default IndividualHabitatPage;
