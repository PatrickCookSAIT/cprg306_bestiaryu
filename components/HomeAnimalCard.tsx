import React from 'react'
import Image from "next/image";
import ConservationStatusCard from './ConservationStatusCard';

type HomeAnimalCardProps = {
  imageUri: string;
  habitat: string;
  species: string;
  blurb: string;
  conservationStatus: string
};

const HomeAnimalCard = ({
  imageUri,
  habitat,
  species,
  blurb,
  conservationStatus,
}: HomeAnimalCardProps) => {
  return (
    <div className="bg-white  h-160 max-w-full w-[90%] ml-4 lg:w-120 rounded-2xl mt-10 flex flex-col lg:my-10">
        <div className="w-full p-4 h-120">
            
          <Image
            src={imageUri}
            alt={species}
            width={480}
            height={300}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-full h-full object-cover"
          />
          <div className="flex flex-col">
            <h2 className="text-orange-500 mt-7 text-sm font-semibold">{habitat.toUpperCase()}</h2>
            <h1 className="text-green-900 font-bold text-2xl">{species}</h1>
            <div className="h-10">
              <p className="text-green-800 text-xs">{blurb}</p>
            </div>
            <div className="justify-end items-end align-bottom">
              <ConservationStatusCard conservationStatus={conservationStatus} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeAnimalCard
