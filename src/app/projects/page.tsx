import Card from "@/components/Card";
import Link from "next/link";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Metadata } from 'next'
import { getMetaArticles } from "@/utils/mdx";
 
export const metadata: Metadata = {
  title: 'Projects',
}

function Projects() {
  const metaProjects = getMetaArticles('./src/mdx/projects');
  return (
    <div className="max-w-screen-lg md:px-10 mx-auto">
      <div className="sticky top-0 px-5 flex w-full h-20 items-center justify-between text-martinique dark:bg-blackPearl bg-pampas">
        <Link href="/">
          <IoIosArrowBack className="text-xl dark:text-arcticParadise" />
        </Link>
        <h3 className="ml-3 text-2xl dark:text-arcticParadise">Projects</h3>
      </div>
      <div className="flex flex-col gap-4 mb-20 px-2">
        {metaProjects.map((metaProject) => (
          <Card
            key={metaProject.slug}
            href={`projects/${metaProject.slug}`}
            title={metaProject.frontMatter.title}
            desc={metaProject.frontMatter.description}
            date={metaProject.frontMatter.date}
            bannerUrl={metaProject.frontMatter.bannerUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
