import Card from "@/components/Card";
import Link from "next/link";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { IoIosArrowBack } from "react-icons/io";
import path from "path";
import { parse } from "date-fns";

function Blogs() {
  const metaBlogs = getBlogs();
  return (
    <div className="max-w-screen-lg md:px-10 mx-auto">
      <div className="sticky top-0 px-5 flex w-full h-20 items-center justify-between text-martinique dark:bg-blackPearl bg-pampas">
        <Link href="/">
          <IoIosArrowBack className="text-xl dark:text-arcticParadise" />
        </Link>
        <h3 className="ml-3 text-2xl dark:text-arcticParadise">Blogs</h3>
      </div>
      <div className="flex flex-col gap-4 mb-20 px-2">
        {metaBlogs.map((metaBlog) => (
          <Card
            key={metaBlog.slug}
            href={`blogs/${metaBlog.slug}`}
            title={metaBlog.frontMatter.title}
            desc={metaBlog.frontMatter.description}
            date={metaBlog.frontMatter.date}
            bannerUrl={metaBlog.frontMatter.bannerUrl}
          />
        ))}
      </div>
    </div>
  );
}

function getBlogs() {
  const files = fs.readdirSync("./src/mdx/blogs");
  const metaBlogs = files.map((filename) => {
    const mdx = fs.readFileSync(path.join("./src/mdx/blogs", filename));
    const { data: frontMatter } = matter(mdx);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  metaBlogs.sort(
    (a, b) =>
      parse(b.frontMatter.date, "dd/MM/yyyy", new Date()).getTime() -
      parse(a.frontMatter.date, "dd/MM/yyyy", new Date()).getTime()
  );
  return metaBlogs;
}

export default Blogs;
