import Head from 'next/head';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import { getAllBlogs } from '../lib/getAllBlogs';

export default function Home(props) {
  return (
    <Box>
      <Head>
        <title>It's Patrick U</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Flex as="header">
          <Heading>Patrick</Heading>
          <Spacer />
          <Box>
            <Link href="">Blog</Link>
            <Link href="">About</Link>
          </Box>
        </Flex>
        <Heading size="lg">Welcome to my homepage</Heading>

        <div>
          <h1>Blog list</h1>
          <ul>
            {props.blogs.map((blog) => {
              return (
                <li key={blog.id}>
                  <Link href={`/blog/${blog.slug}`}>
                    <a>{blog.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>

      <footer>Patrick Ullrich</footer>
    </Box>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: { blogs },
  };
}
