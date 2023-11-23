import React from "react";
import kanya from "../../_assets/kanyaa.jpg";
import Card from "./card";

const Speakers = () => {
  const SpeakersInfo = [
    {
      id: 1,
      image: { kanya },
      name: "Kanye West",
      profession: "Rapper and Producer",
    },
    {
      id: 2,
      image: { kanya },
      name: "Taylor Swift",
      profession: "Singer-Songwriter",
    },
    {
      id: 3,
      image: { kanya },
      name: "Ed Sheeran",
      profession: "Singer-Songwriter",
    },
    {
      id: 4,
      image: { kanya },
      name: "Adele",
      profession: "Singer",
    },
    {
      id: 5,
      image: { kanya },
      name: "Beyoncé",
      profession: "Singer and Actress",
    },
    {
      id: 6,
      image: { kanya },
      name: "Justin Bieber",
      profession: "Pop Singer",
    },
    {
      id: 7,
      image: { kanya },
      name: "Rihanna",
      profession: "Singer and woman",
    },
    {
      id: 8,
      image: { kanya },
      name: "Drake",
      profession: "Rapper and Singer",
    },
    {
      id: 9,
      image: { kanya },
      name: "Lady Gaga",
      profession: "Singer and Actress",
    },
    // Add more speakers as needed
  ];

  return (
    <div className=" min-h-[700px] w-full flex flex-col bg-black px-10 items-center gap-6">
      <h1 className="text-3xl font-bold text-white">Speakers</h1>
      <div className="grid grid-cols-3 gap-12">
        {SpeakersInfo.map((speaker) => (
          <Card
            key={speaker.id}
            source={kanya}
            name={speaker.name}
            profession={speaker.profession}
          />
        ))}
      </div>
    </div>
  );
};

export default Speakers;
