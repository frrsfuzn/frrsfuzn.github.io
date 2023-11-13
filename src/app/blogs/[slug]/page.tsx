import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import Head from "next/head";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const components = {
  h1: ({ children }) => <h1 className="text-3xl">{children}</h1>,
  h2: ({ children }) => <h2 className="text-2xl">{children}</h2>,
  h3: ({ children }) => <h3 className="text-1xl">{children}</h3>,
  h4: ({ children }) => <h4 className="text-xl">{children}</h4>,
};
async function ArticlePage({ params }: { params: { slug: string } }) {
  const source = await getBlogs(params.slug);
  const { content, frontmatter } = await compileMDX<{
    title: string;
    author: string;
    topics: string;
    description: string;
  }>({
    source: source,
    options: { parseFrontmatter: true },
    components: components,
  });

  return (
    <div className="max-w-screen-lg md:px-10 mx-auto">
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <div className="sticky top-0 px-5 flex w-full h-20 items-center justify-between text-martinique dark:bg-blackPearl bg-pampas">
        <Link href="/blogs">
          <IoIosArrowBack className="text-xl dark:text-arcticParadise" />
        </Link>
        <h3 className="ml-3 text-2xl dark:text-arcticParadise truncate">{frontmatter.title}</h3>
      </div>
      <div className="flex flex-col gap-4 mb-20 px-2">{content}</div>
    </div>
  );
}

export async function generateStaticParams() {
  const files = fs.readdirSync("./src/mdx/blogs");
  const pages = files.map((file) => ({ slug: file }));
  return pages;
}

async function getBlogs(slug: string) {
  const source = fs.readFileSync(
    path.join("./src/mdx/blogs", (slug + ".mdx") as string),
    "utf8"
  );
  return source;
}

export default ArticlePage;
