import Image from "next/image";

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


export default async function HabitatsPage() {
  
  

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
            <h2 className=" text-xl">Directory</h2>
            <h3 className="font-light text-lg mt-4">Enclosures</h3>
            
            {enclosures.map((e) =>
              <div key={e.name} className="mt-4">
                <p className="font-bold text-sm">{e.name}</p>
                <p className="text-xs text-gray-600">{e.animals}</p>
              </div>
            )

            }

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

