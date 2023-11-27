"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

// FAQ component
export const FAQs = ({ faqData }) => {
  // State to manage the open/closed state of each FAQ item
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle the open/closed state of an FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className=" bg-black w-full min-h-[400px] items-center flex flex-col pt-20 px-6">
      <h1 className=" sm:text-3xl text-3xl font-bold text-white pb-6 text-center">
        Frequently Asked Questions
      </h1>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="faq-item gap-8 sm:w-1/2 transition-transform"
        >
          <div
            className={`faq-question ${
              openIndex === index ? "open" : ""
            } text-white py-4 sm:text-3xl text-2xl font-bold w-full transition-transform`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="w-full min-h-20 bg-red-600 p-4 rounded-2xl flex flex-row items-center justify-between transition-all">
              <div>{faq.question}</div>
              <FaAngleDown />
            </div>
          </div>
          {openIndex === index && (
            <div className="faq-answer text-white sm:px-12 px-6 sm:text-2xl text-xl font-semibold">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
