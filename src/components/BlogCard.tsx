import React from "react";

function BlogCard() {
  return (
    <a
      href="#"
      className="flex flex-row items-center bg-almond border border-apricot rounded-lg shadow w-full hover:bg-almond"
    >
      <img
        className="object-cover w-full rounded-t-lg h-auto w-48 md:rounded-none md:rounded-s-lg"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight hover:text-tabasco">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700 ">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </a>
  );
}

export default BlogCard;
