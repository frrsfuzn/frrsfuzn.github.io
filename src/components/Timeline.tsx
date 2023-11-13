import React from "react";

type TimelineData = {
  date: string;
  title: string;
  tags?: string[];
  description: string;
};

interface TimelineProps {
  data: TimelineData[];
}

function Timeline({ data }: TimelineProps) {
  return (
    <ol className="relative border-s border-martinique ">
      {data?.map((timeline) => (
        <li key={timeline.date} className="mb-10 ms-4">
          <div className="absolute w-3 h-3 dark:bg-pampas bg-apricot rounded-full mt-1.5 -start-1.5"></div>
          <time className="mb-1 text-sm dark:text-blueSplash text-martinique font-normal leading-none ">
            {timeline.date}
          </time>
          <h3 className="text-lg font-semibold dark:text-arcticParadise text-tabasco">
            {timeline.title}
          </h3>
          <div className="flex flex-wrap gap-1 w-3/4">
            {timeline.tags?.map((tag) => (
              <label
                key={tag}
                className="dark:bg-seashellCove bg-nepal p-0.5 text-sm dark:text-arcticParadise text-martinique rounded-md whitespace-nowrap"
              >
                {tag}
              </label>
            ))}
          </div>
          <p className="mt-2 mb-4 text-base font-normal">
            {timeline.description}
          </p>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
