import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  Img,
  Link,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';
import { Badge } from '@chakra-ui/react';
import Header from '../Header/Header';
import { Subscription } from '../Subscription/Subscription';
import { DateTime } from 'luxon';
import { ShareButtonRow } from '../ShareButtonRow/ShareButtonRow';
import { FaCommentDots } from 'react-icons/fa';

interface IProps {
  children: JSX.Element;
  meta: BlogMeta;
}

export const BlogLayout = ({ children, meta }: IProps) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Header />
      <Container maxW="680px" mb={8}>
        <Img borderRadius={8} my={8} src={meta.bannerUrl} />
        <Heading fontWeight="700">{meta.title}</Heading>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
        >
          {DateTime.fromISO(meta.date).toLocaleString({
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}{' '}
          &bull; {meta.readTimeEstimate}
        </Box>
        {meta.keywords.map((x, idx) => (
          <Badge key={idx} mr={2}>
            {x}
          </Badge>
        ))}

        {children}

        <Button
          w={['100%', 'auto']}
          as={Link}
          bgColor={'red.300'}
          colorScheme={'red'}
          isExternal
          href={meta.discuss}
          size="md"
          textDecoration="none"
          _hover={{ textDecoration: 'none' }}
          leftIcon={<Icon as={FaCommentDots} h={5} w={5} />}
        >
          Discuss on Twitter
        </Button>
        <Flex
          mt={8}
          alignItems="flex-end"
          justifyContent="flex-end"
          flexDirection="column"
        >
          <Text>Liked the Article? Share it!</Text>
          <ShareButtonRow title={meta.title} slug={meta.slug} />
        </Flex>
        <Divider mt={2} mb={8} />

        <Subscription />
      </Container>
    </>
  );
};
