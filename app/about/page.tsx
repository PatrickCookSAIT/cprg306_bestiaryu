import React from 'react'
import Image from "next/image";


const page = () => {
  return (
    <main className="flex flex-col bg-red-50 w-full">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 mx-10 my-5 items-center justify-center flex">
        
        <p className="text-sm text-green-900 ">
            <span className="font-serif text-4xl font-bold italic">Open the pages</span> of the bestiary and discovered the wonderful creatures that we share our planet with. 
            Learn about our world and what we can do to improve it all the species that call it home
        </p>
        </div>
        <div className="lg:w-1/2 mx-10 my-5">
        <Image src="https://images.pexels.com/photos/33828273/pexels-photo-33828273.jpeg"
            alt="just lion around"
            width={480}
            height={300}
            className="rounded-4xl" />
            </div>
      </div>
      <div className="hidden lg:flex flex-col lg:flex-row">
        <div className="lg:w-1/2 mx-10 my-5">
        <Image src="https://images.pexels.com/photos/26600774/pexels-photo-26600774.jpeg"
            alt="polar bearing"
            width={480}
            height={300}
            className="rounded-4xl" />
            </div>
        <div className="lg:w-1/2 mx-10 my-5 items-center justify-center flex">
        
        <p className="text-sm text-green-900 ">
            <span className="font-serif text-4xl font-bold italic">Discover our world</span> of handcrafted enclosures, designed and 
            tailor-made to suit each of our animals unique needs. We strive to give every denizen a comfortable and suitably wild habitat.
        </p>
        </div>
        
      </div>
      <div className="lg:hidden flex flex-col lg:flex-row">
   
        <div className="lg:w-1/2 mx-10 my-5 items-center justify-center flex">
        
        <p className="text-sm text-green-900 ">
            <span className="font-serif text-4xl font-bold italic">Discover our world</span> of handcrafted enclosures, designed and 
            tailor-made to suit each of our animals unique needs. We strive to give every denizen a comfortable and suitably wild habitat.
        </p>
        </div>
             <div className="lg:w-1/2 mx-10 my-5">
        <Image src="https://images.pexels.com/photos/26600774/pexels-photo-26600774.jpeg"
            alt="polar bearing"
            width={480}
            height={300}
            className="rounded-4xl" />
        </div>
        </div>
        <div className=" flex flex-col lg:flex-row">
   
        <div className="lg:w-1/2 mx-10 my-5 items-center justify-center flex">
        
        <p className="text-sm text-green-900 ">
            <span className="font-serif text-4xl font-bold italic">Conserve the planet</span> by supporting our global outreach and conservation efforts.
            Help us as we try to build a sustainable future that all creatures can enjoy.
        </p>
        </div>
             <div className="lg:w-1/2 mx-10 my-5">
        <Image src="https://images.pexels.com/photos/30548662/pexels-photo-30548662.jpeg"
            alt="polar bearing"
            width={480}
            height={300}
            className="rounded-4xl" />
        </div>
        </div>
      
    </main>
  )
}

export default page
