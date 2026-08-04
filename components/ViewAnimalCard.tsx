import React from 'react'
import Image from "next/image";
import ConservationStatusCard from './ConservationStatusCard';

type ViewAnimalCardProps = {
  imageUri: string;
  habitat: string;
  species: string;
  blurb: string;
  conservationStatus: string
  animalClass: string
};

const ViewAnimalCard = ({
  imageUri,
  habitat,
  species,
  blurb,
  conservationStatus,
  class,
}: ViewAnimalCardProps) => {
  return (
    <div className="bg-white  h-120 max-w-full w-[90%] ml-4 lg:w-70 rounded-2xl mt-10 flex flex-col lg:my-10">
        <div className="w-full p-4 h-80">
            
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
            <div >
              <ConservationStatusCard conservationStatus={conservationStatus} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default ViewAnimalCard
