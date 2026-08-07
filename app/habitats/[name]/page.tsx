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

  return (
    <div>
      <h1>{habitat.name}</h1>
    </div>
  );
};

export default IndividualHabitatPage;