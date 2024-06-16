import Image from "next/image";
import '@/app/globals.css'
import Carousel from "@/components/carousel/carousel";

export default function Home() {
  return (
    <>
      <div className="flex main-container lg:mx-12 my-4">
        <div className="h-full lg:w-2/6">
        <Carousel/>
        </div>
        <div className="bg-transparent h-full lg:w-2/6 p-3 text-center">
          <h1 className="text-orange-300 bg-clip-text font-bold">Perfect destination for the foodies!</h1>
          <h3 className="text-2xl">Join, read and share your unique receipes with us!</h3>
          <div className="flex justify-evenly lg:h-72 items-end">
          <button className=" border-2 border-orange-300 w-32 h-16">Join here</button>
          <button className="w-44 h-16 bg-gradient-to-r from-orange-500 to-orange-300 text-black font-bold">Explore meals</button>
          </div>

        </div>
      </div>
    </>
  );
}
