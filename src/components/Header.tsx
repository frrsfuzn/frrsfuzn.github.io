"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="lg:w-2/5 lg:sticky top-0 max-h-screen  flex flex-col justify-between max-lg:mb-20 overflow-y-auto">
      <div className="lg:h-screen">
        <div className="mb-3 lg:mt-20">
          <div className="w-full h-60 bg-[url('https://picsum.photos/700/300')] bg-center" />
          <div className="flex relative h-16 mb-5 pr-10 justify-end items-center">
            <div className="w-28 h-28 xl:w-32 xl:h-32 rounded-full bg-zinc-500 absolute left-5 xl:left-10 -top-12 xl:-top-16 overflow-hidden">
              <Image
                alt="profile"
                src="/images/profile.jpg"
                width={300}
                height={300}
              />
            </div>
            <div className="flex flex-row justify-between">
              <button
                onClick={() =>
                  theme == "dark" ? setTheme("light") : setTheme("dark")
                }
                className="flex mr-2 text-xl bg-blackPearl text-pampas dark:bg-pampas dark:text-blackPearl rounded-full w-10 h-10 justify-center items-center"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
              <Link
                href="https://www.linkedin.com/in/mochfarrasfauzan/"
                target="_blank"
                className="dark:bg-seashellCove bg-nepal text-pampas hover:drop-shadow-md hover:font-semibold rounded-3xl h-10 w-32 px-3 flex justify-evenly items-center"
              >
                <AiFillLinkedin className="text-xl mr-1" />
                <span className="text-lg">Connect</span>
              </Link>
            </div>
          </div>
          <div className="px-5">
            <h1 className="text-4xl dark:text-arcticParadise text-tabasco font-bold mb-5">
              Mochamad Farras Fauzan
            </h1>
            <p className="">
              a Software Engineer who interested in Frontend Technology.
              Experienced in ReactJS, React Native, NextJS, JavaScript,
              TypeScript, ReasonML, GraphQL, Redux, CSS.
            </p>
          </div>
        </div>
        <div className="flex flex-col px-5 mb-4 max-lg:hidden">
          <Link
            className="dark:text-arcticParadise text-tabasco hover:font-bold"
            href="#about"
          >
            About
          </Link>
          <Link
            className="dark:text-arcticParadise text-tabasco hover:font-bold"
            href="#experiences"
          >
            Experiences
          </Link>
          <Link
            className="dark:text-arcticParadise text-tabasco hover:font-bold"
            href="#blogs"
          >
            Blogs
          </Link>
          <Link
            className="dark:text-arcticParadise text-tabasco hover:font-bold"
            href="#projects"
          >
            Projects
          </Link>
        </div>
        <div className="px-5">
          <ul className="flex items-center">
            <li className="mr-4">
              <Link href="https://github.com/frrsfuzn" target="_blank">
                <AiFillGithub className="text-3xl dark:text-blueSplash text-nepal" />
              </Link>
            </li>
            <li className="mr-4">
              <Link href="https://github.com/frrsfuzn" target="_blank">
                <AiFillLinkedin className="text-3xl dark:text-blueSplash text-nepal" />
              </Link>
            </li>
            <li className="mr-4">
              <Link href="https://github.com/frrsfuzn" target="_blank">
                <AiFillInstagram className="text-3xl dark:text-blueSplash text-nepal" />
              </Link>
            </li>
            <li className="mr-4">
              <Link href="https://github.com/frrsfuzn" target="_blank">
                <AiFillTwitterSquare className="text-3xl dark:text-blueSplash text-nepal" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
