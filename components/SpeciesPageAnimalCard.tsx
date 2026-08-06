import React from 'react'
import Image from "next/image";
import ConservationStatusCard from './ConservationStatusCard';
import Link from 'next/link';

type SpeciesPageAnimalCardProps = {
  species:string,
    animalClass:string,
    binomialName:string,
    conservationStatus:string,
    habitat:string,
    socialStructure:string,
    diet:string,
    lifespan:string,
    imageUri:string
};

const SpeciesPageAnimalCard = ({
    species,
    animalClass,
    binomialName,
    conservationStatus,
    habitat,
    socialStructure,
    diet,
    lifespan,
    imageUri
}: SpeciesPageAnimalCardProps) => {
  return (
    
    <div className="bg-white  h-115 max-w-full w-[90%] ml-4 lg:w-70 rounded-2xl mt-10 flex flex-col lg:my-10">
        <div className="w-64 h-64 lg:w-48 lg:h-48 p-4 self-center">
            
          <Image
            src={imageUri}
            alt={species}
            width={480}
            height={300}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-full h-full object-cover rounded-full"
          />
          </div>
          <div className="flex flex-col mt-5 items-center border-b pb-5 border-gray-400">
            <div className="justify-between flex flex-row mb-3">
              <ConservationStatusCard conservationStatus={conservationStatus} />    
            </div>
            <h1 className="text-green-900 font-bold text-2xl mb-1">{species}</h1>
            <h2 className="text-stone-400 text-xs italic mb-2">{binomialName}</h2>
            <h3 className="text-xs text-gray-400">{animalClass.toUpperCase()}</h3>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 self-center ml-5 mt-3">
            <div className="flex flex-col">
              <h3 className="text-[9px] text-gray-400">HABITAT</h3>
              <h4 className="text-[9px] text-green-900 font-semibold">{habitat.charAt(0).toUpperCase() + habitat.slice(1)}</h4>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[9px] text-gray-400">DIET</h3>
              <h4 className="text-[9px] text-green-900 font-semibold">{diet.charAt(0).toUpperCase() + diet.slice(1)}</h4>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[9px] text-gray-400">SOCIAL STRUCTURE</h3>
              <h4 className="text-[9px] text-green-900 font-semibold">{socialStructure.charAt(0).toUpperCase() + socialStructure.slice(1)}</h4>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[9px] text-gray-400">LIFESPAN</h3>
              <h4 className="text-[9px] text-green-900 font-semibold">{lifespan.charAt(0).toUpperCase() + lifespan.slice(1)}</h4>
            </div>
          </div>
        
    </div>
 
  )
}

export default SpeciesPageAnimalCard
