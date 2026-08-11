// ============================================================================
// app/habitats/page.tsx   →   Page to display map and habitat list
// ============================================================================
// Displays a directory of the habitats located in the zoo. Allows user to link to the dynamic routing page of each habitat.
// Also displays the map of the zoo and has a link to allow users to download a pdf of the map
// ----------------------------------------------------------------------------

import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/client";


export default async function HabitatsPage() {
  //pull data from habitat table on supabase
  const supabase = createClient();
  const { data: habitats, error } = await supabase.from("habitat").select("*");

  if (error) {
    console.error(error);
    return <h1>Failed to load animals</h1>;
  }
  //pull data from species table on supabase
  const { data: animals, error: animalError } = await supabase
    .from("species")
    .select("species, habitat");

  if (animalError) {
    console.error(animalError);
    return <h1>Failed to load animals</h1>;
  }

  const enclosures = habitats.map((habitat) => ({
    ...habitat,
    animals: animals
      .filter((animal) => animal.habitat === habitat.name)
      .slice(0, 3)
      .map((animal) => animal.species)
      .join(", "),
  }));
  return (
    <main className="flex flex-col bg-red-50 w-full">
      <div className="flex flex-col w-[90%] mx-auto lg:px-10 mt-10">
        <div className="flex justify-between lg:flex-row flex-col">
          <h1 className="text-4xl lg:text-6xl text-green-950 font-serif font-bold">
            Habitats
          </h1>

          <Link
            href="/sanctuary-map.pdf"
            download
            className="flex items-center bg-green-900 hover:bg-green-500 text-xs lg:text-md text-white h-10 font-bold py-1 px-4 rounded mr-8"
          >
            
            💾 Download PDF
          </Link>
        </div>
        <div>
          
            <Image
              src="/sanctuary-map.png"
              alt="Sanctuary map"
              width={1200}
              height={1000}
              className="w-full h-auto lg:hidden"
            />
          
        </div>
        <div className="flex justify-between my-5">
          <div className=" bg-white rounded-lg w-full lg:w-72 p-4">
            <h2 className=" text-xl text-gray-400">Directory</h2>
            <h3 className="font-light text-lg mt-4">Enclosures</h3>

            {enclosures.map((e) => (
              <Link
                key={e.id}
                href={`/habitats/${e.name}`}
                className="block hover:scale-105 transition-transform"
              >
                <div className="mt-4 group">
                  <p className="font-bold text-sm group-hover:text-green-700">
                    {e.name}
                  </p>
                  <p className="text-xs text-gray-600 group-hover:text-green-600">
                    {e.animals}
                  </p>
                </div>
              </Link>
            ))}

            {/*<h3 className="font-light text-lg mt-4">Amenities</h3>*/}
          </div>
          <div className="">
            <Image
              src="/sanctuary-map.png"
              alt="Sanctuary map"
              width={800}
              height={600}
              className="lg:block hidden"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
