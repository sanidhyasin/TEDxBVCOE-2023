import Image from "next/image";
import React from "react";
import Ticket_1 from "../../_assets/tickets/Ticket_1.svg";
import Ticket_3 from "../../_assets/tickets/Ticket_3.svg";
import Ticket_2 from "../../_assets/tickets/Ticket_2.svg";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

const TicketsExpanded = () => {
  return (
    <div
      id="ticketsExpanded"
      className="flex flex-col min-h-screen w-full items-center gap-8 bg-black pt-20"
    >
      <Link
        href="https://unstop.com/p/tedxbvcoe-bvcoe-831357"
        rel="noopener"
        target="_blank"
      >
        <button className=" bg-[#FFF0D2] flex flex-row items-center justify-center gap-3 hover:bg-gray-200 transition-all uppercase text-xl text-black font-bold py-2 px-4 rounded-xl h-16">
          Buy Passes Now
          <MdArrowOutward size={22} />
        </button>
      </Link>
      <h1 className=" font-bold text-4xl text-white uppercase">
        Available Passes
      </h1>
      <div className="flex flex-col sm:gap-16 px-6 gap-16">
        <Image src={Ticket_1} className=" sm:h-[440px] w-full"></Image>
        <Image src={Ticket_2} className=" sm:h-[440px] w-full"></Image>
        <Image src={Ticket_3} className=" sm:h-[440px] w-full"></Image>
      </div>
    </div>
  );
};

export default TicketsExpanded;
