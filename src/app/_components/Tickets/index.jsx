import Image from "next/image";
import React from "react";
import TicketsBg from "../../_assets/2023Svg.svg";
import { FaRegHeart } from "react-icons/fa";

const Tickets = () => {
  return (
    <div className="sm:h-[380px] h-[250px] w-full bg-black flex flex-col items-center">
      <Image className="top-0" src={TicketsBg} height={250}></Image>
      <div className="flex h-full items-center">
        <button className=" bg-gray-500 flex flex-row items-center justify-center gap-3 hover:bg-gray-400 transition-all uppercase text-xl text-black font-bold py-2 px-4 rounded-xl h-16">
          Tickets Available Soon
          <FaRegHeart />
        </button>
      </div>
    </div>
  );
};

export default Tickets;
