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
