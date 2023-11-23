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

const Homepage = () => {
  const faqData = [
    {
      id: 1,
      question: "What is FAQ?",
      answer: "FAQ stands for Frequently Asked Questions.",
    },
    {
      id: 2,
      question: "How to use this component?",
      answer: "Simply pass an array of FAQ items as a prop.",
    },
    {
      id: 3,
      question: "Can I customize the appearance?",
      answer:
        "Yes, you can customize the appearance using CSS or other styling methods.",
    },
    {
      id: 4,
      question: "Is this component responsive?",
      answer:
        "Yes, the component is designed to be responsive and work well on various screen sizes.",
    },
    {
      id: 5,
      question: "Are there any dependencies for this component?",
      answer:
        "No, this component is standalone and does not have external dependencies.",
    },
    {
      id: 6,
      question: "How often is this component updated?",
      answer:
        "We aim to provide regular updates with new features and improvements. Check our release notes for details.",
    },
    {
      id: 7,
      question: "Can I contribute to the development of this component?",
      answer:
        "Certainly! Feel free to contribute by submitting issues, feature requests, or pull requests on our GitHub repository.",
    },
    {
      id: 8,
      question: "What browsers are supported?",
      answer:
        "The component is designed to work on modern browsers, including Chrome, Firefox, Safari, and Edge.",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className="flex flex-col bg items-center">
      <Navbar />
      <Image
        src={hero}
        alt="background Image"
        className="w-full h-full object-fill object-center items-center justify-center"
      ></Image>
      <Tickets />
      <About />
      <Speakers />
      <FAQs faqData={faqData} />
      <Footer />
    </div>
  );
};

export default Homepage;
