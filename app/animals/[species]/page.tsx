import React from 'react'
import { animals, denizens } from "../../../lib/data";
import SpeciesPageAnimalCard from '@/components/SpeciesPageAnimalCard';
import DenizenCard from '@/components/DenizenCard';
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
      <div className="pt-10 mx-10 w-full border-b border-green-900">
        <h1 className="font-serif text-green-900 text-4xl">
          Meet our {animalDenizens.length > 1 ? animal.plural : animal.species}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row">
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
    <h2 className="lg:pt-10 lg:pl-10">Who&apos;s at home?</h2>
    {animalDenizens.map((denizen)=>(
      <DenizenCard
      key={denizen.id}
      id={denizen.id}
      name={denizen.name}
      age={denizen.age}
      sex={denizen.sex}
      arrivalDate={denizen.arrivalDate}
      loves={denizen.loves}
      dislikes={denizen.dislikes}
      blurb={denizen.blurb}
      imageUri={denizen.imageUri}
      />
    ))}
    </div>
    </main>
  )
}

export default IndividualAnimalPage
