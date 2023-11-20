import React, { ReactNode } from "react";

interface MDXContainer {
  children: ReactNode;
}

function MDXContainer({children}: MDXContainer) {
  return (
    <div className="mb-20 px-2 max-sm:prose-sm prose prose-table:bg-almond prose-table:dark:bg-freinachtBlack prose-table:border prose-table:rounded-md prose-table:border-black prose-table:dark:border-arcticParadise prose-th:font-bold prose-th:px-6 prose-th:py-4 prose-td:px-6 prose-td:py-4 prose-tr:border-b prose-tr:border-black prose-tr:dark:border-arcticParadise prose-tr:border-1 prose-blockquote:bg-almond prose-blockquote:border-tabasco prose-li:marker:text-martinique prose-li:text-martinique dark:prose-blockquote:border-seashellCove dark:prose-blockquote:bg-freinachtBlack dark:prose-li:marker:text-arcticParadise dark:prose-li:text-pampas dark:prose-invert max-w-none">
      {children}
    </div>
  );
}

export default MDXContainer;
