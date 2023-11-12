import React from "react";
import Image from "next/image";

function BlogCard() {
  return (
    <a
      href="#"
      className="flex flex-row items-center bg-almond border border-apricot rounded-lg shadow w-full hover:bg-almond hover:text-tabasco"
    >
      <Image
        alt="blog image"
        src={"https://picsum.photos/300/300"}
        width={300}
        height={300}
        unoptimized
        className="object-cover rounded-t-lg h-auto w-48 md:rounded-none md:rounded-s-lg"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-martinique">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </a>
  );
}

export default BlogCard;
