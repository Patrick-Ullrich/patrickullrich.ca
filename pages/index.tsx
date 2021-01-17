import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import LandingLayout from '../components/layouts/LandingLayout';
import { getAllBlogs } from '../lib/getAllBlogs';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>It's Patrick U</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LandingLayout>
        <Hero
          title="Hey, I am Patrick U"
          subtitle=" Full Stack Developer, that writes, speaks, and mentors about Software
          Development, the .NET World, and the React Universe."
        />
      </LandingLayout>
    </Box>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: { blogs },
  };
}
