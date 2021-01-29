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
  Icon,
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
import { LinkIcon } from '@chakra-ui/icons';

/**
 * The `BaseButton` component accepts any number of children. This flexibility
 * is used to support easily adding icons as children. However, we only want
 * to include strings when building accessible labels. Otherwise, it would say
 * [object Object] in the label.
 */
const getLabelFromChildren = (children) => {
  let label = '';

  React.Children.map(children, (child) => {
    if (typeof child === 'string') {
      label += child;
    }
  });

  return label;
};

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
      <Link display="flex" alignItems="center" href={`#${titleLink}`}>
        <LinkIcon ml={-8} />
        <Heading pl={4} {...props} size="lg">
          {props.children}
        </Heading>
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
