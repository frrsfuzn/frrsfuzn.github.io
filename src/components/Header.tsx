import React from "react";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

function Header() {
  return (
    <header className="lg:w-2/5 lg:sticky top-0 max-h-screen  flex flex-col justify-between max-lg:mb-20 overflow-y-auto">
      <div className="h-screen">
        <div className="mb-3 mt-20">
          <div className="w-full h-60 bg-slate-700" />
          <div className="flex relative h-16 mb-5 pr-10 justify-end items-center">
            <div className="w-32 h-32 rounded-full bg-zinc-500 absolute left-10 -top-16"></div>
            <Link
              href="https://twitter.com/frrsfuzn"
              target="_blank"
              className="bg-nepal text-pampas hover:drop-shadow-md hover:font-semibold rounded-3xl h-10 w-32 px-3 flex justify-evenly items-center"
            >
              <AiFillLinkedin className="text-xl mr-1" />
              <span className="text-lg">Connect</span>
            </Link>
          </div>
          <div className="px-10">
            <h1 className="text-4xl text-tabasco font-bold mb-5">
              Mochamad Farras Fauzan
            </h1>
            <p className="">
              a Software Engineer who interested in Frontend Technology.
              Experienced in ReactJS, React Native, NextJS, JavaScript,
              TypeScript, ReasonML, GraphQL, Redux, CSS.
            </p>
          </div>
        </div>
        <div className="flex flex-col px-10 mb-4 max-lg:hidden">
          <Link className="text-tabasco hover:font-bold" href="#about">
            About
          </Link>
          <Link className="text-tabasco hover:font-bold" href="#experiences">
            Experiences
          </Link>
          <Link className="text-tabasco hover:font-bold" href="#blogs">
            Blogs
          </Link>
          <Link className="text-tabasco hover:font-bold" href="#projects">
            Projects
          </Link>
        </div>
        <div className="px-10">
          <ul className="flex items-center">
            <li className="mr-4">
              <Link href="https://github.com/frrsfuzn" target="_blank">
                <AiFillGithub className="text-3xl text-nepal" />
              </Link>
            </li>
            <li className="mr-4">
              <Link href="https://github.com/frrsfuzn" target="_blank">
                <AiFillLinkedin className="text-3xl text-nepal" />
              </Link>
            </li>
            <li className="mr-4">
              <Link href="https://github.com/frrsfuzn" target="_blank">
                <AiFillInstagram className="text-3xl text-nepal" />
              </Link>
            </li>
            <li className="mr-4">
              <Link href="https://github.com/frrsfuzn" target="_blank">
                <AiFillTwitterSquare className="text-3xl text-nepal" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;