import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import LandingLayout from '../components/layouts/LandingLayout';
import { getAllBlogs } from '../lib/getAllBlogs';
import { useMediaQuery } from '@chakra-ui/react';
import { LatestBlogs } from '../components/LatestBlogs/LatestBlogs';
import { useEffect, useRef, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { LatestShop } from '../components/LatestShop/LatestShop';

const WelcomeText = [
  'Hi',
  'Salut',
  'Hallo',
  'Hola',
  'Privet',
  'Yā',
  'Oi',
  'Hey',
];
interface IProps {
  blogs: BlogMeta[];
}

export default function Home({ blogs }: IProps) {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    intervalRef.current = intervalId;

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

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
        <Container maxW="1280px" mb={[8, 8, 0]}>
          <Hero
            title={
              <>
                <TextTransition
                  inline={true}
                  text={WelcomeText[index % WelcomeText.length]}
                  springConfig={presets.default}
                />
                , I'm {isLargerThan768 && <br />}
                Patrick U.
              </>
            }
            subtitle="Full Stack Developer, that writes, speaks, and mentors about Software
          Development, the .NET World, and the React Universe."
            about="Currently located in Saskatchewan, Canada. "
          />
        </Container>
        <LatestBlogs blogs={blogs} />
        <LatestShop />
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
