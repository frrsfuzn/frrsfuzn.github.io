import fs from "fs";
import path from "path";
import Image from "next/image";
import { compileMDX } from "next-mdx-remote/rsc";
import Head from "next/head";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import MDXContainer from "@/components/MDXContainer";
import {parse, format} from 'date-fns';
import { notFound } from 'next/navigation'

type MetadataProps = {
  params: {
    slug: string;
  }
}

export async function generateMetadata({ params }: MetadataProps) {
  try {
    const source = await getBlogs(params.slug);
    const { content, frontmatter } = await compileMDX<{
      title: string;
      date: string;
      topics: string;
      description: string;
      bannerUrl: string;
    }>({
      source: source,
      options: { parseFrontmatter: true },
    }); 
    return ({
      title: frontmatter.title,
    })
  } catch(err) {
    notFound();
  }
}

async function ArticlePage({ params }: { params: { slug: string } }) {
  try {
    const source = await getBlogs(params.slug);
    const { content, frontmatter } = await compileMDX<{
      title: string;
      date: string;
      topics: string;
      description: string;
      bannerUrl: string;
    }>({
      source: source,
      options: { parseFrontmatter: true },
    });
    const parsedDate = parse(frontmatter.date, "dd/MM/yyyy", new Date());
    const formattedDate = format(parsedDate, "dd MMMM yyyy");
  
    return (
      <div className="max-w-screen-lg md:px-10 mx-auto">
        <Head>
          <title>{frontmatter.title}</title>
        </Head>
        <div className="sticky top-0 px-5 flex w-full h-20 items-center justify-between text-martinique dark:bg-blackPearl bg-pampas">
          <Link href="/blogs">
            <IoIosArrowBack className="text-xl dark:text-arcticParadise" />
          </Link>
          <h3 className="ml-3 text-2xl dark:text-arcticParadise truncate">
            Blogs
          </h3>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center mb-5 px-2">
            <h1 className="text-2xl lg:text-3xl font-bold">{frontmatter.title}</h1>
            <label className="text-sm">{formattedDate}</label>
          </div>
          <Image
            src={frontmatter.bannerUrl}
            width={1280}
            height={480}
            unoptimized
            style={{ objectFit: 'cover', aspectRatio: '8 / 3' }}
            className="mb-5"
            alt="blog"
          />
          <MDXContainer>{content}</MDXContainer>
        </div>
      </div>
    );
  } catch(err) {
    notFound();
  }
 
}

export async function generateStaticParams() {
  const files = fs.readdirSync("./src/mdx/blogs");
  const pages = files.map((file) => ({ slug: file }));
  return pages;
}

async function getBlogs(slug: string) {
  try {
    const source = fs.readFileSync(
      path.join("./src/mdx/blogs", (slug + ".mdx") as string),
      "utf8"
    );
    return source;
  } catch(err) {
    return undefined
  }
}

export default ArticlePage;
