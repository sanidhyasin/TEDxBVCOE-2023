import Image from "next/image";
import React from "react";

const Card = (props) => {
  return (
    <div className=" h-[400px] w-72 flex flex-col items-center justify-center gap-4 border border-white rounded-2xl px-4">
      <Image
        className=" rounded-full"
        src={props.source}
        height={150}
        width={150}
      ></Image>
      <div className=" text-3xl font-bold text-orange-300">{props.name}</div>
      <div className="text-2xl text-white">{props.profession}</div>
    </div>
  );
};

export default Card;
