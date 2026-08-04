import React from 'react'
import { animals } from "../../lib/data";
import Link from "next/link";

import ViewAnimalCard from '@/components/ViewAnimalCard';

const page = () => {
  return (
    <div className="bg-red-50 w-full flex flex-col">
      <div className="flex flex-col w-[90%] lg:w-1/2 px-10 mt-10">
        <h2 className="text-xa text-orange-800 font-semibold mb-5">ENRICHED DISCOVERY</h2>
        <h1 className="text-4xl lg:text-6xl text-green-950 font-serif font-bold">Meet the Denizens of Our Domain</h1>
        <p className="mt-5 text-sm text-green-900">Explore our collection of extraordinary wildlife, from the driest of desert dwellers to the creatures of summit and sky.</p>
      </div>
      <div className="w-[90%] px-10 border border-gray-200 rounded-lg self-center mt-10 lg:mt-20 flex flex-row justify-between">
        <div>
            <h3>All Habitats</h3>
        </div>
        <div>
            <h3>Conservation Status</h3>
        </div>
        <div>
            <h3>Animal Class</h3>
        </div>
       </div>
       <div className="grid grid-cols-1 lg:grid-cols-4  lg:justify-around lg:mx-10 max-w-full">
    {animals.slice(0, 8).map((animal) => (
  <ViewAnimalCard
    key={animal.id}
    imageUri={animal.imageUri}
    species={animal.species}
    habitat={animal.habitat}
    blurb={animal.blurb}
    conservationStatus={animal.conservationStatus}
    animalClass={animal.animalClass}
  />
  
))}
</div>
    </div>
    
  )
}

export default page
