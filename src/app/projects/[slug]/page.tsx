import Image from "next/image";
import { compileMDX } from "next-mdx-remote/rsc";
import Head from "next/head";
import Link from "next/link";
import MDXContainer from "@/components/MDXContainer";
import { IoIosArrowBack } from "react-icons/io";
import { parse, format } from "date-fns";
import { notFound } from "next/navigation";
import { getArticle, getArticleMeta, getArticleSlugs } from "@/utils/mdx";

type MetadataProps = {
  params: {
    slug: string;
  }
}

export async function generateMetadata({ params }: MetadataProps) {
  try {
    const metadata = getArticleMeta('./src/mdx/projects', params.slug);
    return {
      title: metadata?.title,
      description: metadata?.description
    }
  } catch (err) {
    notFound();
  }
}


export async function generateStaticParams() {
  const result = getArticleSlugs('./src/mdx/projects');
  return result;
}

async function ProjectArticle({ params }: { params: { slug: string } }) {
  try {
    const source = getArticle('./src/mdx/projects', params.slug);
    const { content, frontmatter } = await compileMDX<{
      title: string;
      date: string;
      topics: string;
      description: string;
      bannerUrl: string;
    }>({
      source: source as string,
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
          <Link href="/projects">
            <IoIosArrowBack className="text-xl dark:text-arcticParadise" />
          </Link>
          <h3 className="ml-3 text-2xl dark:text-arcticParadise truncate">
            Projects
          </h3>
        </div>
        <div>
          <div className="flex flex-col justify-center items-center mb-5 px-2">
            <h1 className="text-2xl lg:text-3xl">{frontmatter.title}</h1>
            <label className="text-sm">{formattedDate}</label>
          </div>
          <Image
            src={frontmatter.bannerUrl}
            width={1280}
            height={480}
            unoptimized
            className="mb-5"
            style={{ objectFit: "cover", aspectRatio: "8 / 3" }}
            alt="project"
          />
          <MDXContainer>{content}</MDXContainer>
        </div>
      </div>
    );
  } catch (err) {
    notFound();
  }
}

export default ProjectArticle;
