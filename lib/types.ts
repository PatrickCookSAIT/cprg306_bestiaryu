import { type } from "os";

//Types
export type Animal = {
  id: number;
  species: string;
  plural: string;
  animalClass: string;
  binomialName: string;
  conservationStatus: string;
  habitat: string;
  blurb: string;
  socialStructure: string;
  diet: string;
  lifespan: string;
  imageUri: string;
};

export type Habitat = {
  id: number;
  name: string;
};

//type for each individual animal (e.x. one zebra greg and another zebra carl both are denizens)
export type Denizen = {
  id: string;
  name: string;
  species: string;
  age: number;
  sex: string;
  arrivalDate: string;
  loves: string;
  dislikes: string;
  blurb: string;
  imageUri: string;
};

export type CalendarEvent = {
  id: string;
  eventName: string;
  eventType: string;
  location: string;
  time: string;
}
