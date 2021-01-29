import { Container, Heading, Img } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';
import { Badge } from '@chakra-ui/react';
import Header from '../Header/Header';

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
      <Container maxW="680px">
        <Img borderRadius={8} my={8} src={meta.bannerUrl} />
        <Heading fontWeight="700">{meta.title}</Heading>
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
