"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../_assets/homeLogo.svg";
import close from "../../../_assets/closeSvg.svg";
import menu from "../../../_assets/menuSvg.svg";
import { FaAngleDown } from "react-icons/fa6";
// import navBg from "../../../_assets/navBg.svg";

const Navbar = () => {
  // const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [down, setDown] = useState(false);
  return (
    <>
      <div className="w-full h-20 bg-black absolute top-0">
        <div className="sm:flex hidden flex-row h-full w-full items-center sm:px-6">
          <ul className="sm:flex hidden flex-1 flex-row items-center text-white gap-4">
            <li className="flex text-xl font-normal uppercase">
              <Link href={"#speakers"}>
                <p>Speakers</p>
              </Link>
            </li>
            <li className="flex text-xl font-normal uppercase">
              <Link href={"#ticketsExpanded"}>
                <p>Tickets</p>
              </Link>
            </li>
            {/* <li className="flex text-xl font-bold uppercase">
              <Link href="/about">
                <p>Merchandise</p>
              </Link>
            </li> */}
            <li className="flex text-xl font-normal uppercase">
              <Link href={"#partners"}>
                <p>Partners</p>
              </Link>
            </li>
          </ul>
          <Link
            className="sm:flex hidden flex-1 items-center justify-center"
            href="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Image src={logo} alt="TEDxBVCOE Logo" height={50}></Image>
          </Link>
          <ul className="sm:flex hidden flex-1 flex-row items-center justify-end text-white gap-4">
            <li className="flex text-xl font-medium ">
              <Link href={"#faqs"}>
                <p>FAQs</p>
              </Link>
            </li>
            {/* <li className="flex text-xl font-bold uppercase">
              <Link href="/about">
                <p>Team</p>
              </Link>
            </li> */}
            <li className="flex text-xl font-medium uppercase">
              <Link href={"#contact"}>
                <p>Contact</p>
              </Link>
            </li>
            <li className="flex items-center gap-2 text-xl font-bold">
              <ul className="flex-col flex items-center text-white gap-2 ">
                <li className="flex text-xl font-medium underline-offset-4 relative hover:underline">
                  <Link
                    href="https://tedxbvcoe-website-66747n5xw-bvcoetedx.vercel.app/"
                    className="flex flex-row items-center gap-2"
                  >
                    <p>TEDxBVCOE22</p>
                  </Link>
                </li>
                <li
                  className={`${
                    !down ? "hidden" : "flex"
                  } text-xl font-medium absolute top-[50px] underline-offset-4 cursor-pointer hover:underline`}
                >
                  <Link
                    href="https://tedxbvcoe-website-66747n5xw-bvcoetedx.vercel.app/2021"
                    className=" flex top-0 flex-row items-center gap-2"
                  >
                    <p>TEDxBVCOE21</p>
                  </Link>
                </li>
              </ul>
              <FaAngleDown
                className="cursor-pointer"
                onClick={() => {
                  setDown(!down);
                }}
              />
            </li>
          </ul>
        </div>
        <div className="sm:hidden flex flex-row h-full items-center justify-between px-4">
          <Link
            className="sm:hidden flex items-center justify-center"
            href="/"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <Image src={logo} alt="TEDxBVCOE Logo" height={30}></Image>
          </Link>
          <Image
            className="w-[28px] object-contain text-white"
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
          ></Image>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } transition-all p-6 absolute z-50 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-black`}
          >
            <ul className="list-none uppercase flex justify-end items-start flex-col gap-4">
              <li className=" text-white font-medium cursor-pointer text-[16px]">
                <Link
                  href={"#speakers"}
                  onClick={() => {
                    setToggle(!toggle);
                    // setActive(link.title);
                  }}
                >
                  Speakers
                </Link>
              </li>
              <li className=" text-white font-medium cursor-pointer text-[16px]">
                <Link
                  href={"#ticketsExpanded"}
                  onClick={() => {
                    setToggle(!toggle);
                    // setActive(link.title);
                  }}
                >
                  Tickets
                </Link>
              </li>
              <li className=" text-white font-medium cursor-pointer text-[16px]">
                <Link
                  href={"#faqs"}
                  onClick={() => {
                    setToggle(!toggle);
                    // setActive(link.title);
                  }}
                >
                  FAQs
                </Link>
              </li>
              <li className=" text-white font-medium cursor-pointer text-[16px]">
                <Link
                  href={"#contact"}
                  onClick={() => {
                    setToggle(!toggle);
                    // setActive(link.title);
                  }}
                >
                  Contact
                </Link>
              </li>
              <li className=" text-white font-medium cursor-pointer text-[16px]">
                <Link
                  href="https://tedxbvcoe-website-66747n5xw-bvcoetedx.vercel.app/"
                  onClick={() => {
                    setToggle(!toggle);
                    // setActive(link.title);
                  }}
                >
                  TEDxBVCOE22
                </Link>
              </li>
              <li className=" text-white font-medium cursor-pointer text-[16px]">
                <Link
                  href="https://tedxbvcoe-website-66747n5xw-bvcoetedx.vercel.app/2021"
                  onClick={() => {
                    setToggle(!toggle);
                    // setActive(link.title);
                  }}
                >
                  TEDxBVCOE21
                </Link>
              </li>
              {/* <li className=" text-black font-medium cursor-pointer text-[16px]">
                <Link
                  href="/about"
                  onClick={() => {
                    setToggle(!toggle);
                    // setActive(link.title);
                  }}
                >
                  Speakers
                </Link>
              </li>
              <li className=" text-black font-medium cursor-pointer text-[16px]">
                <Link
                  href="/about"
                  onClick={() => {
                    setToggle(!toggle);
                    // setActive(link.title);
                  }}
                >
                  Speakers
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
