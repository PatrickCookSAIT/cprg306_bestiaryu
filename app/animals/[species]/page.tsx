import React from 'react'
import { animals, denizens } from "../../../lib/data";
import SpeciesPageAnimalCard from '@/components/SpeciesPageAnimalCard';

type Props = {
  params: Promise<{
    species: string;
  }>;
};

const IndividualAnimalPage = async ({params}: Props) => {


  const {species} = await params;
  //removing url additions like %20 to find the correct species
  const decodedSpecies = decodeURIComponent(species);

  const animal = animals.find(
    (animal) => animal.species === decodedSpecies
  );
    if(!animal){
    return <h1>{species} not found</h1> 

  }
  //finding all animals housed at the zoo of the species type of route
    const animalDenizens = denizens.filter(
    (denizen) => denizen.species === decodedSpecies
  );
  return (
    <main className="bg-red-50">
      <h1 className="font-serif text-green-900 text-4xl">Meet out {animal.plural}</h1>
      <SpeciesPageAnimalCard
        key={animal.id}
        species={animal.species}
        animalClass={animal.animalClass}
        binomialName={animal.binomialName}
        conservationStatus={animal.conservationStatus}
        habitat={animal.habitat}
        socialStructure={animal.socialStructure}
        diet={animal.diet}
        lifespan={animal.lifespan}
        imageUri={animal.imageUri}
    />
    </main>
  )
}

export default IndividualAnimalPage
