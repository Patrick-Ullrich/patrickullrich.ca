import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import Hero from '../components/Hero/Hero';
import MainLayout from '../components/layouts/MainLayout';
import { getAllBlogs } from '../lib/getAllBlogs';
import { useMediaQuery } from '@chakra-ui/react';
import { LatestBlogs } from '../components/LatestBlogs/LatestBlogs';
import { useEffect, useRef, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { LatestShop } from '../components/LatestShop/LatestShop';
import { ContactMe } from '../components/ContactMe/ContactMe';

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
    <>
      <Head>
        <title>It's Patrick U</title>
      </Head>
      <Box>
        <MainLayout>
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
          <ContactMe />
        </MainLayout>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: { blogs },
  };
}
