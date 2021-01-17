import { Container, Heading } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';
import { Badge } from '@chakra-ui/react';

interface IProps {
  children: JSX.Element;
  meta: BlogMeta;
}

export const BlogLayout = ({ children, meta }: IProps) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container maxW="960px">
        <Heading>{meta.title}</Heading>
        {meta.keywords.map((x, idx) => (
          <Badge key={idx} mr={2}>
            {x}
          </Badge>
        ))}
        {children}
      </Container>
    </>
  );
};
