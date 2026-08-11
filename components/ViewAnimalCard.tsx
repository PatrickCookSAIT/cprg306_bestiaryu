// ============================================================================
// components/ViewAnimalCard.tsx   →   generates a card for the animal for the Animals page and for the favourites page
// ============================================================================
// generates a card to be displayed on the Animals page and Favourites page.
// displays and imageConfigDefault, conservation status, animal class, species name and bio as well as a link to the animals' habitat
// ----------------------------------------------------------------------------

import React from "react";
import Image from "next/image";
import ConservationStatusCard from "./ConservationStatusCard";
import Link from "next/link";
import AnimalLikeButton from "./AnimalLikeButton";

type ViewAnimalCardProps = {
  id: number;
  imageUri: string;
  habitat: string;
  species: string;
  blurb: string;
  conservationStatus: string;
  animalClass: string;
};

const ViewAnimalCard = ({
  id,
  imageUri,
  habitat,
  species,
  blurb,
  conservationStatus,
  animalClass,
}: ViewAnimalCardProps) => {
  return (
    <div className="bg-white h-135 max-w-full w-[90%] ml-4 lg:w-75 rounded-2xl mt-10 flex flex-col hover:scale-105 transition-transform">
      <div className="w-full p-4 h-80 relative">

        <Link href={`/animals/${species}`} className="block">
          <Image
            src={imageUri}
            alt={species}
            width={480}
            height={300}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-100 h-70 object-cover"
          />
        </Link>

        <AnimalLikeButton
          className="absolute top-6 right-6 z-10"
          animalId={id}
        />

        <div className="flex flex-col mt-10">
          <div className="justify-between flex flex-row mb-3">
            <ConservationStatusCard
              conservationStatus={conservationStatus}
            />

            <h3 className="text-xs text-gray-400">
              {animalClass.toUpperCase()}
            </h3>
          </div>

          <Link href={`/animals/${species}`} className="block">
            <h1 className="text-green-900 font-bold text-xl mb-1">
              {species}
            </h1>

            <div className="h-10">
              <p className="text-stone-400 text-xs italic">
                {blurb}
              </p>
            </div>
          </Link>

          <div className="w-full border-b border-b-green-950 mt-6 pt-4 text-center">
            <Link
              href={`/habitats/${habitat}`}
              className="text-md font-semibold text-green-950 font-serif hover:text-green-600"
            >
              EXPLORE HABITAT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAnimalCard;