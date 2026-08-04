import React from 'react'
import Image from "next/image";

type HomeAnimalCardProps = {
  imageUri: string;
  habitat: string;
  species: string;
  blurb: string;
};

const HomeAnimalCard = ({
  imageUri,
  habitat,
  species,
  blurb,
}: HomeAnimalCardProps) => {
  return (
    <div className="bg-white  h-150 max-w-full w-[90%] ml-4 lg:w-120 rounded-2xl mt-10 flex flex-col lg:my-10">
        <div className="w-full p-4 h-120">
            
<Image
  src={imageUri}
  alt={species}
  width={480}
  height={300}
  sizes="(max-width: 768px) 100vw, 33vw"
  className="w-full h-full object-cover"
/>
  
        <h2 className="text-orange-500 mt-7 text-sm font-semibold">{habitat.toUpperCase()}</h2>
      <h1 className="text-green-900 font-bold text-2xl">{species}</h1>
      <p className="text-green-800 text-xs">{blurb}</p>
      </div>


    </div>
  )
}

export default HomeAnimalCard
