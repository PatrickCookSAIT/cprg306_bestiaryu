// ============================================================================
// app/animals/[species]/page.tsx   →   The dynamically routed page for each species of animal
// ============================================================================
// Displays the SpeciesPageAnimalCard which gives general information on the speices routed to
// Connects with supabase to find all Denizens of that species (ex dave the monkey)
// displays all the denizens of the species with the DenizenCard
// ----------------------------------------------------------------------------

import React from "react";
import SpeciesPageAnimalCard from "@/components/SpeciesPageAnimalCard";
import DenizenCard from "@/components/DenizenCard";
import { createClient } from "@/lib/client";

type Props = {
  params: Promise<{
    species: string;
  }>;
};

const IndividualAnimalPage = async ({ params }: Props) => {
  const { species } = await params;
  const supabase = createClient();
  // removing URL additions like %20 to find the correct species
  const decodedSpecies = decodeURIComponent(species);

  // finding the species information from the Supabase database
  const { data: animal, error } = await supabase
    .from("species")
    .select("*")
    .eq("species", decodedSpecies)
    .single();

  if (error || !animal) {
    console.log("decodedSpecies:", decodedSpecies);
    console.log("animal:", animal);
    console.log("error:", error);

    return <h1>{decodedSpecies} not found</h1>;
  }

  // finding all animals housed at the zoo of the species type of route
  const { data: denizen, error: denizenError } = await supabase
    .from("denizens")
    .select("*")
    .eq("species", decodedSpecies);

  if (denizenError) {
    console.log("Denizen error message:", denizenError.message);
    console.log("Denizen error details:", denizenError.details);
    console.log("Denizen error hint:", denizenError.hint);
    console.log("Denizen error code:", denizenError.code);
  }
  console.log("denizen:", denizen);
  return (
    <main className="bg-red-50">
      <div className="pt-10 lg:mx-10 w-full border-b border-green-900">
        <h1 className="font-serif text-green-900 text-4xl">
          Meet our{" "}
          {denizen && denizen.length > 1 ? animal.plural : animal.species}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row">
        <SpeciesPageAnimalCard
          key={animal.id}
          species={animal.species}
          animalClass={animal.animalClass}
          binomialName={animal.binomialName}
          conservationStatus={animal.conservationStatus}
          habitat={animal.habitat}
          socialStructure={animal.socialStructure}
          diet={animal.diet}
          lifespan={animal.lifespan}
          imageUri={animal.imageUri}
        />

        <div className="flex flex-col lg:flex-row lg:ml-20">
          {denizen?.map((denizen) => (
            <DenizenCard
              key={denizen.id}
              id={denizen.id}
              name={denizen.name}
              age={denizen.age}
              sex={denizen.sex}
              arrivalDate={denizen.arrivalDate}
              loves={denizen.loves}
              dislikes={denizen.dislikes}
              blurb={denizen.blurb}
              imageUri={denizen.imageUri}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default IndividualAnimalPage;

