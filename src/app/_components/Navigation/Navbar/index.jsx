"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../_assets/homeLogo.svg";
import close from "../../../_assets/closeSvg.svg";
import menu from "../../../_assets/menuSvg.svg";
// import navBg from "../../../_assets/navBg.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="w-full h-20 bg-black sticky top-0">
        <div className="sm:flex hidden flex-row h-full w-full items-center sm:px-6">
          <ul className="sm:flex hidden flex-1 flex-row items-center text-white gap-4">
            <li className="flex text-xl font-bold uppercase">
              <Link href="/about">
                <p>Speakers</p>
              </Link>
            </li>
            <li className="flex text-xl font-bold uppercase">
              <Link href="/about">
                <p>Tickets</p>
              </Link>
            </li>
            <li className="flex text-xl font-bold uppercase">
              <Link href="/about">
                <p>Merchandise</p>
              </Link>
            </li>
            <li className="flex text-xl font-bold uppercase">
              <Link href="/about">
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
            <li className="flex text-xl font-bold uppercase">
              <Link href="/about">
                <p>FAQ</p>
              </Link>
            </li>
            <li className="flex text-xl font-bold uppercase">
              <Link href="/about">
                <p>Team</p>
              </Link>
            </li>
            <li className="flex text-xl font-bold uppercase">
              <Link href="/about">
                <p>Contact</p>
              </Link>
            </li>
            <li className="flex text-xl font-bold uppercase">
              <Link href="/about">
                <p>TEDxBVCOE22</p>
              </Link>
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
            className="w-[28px] object-contain "
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
          ></Image>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } transition-all p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-white`}
          >
            <ul className="list-none flex justify-end items-center flex-col gap-4">
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
