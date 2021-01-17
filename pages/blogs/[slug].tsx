import React from 'react';
import { BlogLayout } from '../../components/layouts/BlogLayout';
import { getAllBlogs } from '../../lib/getAllBlogs';
import { getBlogBySlug } from '../../lib/getBlogBySlug';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import {
  Box,
  Center,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { CodeBlock } from '../../components/CodeBlock';
import { Img } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Code } from '@chakra-ui/react';
import styled from '@emotion/styled';

const BlockQuote = styled(Box)`
  > p {
    padding: 0;
    margin: 0;
  }
`;

const components = {
  p: (props) => (
    <Text my="4" {...props}>
      {props.children}
    </Text>
  ),
  h2: (props) => (
    <Heading {...props} size="lg">
      {props.children}
    </Heading>
  ),
  blockquote: ({ children }) => (
    <BlockQuote borderLeft="4px solid" borderLeftColor="gray.500" ml={4} px={4}>
      {children}
    </BlockQuote>
  ),
  hr: (props) => <Divider my={6} />,
  img: (props) => {
    let [alt, desc] = props.alt.split('::');
    return (
      <Center as="figure" flexDir="column" p="4">
        <Img borderRadius={8} {...props} alt={alt} />
        <Text fontSize="sm" color="gray.500" mt="2">
          {desc}
        </Text>
      </Center>
    );
  },
  inlineCode: Code,
  code: CodeBlock,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  a: (props) => (
    <Link {...props} isExternal>
      {props.children}
    </Link>
  ),
};

interface IProps {
  blog: Blog;
}

function BlogPostPage({ blog }: IProps) {
  const content = hydrate(blog.content, { components });

  return (
    <BlogLayout meta={blog.meta}>
      <section>{content}</section>
    </BlogLayout>
  );
}

export async function getStaticProps(context) {
  const { data, content } = await getBlogBySlug(context.params.slug);

  return {
    props: {
      blog: {
        meta: { ...data } as BlogMeta,
        content: await renderToString(content, {
          components,
          scope: data,
        }),
      },
    },
  };
}

export async function getStaticPaths(context) {
  const blogs = await getAllBlogs();

  return {
    paths: blogs.map((blog) => {
      return {
        params: {
          slug: blog.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default BlogPostPage;
