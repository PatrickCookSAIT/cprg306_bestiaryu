// ============================================================================
// components/HabitatCard.tsx   →   generates a card for the habitat
// ============================================================================
// displays the habitat name and three images pulled from links
// ----------------------------------------------------------------------------

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
    <div className="bg-white w-[65%] p-4 rounded-[3rem]">
        <div>
            <h1 className="text-4xl font-serif text-green-900 mb-2 text-center">Welcome to <span className="font-bold italic">{name}</span> </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] h-[600px]">
            <div className="relative lg:hidden block mb-1">
                <Image 
                src={img1}
                alt={name}
                width={480}
                height={300}
                loading="lazy"
                className="object-cover h-40 rounded-4xl"
                />
            </div>
            <div className="relative lg:hidden block">
                <Image 
                src={img2}
                alt={name}
                width={480}
                height={300}
                loading="lazy"
                className="object-cover h-40 rounded-4xl"
                />
            </div>
            <div className="relative lg:hidden block">
                <Image 
                src={img3}
                alt={name}
                width={480}
                height={300}
                loading="lazy"
                className="object-cover h-40 rounded-4xl"
                />
            </div>
            <div className="relative hidden lg:block">
                <Image 
                src={img1}
                alt={name}
                loading="lazy"
                fill
                className="object-cover rounded-l-4xl"
                />
            </div>
            <div className="grid grid-rows-2">
                <div className="relative hidden lg:block">
                    <Image 
                    src={img2}
                    alt={name}
                    loading="lazy"
                    fill
                    className="rounded-tr-4xl"
                    />
                </div>
                <div className="relative hidden lg:block">
                    <Image 
                    src={img3}
                    alt={name}
                    loading="lazy"
                    fill
                    className="rounded-br-4xl"
                    />
                </div>
            </div>
        </div>
    </div>
  )}

  export default HabitatCard