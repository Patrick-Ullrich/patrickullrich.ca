import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { BlogCard } from '../BlogCard/BlogCard';
import { SectionHeader } from '../Section/SectionHeader';
import { SectionInfoText } from '../Section/SectionInfoText';
import { SectionLink } from '../Section/SectionLink';
import { SectionSubHeader } from '../Section/SectionSubHeader';

interface IProps {
  blogs: BlogMeta[];
}

export const LatestBlogs = ({ blogs }: IProps) => {
  const blogsToDisplay = blogs.slice(0, 1);

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.700')} py={12}>
      <Container maxW="1280px">
        <Flex
          spacing="auto"
          display="flex"
          align="center"
          flexDirection={['column', 'column', 'row']}
        >
          <Box maxWidth={{ base: '100%', md: '60%' }}>
            <SectionHeader>Latest Blog Post</SectionHeader>
            <SectionSubHeader>
              I mostly write about React and .NET with general software
              development topics in between.
            </SectionSubHeader>
            <SectionInfoText>About 2 new posts every month</SectionInfoText>
            <SectionLink to="blogs">See all Blogs</SectionLink>
          </Box>
          <Box
            maxWidth={{ base: '100%', md: '40%' }}
            mb={{ base: 8, md: 0 }}
            mt={{ base: 4, md: 0 }}
          >
            {blogsToDisplay.map((x, index) => (
              <BlogCard isLast={index + 1 == blogsToDisplay.length} blog={x} />
            ))}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
