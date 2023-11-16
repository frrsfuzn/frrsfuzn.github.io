import React, { ReactNode } from "react";

interface MDXContainer {
  children: ReactNode;
}

function MDXContainer({children}: MDXContainer) {
  return (
    <div className="mb-20 px-2 prose prose-blockquote:border-tabasco prose-blockquote:bg-almond prose-li:marker:text-martinique prose-li:text-martinique dark:prose-blockquote:border-seashellCove dark:prose-blockquote:bg-freinachtBlack dark:prose-li:marker:text-arcticParadise dark:prose-li:text-pampas dark:prose-invert max-w-none">
      {children}
    </div>
  );
}

export default MDXContainer;
