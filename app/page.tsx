
import HomeAnimalCard from "@/components/HomeAnimalCard";
import Image from "next/image";
import { animals } from "../lib/data";

//server won't cache the random animal choices so it with allow for new animals each reload
export const dynamic = "force-dynamic";
//function that creates a copy of animal array in random order so random animals can be generated for feature profile
function getFeaturedAnimals(arr: typeof animals, count: number) {
  return [...arr]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export default function Home() {
  //takes the animals data array and 3 to generate 3 animals to be the page's featured animals
  const featuredAnimals = getFeaturedAnimals(animals,3)
  return (
    <>
    <div className="relative text-center max-w-full">
 <Image
  src="https://images.pexels.com/photos/34296800/pexels-photo-34296800.jpeg"
  alt="Red panda"
  width={1200}
  height={800}
  style={{ width: "100%",     height: "80vh",
    objectFit: "cover", }}
/>
      <div className="w-full absolute top-0 left-0  mt-50 ml-10 flex flex-col items-start">
        <h2 className="text-6xl font-bold text-white ">
          Explore Our
        </h2>
        <h2 className="text-6xl font-bold font-serif text-green-200 ">
          Wild World
        </h2>
        <div className=" w-80 ">
        <h3 className="text-white text-start ">Experience the delicate balance of nature in our ethically-led habitats. From the canopy to the forest floor, discover the stories of the creatures we share our planet with.</h3>
        </div>
        <div className="flex flex-row">
        <button className="mt-10 bg-green-900 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mr-8">
          Plan your trip →
        </button>
        <button className="mt-10  bg-gray-500/25 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
          View our animals
        </button>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:justify-around lg:mx-10 max-w-full">
    {featuredAnimals.slice(0, 3).map((animal) => (
  <HomeAnimalCard
    key={animal.id}
    imageUri={animal.imageUri}
    species={animal.species}
    habitat={animal.habitat}
    blurb={animal.blurb}
  />
  
))}
</div>
    </>
  );
}
