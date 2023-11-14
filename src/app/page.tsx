import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Header from "@/components/Header";
import Timeline from "@/components/Timeline";
import Card from "@/components/Card";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { parse } from 'date-fns';

/*
  TODOS:
  - display 3d room with threejs
  - create highlight section system
*/

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
  metaBlogs.sort((a, b) => parse(b.frontMatter.date, 'dd/MM/yyyy', new Date()) - parse(a.frontMatter.date, 'dd/MM/yyyy', new Date()))
  return metaBlogs.slice(0,3);
}

export default function Home() {
  const metaBlogs = getBlogs();
  return (
    <div className="container md:px-10 mx-auto">
      <div className="lg:flex lg:justify-between lg:gap-12 min-lg:px-5">
        <Header />
        <main className="lg:w-3/5 lg:pt-20 max-lg:px-10">
          <Section id="about">
            <h2 className="text-3xl mb-5">About</h2>
            <p>
              Hi! I&apos;m Farras! A dedicated Software Engineer with a keen
              interest and expertise in Frontend Technologies. Proficient in
              utilizing a range of tools and frameworks, including ReactJS,
              React Native, NextJS, JavaScript, TypeScript, ReasonML, GraphQL,
              Redux, and CSS.
            </p>
          </Section>
          <Section id="experiences">
            <h2 className="text-3xl mb-5">Experiences</h2>
            <Timeline
              data={[
                {
                  date: "January 2023 - Present",
                  title: "Frontend Developer at PT. Dans Multi Pro",
                  tags: [
                    "ReactJS",
                    "NextJS",
                    "Typescript",
                    "Javascript",
                    "GraphQL",
                    "Redux",
                    "Material UI",
                    "Storybook",
                  ],
                  description:
                    "Enhanced the file chunking mechanism, leading to significantly faster processing when uploading large files. Involved in implementing NextJS to the dashboard to achieve the best performance for our clients. Implement Storybook into the mobile site so that developers can easily preview components",
                },
                {
                  date: "January 2022 - November 2022",
                  title: "Frontend Engineer at Ruangguru",
                  tags: [
                    "ReactJS",
                    "NextJS",
                    "React Native",
                    "ReasonML",
                    "Typescript",
                    "Javascript",
                  ],
                  description:
                    "Developed features on Skillacademy's discovery using ReactJS with NextJS framework and programmed it with ReasonML to make it run-time error-free. Involved in creating SEO Category Tree on Skillacademy resulting in increasing organic search from < 5% to > 10%. Involved in improving the speed of changing content on Skillacademy with key values via Jenkins. Increase assets adjustment speed to less than 0.5 days and increase front-end productivity in updating homepage assets from 1 man week to 0.2 man week for modest interface changes on the homepage. Involved in technical planning and development of Skillacademy Gamification project; a reward mechanism using coins as tokens that can be exchanged for prizes. This project predicted gaining more user interest in learning on Skillacademy",
                },
                {
                  date: "September 2021 - December 2021",
                  title: "Frontend Engineer Intern at Siklus",
                  tags: ["ReactJS", "NextJS", "Typescript", "Material UI"],
                  description:
                    "Responsible for creating user interface of internal tools. Created with React JS with Next JS framework alongside with typescript and use Material UI as UI component.",
                },
              ]}
            />
          </Section>
          <Section id="blogs">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-3xl">Blogs</h2>
              <Link
                href={"/blogs"}
                className="dark:text-arcticParadise text-tabasco"
              >
                See more
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {metaBlogs.map((metaBlog) => (
                <Card
                  key={metaBlog.slug}
                  title={metaBlog.frontMatter.title}
                  desc={metaBlog.frontMatter.description}
                  href={`/blogs/${metaBlog.slug}`}
                />
              ))}
              {/* <Card />
              <Card />
              <Card /> */}
            </div>
          </Section>
          <Section id="projects">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-3xl">Projects</h2>
              <Link
                href={"/projects"}
                className="dark:text-arcticParadise text-tabasco"
              >
                See more
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              {/* <Card />
              <Card />
              <Card /> */}
            </div>
          </Section>
        </main>
        <div className="sticky flex lg:hidden justify-center gap-7 items-center bg-pampas/30 border-casper border-2 bottom-5 w-11/12 m-auto h-10 rounded-full backdrop-blur-sm shadow-md">
          <Link href="#about">About</Link>
          <Link href="#experiences">Experiences</Link>
          <Link href="#blogs">Blogs</Link>
          <Link href="#projects">Projects</Link>
        </div>
      </div>
    </div>
  );
}
