import React from "react";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import hama from "../../_assets/partners/Hama-Logo.svg";
import unstop from "../../_assets/partners/unstop.svg";

const Partners = () => {
  return (
    <div
      id="partners"
      className=" flex flex-col h-fit items-center gap-10 bg-black pt-20"
    >
      {/* <div className=" gap-4 items-center">
        <h1 className=" font-bold text-2xl">Coverage Partners</h1>
        <div className="flex flex-row justify-evenly w-full">
          <Image src={hama}></Image>
          <Image src={unstop} className="h-60"></Image>
        </div>
      </div> */}
      <h1 className=" font-bold text-3xl text-white uppercase">Our Partners</h1>
      <button className=" bg-gray-400 flex flex-row items-center justify-center gap-3 hover:bg-gray-200 transition-all uppercase text-xl text-black font-bold py-2 px-4 rounded-xl h-16">
        Partners Revealing Soon
        <FaRegHeart />
      </button>
    </div>
  );
};

export default Partners;
