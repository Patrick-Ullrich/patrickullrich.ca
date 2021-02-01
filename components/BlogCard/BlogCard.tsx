import {
  Badge,
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';

interface IProps {
  blog: BlogMeta;
  isLast: boolean;
}

export const BlogCard = ({ blog, isLast }: IProps) => (
  <NextLink href={`/blogs/${blog.slug}`} passHref>
    <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
      <Flex
        height="100%"
        transition="transform .4s"
        _hover={{ transform: 'scale(1.05)' }}
        borderRadius="lg"
        borderWidth="1px"
        borderColor={useColorModeValue('gray.500', 'gray.500')}
        overflow="hidden"
        mb={isLast ? 0 : 4}
        flexDirection="column"
      >
        <Box
          mx="4"
          mt="4"
          borderRadius="lg"
          backgroundImage={`url(${blog.bannerUrl})`}
          height="150px"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
        />

        <Flex
          px="4"
          py="2"
          flexGrow={1}
          justifyContent="space-between"
          flexDirection="column"
        >
          <Box>
            <Heading size="sm" fontWeight="500" letterSpacing="wide">
              {blog.title}
            </Heading>
            <Text
              my={2}
              noOfLines={2}
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              {blog.description}
            </Text>
          </Box>
          <Box d="flex" justifyContent="space-between" alignItems="baseline">
            {blog.keywords.slice(0, 1).map((x, idx) => (
              <Badge colorScheme="teal" key={idx} mr={2}>
                {x}
              </Badge>
            ))}
            {blog.readTimeEstimate && (
              <Box
                color={useColorModeValue('gray.600', 'gray.400')}
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {blog.readTimeEstimate}
              </Box>
            )}
          </Box>
        </Flex>
      </Flex>
    </Link>
  </NextLink>
);
