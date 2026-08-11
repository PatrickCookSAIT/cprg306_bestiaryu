// ============================================================================
// components/DenizenCard.tsx   →   generates a card for each individual animal. (card for jeff and greg, both zebras as an example)
// ============================================================================
// displays information about each individual animal in resuable card. Shows name, age, sex, arrival date to the zoo
// also shows the animal's likes and dislikes, an image and a small description of them
// ----------------------------------------------------------------------------

import React from 'react'
import Image from "next/image";


type DenizenCardProps = {
      id: string;
      name: string;
      age: number;
      sex: string;
      arrivalDate: string;
      loves: string;
      dislikes: string;
      blurb: string;
      imageUri: string,
};

const DenizenCard = ({
    id,
      name,
      age,
      sex,
      arrivalDate,
      loves,
      dislikes,
      blurb,
      imageUri,
}: DenizenCardProps) => {
  return (
    
    <div className="bg-white  h-145 max-w-full w-[90%] ml-4 lg:w-155 rounded-2xl mt-10 flex flex-col lg:my-10">
      <div className="grid lg:grid-cols-2 ">
        <div className="flex flex-col">
          <h1 className = "text-3xl text-green-900 font-semibold text-center lg:mb-14 pt-2">{name}</h1>
          <div className="flex flex-row justify-between border-b border-gray-400 mt-2 mx-4 pb-2">
            <h2 className="text-sm text-gray-500 self-center">Age</h2>
            <h2 className="text-md text-green-900 font-bold"> {age} years old</h2>
          </div>
          <div className="flex flex-row justify-between border-b border-gray-400 mt-2 mx-4 pb-2">
            <h2 className="text-sm text-gray-500 self-center">Sex</h2>
            <h2 className="text-md text-green-900 font-bold"> {sex.charAt(0).toUpperCase() + sex.slice(1)}</h2>
          </div>
          <div className="flex flex-row justify-between border-b border-gray-400 mt-2 mx-4 pb-2">
            <h2 className="text-sm text-gray-500 self-center">Arrival Date</h2>
            <h2 className="text-md text-green-900 font-bold"> {arrivalDate}</h2>
          </div>
          <div className="flex flex-col bg-green-200 mx-2 p-2 rounded-2xl mt-4">
            <h2 className= "font-semibold text-green-900 text-sm px-1">LOVES</h2>
            <p className="text-sm text-stone-800 mt-1 px-1">{loves}</p>
          </div>
          <div className="flex flex-col bg-red-200 mx-2 p-2 rounded-2xl mt-4">
            <h2 className= "font-semibold text-red-900 text-sm px-1">DISLIKES</h2>
            <p className="text-sm text-stone-800 mt-1 px-1">{dislikes}</p>
          </div>
        </div>
        <div className=" w-1/2lg:w-60 h-60  p-4 self-center flex lg:flex-col items-center lg:items-start justify-between">
            
          <Image
            src={imageUri}
            alt={name}
            width={480}
            height={300}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="border-l-4 border-green-200 mt-3 w-1/2">
          <p className="ml-2 text-sm italic text-gray-500">{blurb}</p>
        </div>
        </div>
        
      </div>
    </div>
        
 
  )
}

export default DenizenCard
