export const components = {
  h1: ({ children }) => <h1 className="text-3xl mb-5">{children}</h1>,
  h2: ({ children }) => <h2 className="text-2xl mb-4">{children}</h2>,
  h3: ({ children }) => <h3 className="text-xl mb-3">{children}</h3>,
  h4: ({ children }) => <h4 className="text-lg mb-2">{children}</h4>,
  p: ({ children }) => <p className="mb-1">{children}</p>,
  ul: ({ children}) => <ul className="list-disc">{children}</ul>
};