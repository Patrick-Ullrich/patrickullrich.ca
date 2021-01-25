import {
  Box,
  Container,
  Flex,
  Heading,
  Img,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { GrTwitter, GrInstagram, GrLinkedinOption } from 'react-icons/gr';
import { SectionHeader } from '../Section/SectionHeader';
import { SectionInfoText } from '../Section/SectionInfoText';
import { SectionLink } from '../Section/SectionLink';
import { SectionSubHeader } from '../Section/SectionSubHeader';

interface IProps {
  title: any;
  subtitle: string;
  about: string;
}

export default function Hero({ title, subtitle, about }: IProps) {
  return (
    <Flex
      justifyContent={{
        base: 'flex-end',
        md: 'space-around',
        xl: 'space-between',
      }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap="nowrap"
      pt={{ base: 12, md: 20 }}
    >
      <Stack
        display="flex"
        spacing={0}
        align="center"
        flexDirection={['column', 'column', 'row']}
      >
        <Box
          w={{ base: '100%', sm: '60%', md: '60%' }}
          position="relative"
          mb={{ base: 8, md: 0 }}
        >
          <Flex
            justifyContent={['center', 'center', 'flex-end']}
            maxHeight={['150px', '150px', '400px']}
            borderRadius="50%"
            overflow={['hidden', 'hidden', 'visible']}
          >
            <Img
              objectPosition="top"
              src="/assets/images/profile-picture.png"
              objectFit="cover"
              height={['200px', '200px', '400px']}
            />
          </Flex>
          <Heading
            position={['relative', 'relative', 'absolute']}
            as="h2"
            mt={4}
            top="0"
            fontSize={['28px', '36px', '48px']}
            fontWeight="700"
            textAlign={['center', 'center', 'left', 'left']}
            _after={{
              // @ts-ignore
              md: {
                content: '""',
                display: 'block',
                width: '3.75rem',
                paddingTop: '0.75rem',
                borderBottom: '0.5rem solid',
                borderColor: useColorModeValue('teal.300', 'red.300'),
              },
            }}
          >
            {title}
          </Heading>
          <Stack
            display={['none', 'none', 'flex']}
            mt="0.5rem"
            pt="0.5rem"
            justifyContent={'start'}
            direction="row"
            spacing="8"
            position={'absolute'}
            top={'300px'}
          >
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
        </Box>
        <Box w={{ md: '40%' }}>
          <SectionHeader>Introduction</SectionHeader>
          <SectionSubHeader>{subtitle}</SectionSubHeader>
          <SectionInfoText>{about}</SectionInfoText>
          <SectionLink to="about">More about me</SectionLink>
        </Box>
      </Stack>
    </Flex>
  );
}
