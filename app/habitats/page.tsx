import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
/*
const enclosures = [
  { name: "The Sunsoaked Savanna", animals: "African Lions, African Elephants, Giraffes" },
  { name: "The Great Rainforest", animals: "Bengal Tigers, Western Lowland Gorillas, Scarlet Macaws" },
  { name: "The Frozen Arctic", animals: "Polar Bears, Emperor Penguins, Arctic Foxes" },
  { name: "The Lost Peaks", animals: "Red Pandas, Snow Leopards, Giant Pandas" },
  { name: "The Dry Dry Desert", animals: "Meerkats, Fennec Foxes, Emus" },
  { name: "The Sparkling Sea", animals: "Great White Sharks, Green Sea Turtles, Manta Rays" },
  { name: "The Rounding Rivers", animals: "American Alligators, Axolotls" },
  { name: "The Wettest Wetlands", animals: "Hippopotami, Flamingos, Bald Eagles" },
];
*/

export default async function HabitatsPage() {
  
  //pull data from habitat table on supabase
  const { data: habitats, error } = await supabase
    .from("habitat")
    .select("*");

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
          <h1 className="text-4xl lg:text-6xl text-green-950 font-serif font-bold">Habitats</h1>

          <a href="/sanctuary-map.pdf" download className="flex items-center gap-2 bg-green-900 hover:bg-green-500 text-xs lg:text-md text-white font-bold py-1 lg:py-2 px-4 rounded mr-8">
            💾 Download PDF
          </a>

        </div>
        <div>
          <div>
            <Image src="/sanctuary-map.png" alt="Sanctuary map" width={1200} height={1000} className="w-full h-auto lg:hidden"/>
          </div>
        </div>
        <div className= "flex justify-between my-5">
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
              <p className="font-bold text-sm group-hover:text-green-700">{e.name}</p>
              <p className="text-xs text-gray-600 group-hover:text-green-600">{e.animals}</p>
            </div>
          </Link>
        ))}

            {/*<h3 className="font-light text-lg mt-4">Amenities</h3>*/}



          </div>
          <div>
            <Image src="/sanctuary-map.png" alt="Sanctuary map" width={800} height={600} className="lg:block hidden" />
          </div>
        </div>

      </div>
    </main>
  );
}

