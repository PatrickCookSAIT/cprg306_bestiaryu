import React from 'react'
import Image from "next/image";


type HabitatCardProps = {
      id: string;
      name: string;
      img1: string;
      img2: string;
      img3: string;
};

const HabitatCard = ({
    id,
    name,
    img1,
    img2,
    img3
}: HabitatCardProps) => {
  return (
    <div className="bg-white w-[70%] p-4 rounded-[3rem]">
        <div>
            <h1 className="text-4xl font-serif text-green-900 mb-2 text-center">Welcome to <span className="font-bold italic">{name}</span> </h1>
        </div>
        <div className="grid grid-cols-[50%_50%] h-[600px]">
            <div className="relative">
                <Image 
                src={img1}
                alt={name}
                fill
                className="object-cover rounded-l-4xl"
                />
            </div>
            <div className="grid grid-rows-2">
                <div className="relative">
                    <Image 
                    src={img2}
                    alt={name}
                    fill
                    className="rounded-tr-4xl"
                    />
                </div>
                <div className="relative">
                    <Image 
                    src={img3}
                    alt={name}
                    fill
                    className="rounded-br-4xl"
                    />
                </div>
            </div>
        </div>
    </div>
  )}

  export default HabitatCard