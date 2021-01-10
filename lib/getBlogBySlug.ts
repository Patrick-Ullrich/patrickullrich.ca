import matter from "gray-matter";
import fs from "fs";

export async function getBlogBySlug(slug: string) {
  try {
    const path = `${process.cwd()}/posts/${slug}/index.mdx`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });
    return matter(rawContent);
  } catch (err) {
    console.error(err);
  }
}
