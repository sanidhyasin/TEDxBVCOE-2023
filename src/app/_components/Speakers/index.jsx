import React from "react";
import kanya from "../../_assets/kanyaa.jpg";
import akriti from "../../_assets/speakers/akriti.jpeg";
import khalid from "../../_assets/speakers/khalid.JPG";
import umesh from "../../_assets/speakers/umesh.jpg";
import sonendra from "../../_assets/speakers/sonendra.jpeg";
import vivek from "../../_assets/speakers/vivek.JPG";
import Card from "./Card";

const Speakers = () => {
  const SpeakersInfo = [
    {
      id: 5,
      image: vivek,
      name: "Vivek Rathod",
      profession: "CEO- Excitel, Entrepreneur",
    },
    {
      id: 4,
      image: sonendra,
      name: "Sonendra Verma",
      profession: "CEO, Aegis Covenant",
    },
    {
      id: 1,
      image: akriti,
      name: "Dr. Akriti Khatri",
      profession: "Detective",
    },
    {
      id: 2,
      image: khalid,
      name: "Khalid Wani",
      profession: "Marketing Guru",
    },
    {
      id: 3,
      image: umesh,
      name: "Umesh Rathod",
      profession: "Startup Mentor",
    },
    // {
    //   id: 6,
    //   image: { kanya },
    //   name: "Justin Bieber",
    //   profession: "Pop Singer",
    // },
    // {
    //   id: 7,
    //   image: { kanya },
    //   name: "Rihanna",
    //   profession: "Singer and woman",
    // },
    // {
    //   id: 8,
    //   image: { kanya },
    //   name: "Drake",
    //   profession: "Rapper and Singer",
    // },
    // {
    //   id: 9,
    //   image: { kanya },
    //   name: "Lady Gaga",
    //   profession: "Singer and Actress",
    // },
    // Add more speakers as needed
  ];

  return (
    <div
      id="speakers"
      className=" min-h-[700px] w-full flex flex-col bg-black px-10 items-center gap-6"
    >
      <h1 className="text-3xl font-bold text-white uppercase">Speakers</h1>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-12 items-center justify-center">
        {SpeakersInfo.map((speaker) => (
          <Card
            key={speaker.id}
            source={speaker.image}
            name={speaker.name}
            profession={speaker.profession}
          />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
