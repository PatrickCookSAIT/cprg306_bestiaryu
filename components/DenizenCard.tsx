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
    
    <div className="bg-white  h-115 max-w-full w-[90%] ml-4 lg:w-70 rounded-2xl mt-10 flex flex-col lg:my-10">
        <div className="w-64 h-64 lg:w-48 lg:h-48 p-4 self-center">
            
          <Image
            src={imageUri}
            alt={name}
            width={480}
            height={300}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
          
    </div>
        
 
  )
}

export default DenizenCard
