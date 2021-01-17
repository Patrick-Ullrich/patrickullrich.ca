import {
  Box,
  Flex,
  Heading,
  Img,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

interface IProps {
  title: string;
  subtitle: string;
}

export default function Hero({ title, subtitle }: IProps) {
  const logo = useColorModeValue(
    '/assets/images/itspatricku-logo-full colour navy.svg',
    '/assets/images/itspatricku-logo-full colour cream.svg',
  );

  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap="nowrap"
      minH="70vh"
      px={{ base: '2', md: '8' }}
      mb={16}
    >
      <Stack
        spacing={4}
        w={{ base: '80%', md: '40%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="700"
          textAlign={['center', 'center', 'left', 'left']}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {subtitle}
        </Heading>
      </Stack>

      <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
        <Img src={logo} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
  );
}
