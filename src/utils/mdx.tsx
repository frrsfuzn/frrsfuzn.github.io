export const components = {
  h1: ({ children }) => <h1 className="text-3xl mb-5">{children}</h1>,
  h2: ({ children }) => <h2 className="text-2xl mb-4">{children}</h2>,
  h3: ({ children }) => <h3 className="text-xl mb-3">{children}</h3>,
  h4: ({ children }) => <h4 className="text-lg mb-2">{children}</h4>,
  p: ({ children }) => <p className="mb-4">{children}</p>,
  ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
  ol: ({ children }) => <ol className="list-inside list-decimal">{children}</ol>,
  blockquote: ({ children }) => (
    <blockquote className="p-4 my-4 border-l-4 border-tabasco bg-almond dark:bg-arcticParadise dark:border-gray-500">
      {children}
    </blockquote>
  ),
};
