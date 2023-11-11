import React from "react";

type TimelineData = {
  date: string;
  title: string;
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
          <div className="absolute w-3 h-3 bg-apricot rounded-full mt-1.5 -start-1.5 border border-apricot "></div>
          <time className="mb-1 text-sm text-martinique font-normal leading-none ">
            {timeline.date}
          </time>
          <h3 className="text-lg font-semibold text-tabasco">
            {timeline.title}
          </h3>
          <p className="mb-4 text-base font-normal">
            {timeline.description}
          </p>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
