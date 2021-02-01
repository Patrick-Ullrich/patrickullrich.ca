import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Icon,
  Img,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { GrInstagram, GrLinkedinOption, GrTwitter } from 'react-icons/gr';
import { Subscription } from '../Subscription/Subscription';
import { SpotifyIcon } from './SpotifyIcon';

interface ISong {
  title: string;
  link: string;
}

export default function Footer(props) {
  const logo = useColorModeValue(
    '/assets/images/itspatricku-symbol-full colour navy.svg',
    '/assets/images/itspatricku-symbol-full colour cream.svg',
  );

  const [currentSong, setCurrentSong] = useState<ISong | undefined>();

  useEffect(() => {
    const load = async () => {
      const res = fetch('/api/spotify/now');
      const result = await (await res).json();
      if (result.isPlaying) {
        setCurrentSong({
          title: `${result.artist} - ${result.title}`,
          link: result.songUrl,
        });
      } else {
        setCurrentSong(undefined);
      }
    };

    load();
  }, []);

  return (
    <Box mb="8">
      <Container maxW="1280px" pt="12" minHeight="100px">
        <Stack
          spacing="4"
          flexDirection={['column', 'row']}
          justifyContent="space-between"
          alignItems={['center', 'flex-end']}
        >
          <Subscription />
          <Flex flexDirection="column" alignItems="flex-end">
            <Text mb={2} fontSize="14px">
              <SpotifyIcon mb={0.5} mr={2} fontSize="18px" />
              {currentSong ? (
                <Link
                  fontSize="14px"
                  mb={4}
                  isExternal
                  href={currentSong?.link}
                >
                  {currentSong.title}
                </Link>
              ) : (
                'Not Playing.'
              )}
            </Text>
            <Stack pb={2} justifyContent={'start'} direction="row" spacing="8">
              <Link isExternal href="https://www.instagram.com/itspatricku/">
                <Icon
                  color={useColorModeValue('brandBlack', 'brandWhite')}
                  fontSize="1.5rem"
                  as={GrInstagram}
                />
              </Link>

              <Link isExternal href="https://twitter.com/ItsPatrickU">
                <Icon
                  color={useColorModeValue('brandBlack', 'brandWhite')}
                  fontSize="1.5rem"
                  as={GrTwitter}
                />
              </Link>

              <Link isExternal href="https://www.linkedin.com/in/itspatricku/">
                <Icon
                  color={useColorModeValue('brandBlack', 'brandWhite')}
                  fontSize="1.5rem"
                  as={GrLinkedinOption}
                />
              </Link>
            </Stack>
          </Flex>
        </Stack>
        <Divider mt={12} mb={8} />
        <HStack justifyContent="center" spacing={4}>
          <Img src={logo} htmlWidth="75" />
          <Text>© {new Date().getFullYear()} Patrick Ullrich</Text>
        </HStack>
      </Container>
    </Box>
  );
}
