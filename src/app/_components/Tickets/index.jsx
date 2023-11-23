import Image from "next/image";
import React from "react";
import TicketsBg from "../../_assets/2023Svg.svg";
import { FaRegHeart } from "react-icons/fa";

const Tickets = () => {
  return (
    <div className="h-[380px] w-full bg-black flex flex-col items-center">
      <Image className="top-0" src={TicketsBg} height={150}></Image>
      <div className="flex h-full items-center">
        <button className=" bg-gray-500 flex flex-row items-center justify-center gap-3 hover:bg-gray-400 transition-all uppercase text-2xl text-black font-bold py-2 px-4 rounded-xl h-16">
          Tickets Available Soon
          <FaRegHeart />
        </button>
      </div>
    </div>
  );
};

export default Tickets;
