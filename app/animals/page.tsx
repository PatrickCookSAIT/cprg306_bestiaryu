'use client'
import React, { useEffect, useState } from 'react'
import { animals } from "../../lib/data";
import Link from "next/link";

import ViewAnimalCard from '@/components/ViewAnimalCard';
function getFilteredAnimals(
  arr: typeof animals,
  habitat: string,
  conservationStatus: string,
  animalClass: string
) {
  return arr.filter((animal) => {
    const matchesHabitat =
      habitat === "All" || animal.habitat === habitat;

    const matchesStatus =
      conservationStatus === "All" || animal.conservationStatus === conservationStatus;

    const matchesClass =
      animalClass === "All" || animal.animalClass === animalClass;

    return matchesHabitat && matchesStatus && matchesClass;
  });
}
const Animals = () => {

  const [habitatSort, setHabitatSort] = useState("All");
  const [conservationStatusSort, setConservationStatusSort] = useState("All");
  const [animalClassSort, setAnimalClassSort] = useState("All");

  const filteredAnimals = getFilteredAnimals(
    animals,
    habitatSort,
    conservationStatusSort,
    animalClassSort
  );

  return (
    <div className="bg-red-50 w-full flex flex-col">
      <div className="flex flex-col w-[90%] lg:w-1/2 px-10 mt-10">
        <h2 className="text-xa text-orange-800 font-semibold mb-5">ENRICHED DISCOVERY</h2>
        <h1 className="text-4xl lg:text-6xl text-green-950 font-serif font-bold">Meet the Denizens of Our Domain</h1>
        <p className="mt-5 text-sm text-green-900">Explore our collection of extraordinary wildlife, from the driest of desert dwellers to the creatures of summit and sky.</p>
      </div>
      <div className="w-[90%] px-10 border bg-green-900 border-gray-200 rounded-lg self-center mt-10 lg:mt-20 flex flex-col lg:flex-row justify-between gap-2 py-2">
            <div>
              {/*select habitat for sort*/}
              <select
                value={habitatSort}
                onChange={(e) => setHabitatSort(e.target.value)}
                className="border rounded-xl bg-white border-white p-2 w-full"
              >
                <option value="All">☰ All Habitats</option>
                <option value="The Sunsoaked Savanna">The Sunsoaked Savanna</option>
                <option value="The Great Rainforest">The Great Rainforest</option>
                <option value="The Frozen Arctic">The Frozen Arctic</option>
                <option value="The Lost Peaks">The Lost Peaks</option>
                <option value="The Dry Dry Desert">The Dry Dry Desert</option>
                <option value="The Sparkling Sea">The Sparkling Sea</option>
                <option value="The Rounding Rivers">The Rounding Rivers</option>
                <option value="The Wettest Wetlands">The Wettest Wetlands</option>
              </select>     
            </div>
            <div>
                  {/*select conservation status for sort*/}
                  <select
                    value={conservationStatusSort}
                    onChange={(e) => setConservationStatusSort(e.target.value)}
                    className="border rounded-xl bg-white border-white p-2 w-full"
                  >
                    <option value="All">🛡️ Conservation Status</option>
                    <option value="extinct">Extinct</option>
                    <option value="extinct in the wild">Extinct in the Wild</option>
                    <option value="critically endangered">Critically Endangered</option>
                    <option value="endangered">Endangered</option>
                    <option value="vulnerable">Vulnerable</option>
                    <option value="near threatened">Near Threatened</option>
                    <option value="least concern">Least Concern</option>
                  </select>     
                </div>
        <div>
                  {/*select animal class for sort*/}
                  <select
                    value={animalClassSort}
                    onChange={(e) => setAnimalClassSort(e.target.value)}
                    className="border rounded-xl bg-white border-white p-2 w-full"
                  >
                    <option value="All">🐅 Select Animal Class</option>
                    <option value="mammal">Mammal</option>
                    <option value="bird">Bird</option>
                    <option value="reptile">Reptile</option>
                    <option value="amphibian">Amphibian</option>
                    <option value="fish">Fish</option>
                    <option value="invertebrate">Invertebrate</option>

                  </select>     
                </div>
       </div>
       <div className="grid grid-cols-1 lg:grid-cols-4  lg:justify-around lg:mx-10 max-w-full">
    {filteredAnimals.slice(0, 8).map((animal) => (
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

export default Animals
