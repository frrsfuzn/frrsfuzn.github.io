import Card from "@/components/Card";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

function Blogs() {
  return (
    <div className="max-w-screen-lg md:px-10 mx-auto">
      <div className="sticky top-0 px-5 flex w-full h-20 items-center justify-between text-martinique dark:bg-blackPearl bg-pampas">
        <Link href="/"><IoIosArrowBack className="text-xl dark:text-arcticParadise" /></Link>
        <h3 className="ml-3 text-2xl dark:text-arcticParadise">Blogs</h3>
      </div>
      <div className="flex flex-col gap-4 mb-20 px-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Blogs;
