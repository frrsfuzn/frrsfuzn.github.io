"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import Header from "@/components/Header";
import Timeline from "@/components/Timeline";

/*
  TODOS:
  - display 3d room with threejs
  - create tree experiences
  - create highlight section system
*/

export default function Home() {
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
                  date: "January 2023 - February 2024",
                  title: "Frontend Developer at PT. Mencari Cinta Sejati",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue placerat orci. Duis id lacus orci. Aenean eget tempus odio. Vivamus felis quam, dapibus quis metus quis, tempus aliquet enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue placerat orci. Duis id lacus orci. Aenean eget tempus odio. Vivamus felis quam, dapibus quis metus quis, tempus aliquet enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue placerat orci. Duis id lacus orci. Aenean eget tempus odio. Vivamus felis quam, dapibus quis metus quis, tempus aliquet enim.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue placerat orci. Duis id lacus orci. Aenean eget tempus odio. Vivamus felis quam, dapibus quis metus quis, tempus aliquet enim.",
                },
                {
                  date: "January 2022 - February 2023",
                  title: "Frontend Developer at PT. Mencari Cinta Sejati",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent",
                },
                {
                  date: "January 2021 - February 2023",
                  title: "Frontend Developer at PT. Mencari Cinta Sejati",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent",
                },
                {
                  date: "January 2020 - February 2021",
                  title: "Frontend Developer at PT. Mencari Cinta Sejati",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent",
                },
              ]}
            />
          </Section>
          <Section id="blogs">
            <h2 className="text-3xl">Blogs</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              congue placerat orci. Duis id lacus orci. Aenean eget tempus odio.
              Vivamus felis quam, dapibus quis metus quis, tempus aliquet enim.
              Curabitur in elit urna. Nulla non fringilla dui. Suspendisse vitae
              tempor arcu. Donec consectetur quam id sem bibendum sollicitudin.
              Maecenas ex justo, efficitur ut faucibus vel, maximus sed mi.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
              sagittis sapien. Ut vitae sodales ligula, ac elementum justo.
              Phasellus ut aliquet dolor, eu malesuada lacus. Sed feugiat sed
              sem id rhoncus. Nullam commodo felis mi, vitae dapibus velit
              malesuada eu.
            </p>
            <p>
              Phasellus sed elementum enim. Mauris vel aliquam nulla. Praesent
              nec tincidunt felis. Nulla fermentum eros augue, fermentum congue
              quam dignissim id. Duis consectetur metus et tellus convallis
              auctor. Ut quam eros, tempor id iaculis nec, tincidunt non lorem.
              Sed quis sem vitae lectus placerat tincidunt. Maecenas aliquam,
              lorem sit amet feugiat laoreet, lectus nisi congue neque, id
              ultrices magna ipsum a tellus. Suspendisse condimentum vulputate
              vulputate. Integer tortor ex, venenatis vel tristique vitae,
              vehicula ac enim. Vestibulum molestie eros sapien, vitae sodales
              massa interdum nec. Vivamus sollicitudin, odio ac pharetra
              tristique, dui arcu commodo dui, in tempor velit sapien in velit.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla mollis, erat et ultricies
              placerat, nunc lacus volutpat urna, sed eleifend sapien libero
              posuere nisl.
            </p>
          </Section>
          <Section id="projects">
            <h2 className="text-3xl">Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              congue placerat orci. Duis id lacus orci. Aenean eget tempus odio.
              Vivamus felis quam, dapibus quis metus quis, tempus aliquet enim.
              Curabitur in elit urna. Nulla non fringilla dui. Suspendisse vitae
              tempor arcu. Donec consectetur quam id sem bibendum sollicitudin.
              Maecenas ex justo, efficitur ut faucibus vel, maximus sed mi.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
              sagittis sapien. Ut vitae sodales ligula, ac elementum justo.
              Phasellus ut aliquet dolor, eu malesuada lacus. Sed feugiat sed
              sem id rhoncus. Nullam commodo felis mi, vitae dapibus velit
              malesuada eu.
            </p>
            <p>
              Phasellus sed elementum enim. Mauris vel aliquam nulla. Praesent
              nec tincidunt felis. Nulla fermentum eros augue, fermentum congue
              quam dignissim id. Duis consectetur metus et tellus convallis
              auctor. Ut quam eros, tempor id iaculis nec, tincidunt non lorem.
              Sed quis sem vitae lectus placerat tincidunt. Maecenas aliquam,
              lorem sit amet feugiat laoreet, lectus nisi congue neque, id
              ultrices magna ipsum a tellus. Suspendisse condimentum vulputate
              vulputate. Integer tortor ex, venenatis vel tristique vitae,
              vehicula ac enim. Vestibulum molestie eros sapien, vitae sodales
              massa interdum nec. Vivamus sollicitudin, odio ac pharetra
              tristique, dui arcu commodo dui, in tempor velit sapien in velit.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Nulla mollis, erat et ultricies
              placerat, nunc lacus volutpat urna, sed eleifend sapien libero
              posuere nisl.
            </p>
          </Section>
        </main>
        <div className="sticky flex lg:hidden justify-center gap-10 items-center bg-nepal bottom-5 w-full h-10 rounded-full">
          <Link href="#about">About</Link>
          <Link href="#experiences">Experiences</Link>
          <Link href="#blogs">Blogs</Link>
          <Link href="#projects">Projects</Link>
        </div>
      </div>
    </div>
  );
}
