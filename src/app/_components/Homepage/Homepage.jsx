import Image from "next/image";
import React from "react";
// import hero from "../../../../public/frame.png";
import hero from "../../_assets/homepageImage.svg";
import Navbar from "../Navigation/Navbar";
import Tickets from "../Tickets";
import About from "../About";
import Speakers from "../Speakers";
import { FAQs } from "../FAQs";
import Footer from "../Footer";
import home from "../../_assets/TedXSquare.svg";
import date from "../../_assets/date.svg";
import TicketsExpanded from "../TicketsExpanded";
import date_mobile from "../../_assets/date_mobile.svg";
import Partners from "../Partners";

const Homepage = () => {
  const FAQData = [
    {
      id: 1,
      question: "What will be the venue of the event?",
      answer:
        "The event will be hosted in offline mode within the premises of Bharati Vidyapeeth’s College of Engineering.",
    },
    {
      id: 2,
      question: "How would I know my registration has been confirmed?",
      answer:
        "You will receive the confirmation on your registered email from TEDxBVCOE’s official email ID.",
    },
    {
      id: 3,
      question:
        "What if my payment for the registration of the event(s) gets deducted from my account but did not receive any confirmation?",
      answer:
        "You can contact us through your registered email on TEDxBVCOE official email ID (bvcoetedx@gmail.com).",
    },
    {
      id: 4,
      question:
        "I made a mistake buying my pass for the event(s). What do I do now?",
      answer: "Reach out to us on bvcoetedx@gmail.com.",
    },
    {
      id: 5,
      question:
        "Can I cancel my registration for the events I enrolled for? If so, what is the process?",
      answer: "Reach out to us on bvcoetedx@gmail.com.",
    },
  ];

  return (
    <div className="flex flex-col overflow-x-hidden">
      <Navbar />
      <Image
        src={hero}
        alt="background Image"
        className=" static mt-20 sm:h-full h-screen w-full object-cover object-center items-center justify-center"
      ></Image>
      <div className="top-20 z-100 bg-black opacity-80 absolute sm:h-[1172px] h-screen w-full"></div>
      <div className=" absolute flex sm:flex-row flex-col sm:top-80 top-40 w-full sm:justify-evenly sm:gap-0 gap-24 items-center">
        <Image
          className=" sm:w-[500px] w-[300px] z-20"
          src={home}
          // width={500}
        ></Image>
        <Image
          className=" sm:invisible visible w-[300px] z-20"
          src={date_mobile}
          // width={500}
        ></Image>
        <Image
          className=" sm:w-[500px] sm:visible invisible w-[300px] z-20"
          src={date}
          // width={500}
        ></Image>
      </div>
      <Tickets />
      <About />
      <Speakers />
      <TicketsExpanded />
      <Partners />
      <FAQs faqData={FAQData} />
      <Footer />
    </div>
  );
};

export default Homepage;
