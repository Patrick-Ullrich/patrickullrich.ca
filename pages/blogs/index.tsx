import { getAllBlogs } from '../../lib/getAllBlogs';
import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';

export default function Blogs({ blogs }) {
  return (
    <div>
      <h1>Blog list</h1>
      <ul>
        {blogs.map((blog) => {
          return (
            <li key={blog.id}>
              <NextLink href={`/blogs/${blog.slug}`} passHref>
                <Link>{blog.title}</Link>
              </NextLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: { blogs },
  };
}
