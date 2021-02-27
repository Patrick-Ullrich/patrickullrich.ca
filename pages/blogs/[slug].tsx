import { LinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Code,
  Divider,
  Heading,
  Img,
  Link,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import hydrate from 'next-mdx-remote/hydrate';
import renderToString from 'next-mdx-remote/render-to-string';
import React from 'react';
import readTimeEstimate from 'read-time-estimate';
import { CodeBlock } from '../../components/CodeBlock';
import { BlogLayout } from '../../components/layouts/BlogLayout';
import { getAllBlogs } from '../../lib/getAllBlogs';
import { getBlogBySlug } from '../../lib/getBlogBySlug';

const BlockQuote = styled(Box)`
  > p {
    padding: 0;
    margin: 0;
  }
`;

const components = {
  p: (props) => (
    <Text my={8} size="lg" {...props}>
      {props.children}
    </Text>
  ),
  h2: (props) => {
    let titleLink = props.children.toLowerCase().replace(/\s/g, '-');
    return (
      <Link
        sx={{
          ':hover > svg': {
            visibility: 'visible',
          },
        }}
        display="flex"
        alignItems="center"
        href={`#${titleLink}`}
      >
        <Heading {...props} size="lg" mt={4}>
          {props.children}
        </Heading>
        <LinkIcon ml={4} visibility="hidden" />
      </Link>
    );
  },
  blockquote: ({ children }) => (
    <BlockQuote
      borderLeft="4px solid"
      borderLeftColor="gray.500"
      ml={4}
      mt={12}
      px={4}
    >
      {children}
    </BlockQuote>
  ),
  hr: (props) => (
    <Divider borderBottomWidth={4} width="75%" ml="12.5%" my={12} />
  ),
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
  const estimate = readTimeEstimate(content, 275, 12, 500, ['img', 'Image']);

  return {
    props: {
      blog: {
        meta: {
          ...data,
          readTimeEstimate: estimate.humanizedDuration,
        } as BlogMeta,
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
