import React from 'react'
import { animals } from "../../../lib/data";

type Props = {
  params: Promise<{
    species: string;
  }>;
};

const IndividualAnimalPage = async ({params}: Props) => {


  const {species} = await params;
  const decodedSpecies = decodeURIComponent(species);

  const animal = animals.find(
    (animal) => animal.species === decodedSpecies
  );
    if(!animal){
    return <h1>{species} not found</h1> 

  }
  return (
    <main className="bg-red-50">
      <h1 className="font-serif text-green-900 text-4xl">Meet out {animal.plural}</h1>
    </main>
  )
}

export default IndividualAnimalPage
