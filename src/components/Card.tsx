import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  desc: string;
  href: string;
}

function Card({ title, desc, href }: CardProps) {
  return (
    <Link
      href={href}
      className="flex flex-row max-sm:flex-col items-center dark:bg-freinachtBlack bg-almond border dark:border-arcticParadise border-apricot rounded-lg shadow w-full dark:hover:bg-blueSplash hover:bg-almond hover:text-tabasco"
    >
      <Image
        alt="blog image"
        src={"https://picsum.photos/300/300"}
        width={300}
        height={300}
        unoptimized
        className="object-cover rounded-t-lg h-auto w-48 max-sm:w-full md:rounded-none md:rounded-s-lg"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 dark:text-arcticParadise text-2xl font-bold tracking-tight">
          {title}
        </h5>
        <p className="mb-3 font-normal dark:text-arcticParadise text-martinique">
          {desc}
        </p>
      </div>
    </Link>
  );
}

export default Card;
