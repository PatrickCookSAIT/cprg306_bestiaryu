import Image from "next/image";

export default function Home() {
  return (
    <><div className="relative text-center">
 <Image
  src="https://images.pexels.com/photos/34296800/pexels-photo-34296800.jpeg"
  alt="Red panda"
  width={1200}
  height={800}
  style={{ width: "100%",     height: "80vh",
    objectFit: "cover", }}
/>
      <div className="w-full absolute top-0 left-0  mt-50 ml-10 flex flex-col items-start">
        <h2 className="text-6xl font-bold text-white ">
          Explore Our
        </h2>
        <h2 className="text-6xl font-bold font-serif text-green-200 ">
          Wild World
        </h2>
        <div className=" w-80 ">
        <h3 className="text-white text-start ">Experience the delicate balance of nature in our ethically-led habitats. From the canopy to the forest floor, discover the stories of the creatures we share our planet with.</h3>
        </div>
        <div className="flex flex-row">
        <button className="mt-10 bg-green-900 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mr-8">
          Plan your trip →
        </button>
        <button className="mt-10  bg-gray-500/25 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
          View our animals
        </button>
        </div>
      </div>
    </div></>
  );
}
