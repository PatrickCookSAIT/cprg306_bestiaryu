import React from 'react'
import Image from "next/image";
import ConservationStatusCard from './ConservationStatusCard';
import Link from 'next/link';

type ViewAnimalCardProps = {
  id: string;
  imageUri: string;
  habitat: string;
  species: string;
  blurb: string;
  conservationStatus: string
  animalClass: string
};

const ViewAnimalCard = ({
    species,
    animalClass,
    binomialName,
    conservationStatus,
    habitat,
    socialStructure,
    diet,
    lifespan,
    imageUri
}: ViewAnimalCardProps) => {
  return (
    <Link href={`/animals/${species}`} className="block hover:scale-105 transition-transform">
    <div className="bg-white  h-135 max-w-full w-[90%] ml-4 lg:w-70 rounded-2xl mt-10 flex flex-col lg:my-10">
        <div className="w-full p-4 h-80">
            
          <Image
            src={imageUri}
            alt={species}
            width={480}
            height={300}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-full h-full object-cover"
          />
          <div className="flex flex-col mt-10">
            <div className="justify-between flex flex-row mb-3">
              <ConservationStatusCard conservationStatus={conservationStatus} />
              <h3 className="text-xs text-gray-400">{animalClass.toUpperCase()}</h3>
            </div>

            <h1 className="text-green-900 font-bold text-2xl mb-1">{species}</h1>
            <div className="h-10">
              <p className="text-stone-400 text-xs italic">{blurb}</p>
            </div>
            <div className="w-full border-b border-b-green-950 mt-6 pt-4 text-center">
              <h2 className="text-md font-semibold text-green-950 font-serif">EXPLORE HABITAT</h2>
            </div>
            
          </div>
        </div>
    </div>
    </Link>
  )
}

export default ViewAnimalCard
