// ============================================================================
// app/favourites/page.tsx   →   Page of user's favourited animals
// ============================================================================
// Locked behind authgaurd. Determine if user is logged in to view. Otherwise, redirects to log in page
// displays any animals that have been favourited.
// finds the user id #, compares it to database favourite table to pull all animal id#s associated with the user
// then pulls corresponding data from the species table to find the information to display for each animal.
// uses the existing ViewAnimalCard to generate display the animal information
// ----------------------------------------------------------------------------

import { redirect } from "next/navigation";
import { createClient } from "@/lib/server";
import ViewAnimalCard from "@/components/ViewAnimalCard";

export default async function FavouritesPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  
  const { data: favourites, error: favouritesError } = await supabase
    .from("favourites")
    .select("animal_id")
    .eq("user_id", user.id);

  if (favouritesError) {
    console.error(favouritesError);
    return null;
  }

    //set a constant of all the favourited animal ids for this user on supabase
  const animalIds = favourites.map((favourite) => favourite.animal_id);

    const {data: animals, error: animalError} = await supabase
    .from("species")
    .select("*")
    .in("id", animalIds)

    if (animalError) {
    console.error(animalError);
  }
  return (
    <main>
        <div className="flex w-full justify-center mt-5 ml-5 lg:ml-0">
            <h1 className="font-serif text-green-900 text-4xl font-bold">Your Favourite Animals</h1>
        </div>
    <div className = "flex flex-col lg:grid lg:grid-cols-4">
      {animals?.map((animal) => (
        <ViewAnimalCard
              key={animal.id}
              imageUri={animal.imageUri}
              species={animal.species}
              habitat={animal.habitat}
              blurb={animal.blurb}
              conservationStatus={animal.conservationStatus}
              animalClass={animal.animalClass} id={animal.id}  />
      ))}
      </div>
    </main>
  );
}