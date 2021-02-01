import { getAllBlogs } from '../../lib/getAllBlogs';
import NextLink from 'next/link';
import {
  Center,
  Container,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightElement,
  Link,
} from '@chakra-ui/react';
import { BlogCard } from '../../components/BlogCard/BlogCard';
import MainLayout from '../../components/layouts/MainLayout';
import { useEffect, useState } from 'react';
import { matchSorter } from 'match-sorter';
import { Search2Icon } from '@chakra-ui/icons';

interface IProps {
  blogs: BlogMeta[];
}

export default function Blogs({ blogs }: IProps) {
  const [searchText, setSearchText] = useState<string>('');
  const [filteredBlogs, setFilteredBlogs] = useState<BlogMeta[]>(blogs);

  useEffect(() => {
    setFilteredBlogs(
      matchSorter(blogs, searchText, { keys: ['title', 'description'] }),
    );
  }, [searchText]);

  return (
    <MainLayout>
      <Container maxW="1280px" mb={[8, 8, 16]}>
        <Center mb={8}>
          <InputGroup width="480px">
            <Input
              placeholder="Search..."
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
            <InputRightElement children={<Search2Icon color="gray.500" />} />
          </InputGroup>
        </Center>
        <Grid columnGap={4} rowGap={4} gridTemplateColumns="repeat(3, 1fr)">
          {filteredBlogs.map((blog, index) => (
            <GridItem>
              <BlogCard
                blog={blog}
                isLast={index === filteredBlogs.length - 1}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </MainLayout>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: { blogs },
  };
}
