import React from 'react';
import { BlogLayout } from '../../components/BlogLayout';
import { getAllBlogs } from '../../lib/getAllBlogs';
import { getBlogBySlug } from '../../lib/getBlogBySlug';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { Center, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { CodeBlock } from '../../components/CodeBlock';
import { Img } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import { Code } from '@chakra-ui/react';

const components = {
  p: (props) => (
    <Text my="4" {...props}>
      {props.children}
    </Text>
  ),
  hr: Divider,
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
  li: ListItem,
  a: (props) => (
    <Link {...props} color="teal.500" isExternal>
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
