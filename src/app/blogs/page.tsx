import Card from "@/components/Card";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Metadata } from 'next'
import { getMetaArticles } from "@/utils/mdx";

export const metadata: Metadata = {
  title: 'Blogs',
}

function Blogs() {
  const metaBlogs = getMetaArticles('./src/mdx/blogs');
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

export default Blogs;
