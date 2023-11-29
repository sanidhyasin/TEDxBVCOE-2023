import Image from "next/image";
import React from "react";
import TicketsBg from "../../_assets/2023Svg.svg";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

const Tickets = () => {
  return (
    <div
      id="tickets"
      className="sm:h-[480px] h-[250px] w-full bg-black flex flex-col items-center"
    >
      <Image className="top-0" src={TicketsBg} height={250}></Image>
      <div className="flex h-full items-center">
        <Link href={"#ticketsExpanded"}>
          <button className=" bg-gray-400 flex flex-row items-center justify-center gap-3 hover:bg-gray-200 transition-all uppercase text-xl text-black font-bold py-2 px-4 rounded-xl h-16">
            Get Passes Now
            <FaRegHeart />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Tickets;
