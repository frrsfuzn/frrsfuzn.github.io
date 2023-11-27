import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { parse } from 'date-fns';

export function getMetaArticles(articlePath: string) {
  const files = fs.readdirSync(articlePath);
  const metaBlogs = files.map((filename) => {
    const mdx = fs.readFileSync(path.join(articlePath, filename));
    const { data: frontMatter } = matter(mdx);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  metaBlogs.sort(
    (a, b) =>
      parse(b.frontMatter.date, "dd/MM/yyyy", new Date()).getTime() -
      parse(a.frontMatter.date, "dd/MM/yyyy", new Date()).getTime()
  );
  return metaBlogs;
}

export function getArticle(articlePath: string, slug: string) {
  try {
    const source = fs.readFileSync(
      path.join(articlePath, (slug + ".mdx") as string),
      "utf8"
    );
    return source;
  } catch(err) {
    return err;
  }
}

export function getArticleMeta(articlePath: string, slug: string) {
  try {
    const source = fs.readFileSync(
      path.join(articlePath, (slug + ".mdx") as string),
      "utf8"
    );
    const { data: frontMatter } = matter(source);
    return frontMatter;
  } catch(err) {
    return undefined
  }
}
