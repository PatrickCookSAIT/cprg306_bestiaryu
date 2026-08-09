import React from "react";
import { createClient } from "@/lib/client";
import HabitatCard from "@/components/HabitatCard";
import HabitatAnimalCard from "@/components/HabitatAnimalCard";

type Props = {
  params: Promise<{
    name: string;
  }>;
};

const IndividualHabitatPage = async ({ params }: Props) => {
  const supabase = createClient();
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
    .select("*")
    .eq("habitat", habitat.name);

  if (animalError) {
    console.error(animalError);
    return <h1>Failed to load animals</h1>;
  }

  return (
    <main className="bg-red-50 flex flex-col justify-center">
      <div className="flex justify-center">
      <HabitatCard
      key={habitat.id}
      id={habitat.id}
      name={habitat.name}
      img1={habitat.img1}
      img2={habitat.img2}
      img3={habitat.img3}/>
</div>
      <div className="flex flex-row overflow-x-auto gap-4">
         {animals.map((animal) => (

        <HabitatAnimalCard
        key={animal.id}
              imageUri={animal.imageUri}
              species={animal.species}
              habitat={animal.habitat}
              blurb={animal.blurb}
              conservationStatus={animal.conservationStatus}
              animalClass={animal.animalClass} id={'animal.id'}  />
         ))}
      </div>
    </main>
  );
};

export default IndividualHabitatPage;

