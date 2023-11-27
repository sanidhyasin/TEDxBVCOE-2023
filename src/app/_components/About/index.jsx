"use client";
import React, { useState } from "react";

const About = () => {
  const [Ted, setTed] = useState(true);
  const [Tedx, setTedx] = useState(false);
  const [TedxBVCOE, setTedxBVCOE] = useState(false);

  return (
    <div className="flex w-full flex-col items-center sm:h-[600px] h-[700px] bg-black gap-10">
      <h1 className=" text-white text-2xl font-bold top-0">What is TED?</h1>
      <div className=" flex flex-row items-center justify-center gap-4">
        <button
          className={`${
            Ted ? "bg-white text-black font-bold" : "bg-none text-white"
          } sm:h-16 h-14 sm:px-8 px-4 py-2 items-center justify-center border-2 border-white rounded-xl font-bold`}
          onClick={() => {
            setTed(!Ted);
            setTedx(false);
            setTedxBVCOE(false);
          }}
        >
          TED
        </button>
        <button
          className={`${
            Tedx ? "bg-white text-black font-bold" : "bg-none text-white"
          } sm:h-16 h-14 sm:px-8 px-4 py-2 items-center justify-center border-2 border-white rounded-xl font-bold`}
          onClick={() => {
            setTed(false);
            setTedx(!Tedx);
            setTedxBVCOE(false);
          }}
        >
          TEDx
        </button>
        <button
          className={`${
            TedxBVCOE ? "bg-white text-black font-bold" : "bg-none text-white"
          } sm:h-16 h-14 sm:px-8 px-4 py-2 items-center justify-center border-2 border-white rounded-xl font-bold`}
          onClick={() => {
            setTed(false);
            setTedx(false);
            setTedxBVCOE(!TedxBVCOE);
          }}
        >
          TEDxBVCOE
        </button>
      </div>
      <div className=" sm:w-[600px] font-medium px-10">
        <p
          className={`${
            Ted ? "flex" : "hidden"
          } text-white text-xl sm:text-justify text-justify`}
        >
          TED (Technology, Entertainment, Design) is a global platform that
          hosts conferences featuring influential speakers from various fields
          who share their innovative ideas and experiences. Founded in 1984, TED
          has become synonymous with "Ideas Worth Spreading." The main TED
          conference is held annually in Vancouver, Canada, and its talks cover
          a wide range of topics, including science.
        </p>
        <p
          className={`${
            Tedx ? "flex" : "hidden"
          } text-white text-xl sm:text-justify text-justify`}
        >
          TEDx events are independently organized TED-like conferences that can
          take place anywhere in the world. These events aim to bring the spirit
          of TED to local communities and provide a platform for individuals to
          share their ideas and perspectives. TEDx talks cover a broad spectrum
          of subjects, often reflecting the unique challenges and innovations of
          a particular region. year.
        </p>
        <p
          className={`${
            TedxBVCOE ? "flex" : "hidden"
          } text-white text-xl sm:text-justify text-justify`}
        >
          TEDxBVCOE is a specific instance of a TEDx event affiliated with
          Bharati Vidyapeeth College of Engineering (BVCOE) in Delhi, India.
          Organized independently by a dedicated local team of volunteers,
          TEDxBVCOE serves as a platform for students, educators, and
          professionals to share their insights and ideas with the community.
          The "BVCOE" in TEDxBVCOE represents Bharati Vidyapeeth College of
          Engineering, the hosting institution.
        </p>
      </div>
    </div>
  );
};

export default About;
