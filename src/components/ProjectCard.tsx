import React from "react";

function ProjectCard() {
  return (
    <div className="max-w-xs bg-almond border border-apricot rounded-lg shadow hover:text-tabasco">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://picsum.photos/500/500"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-martinique">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
