import glob from 'fast-glob';
import { v4 } from 'uuid';
import matter from 'gray-matter';
import fs from 'fs';
import readTimeEstimate from 'read-time-estimate';

export async function getAllBlogs() {
  try {
    const files = await glob([`posts/**/*.mdx`], {
      dot: true,
    });

    const blogs = files.map((fn) => {
      const path = `${process.cwd()}/${fn}`;
      const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8',
      });
      const { data, content } = matter(rawContent);
      const estimate = readTimeEstimate(content, 275, 12, 500, [
        'img',
        'Image',
      ]);

      return {
        ...data,
        id: v4(),
        readTimeEstimate: estimate.humanizedDuration,
      } as BlogMeta;
    });
    return blogs;
  } catch (err) {
    console.error(err);
  }
}
