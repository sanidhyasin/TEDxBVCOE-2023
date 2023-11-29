import Image from "next/image";
import React from "react";

const Card = (props) => {
  return (
    <div className=" sm:h-[400px] h-[360px] w-80 flex flex-col items-center justify-center gap-4 border border-white rounded-2xl px-4 bg-[#000E24]">
      <Image
        className=" rounded-full h-40 w-40 object-cover"
        src={props.source}
        height={100}
        width={100}
      ></Image>
      <div className=" text-3xl font-bold text-[#D74D26]">{props.name}</div>
      <div className="text-2xl text-[#FFF0D2] text-center">
        {props.profession}
      </div>
    </div>
  );
};

export default Card;
