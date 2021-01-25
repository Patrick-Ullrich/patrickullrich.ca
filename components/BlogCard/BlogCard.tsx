import {
  Badge,
  Box,
  Heading,
  Img,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

interface IProps {
  blog: BlogMeta;
  isLast: boolean;
}

export const BlogCard = ({ blog, isLast }: IProps) => (
  <Box
    borderRadius="lg"
    borderWidth="1px"
    borderColor={useColorModeValue('gray.500', 'gray.500')}
    overflow="hidden"
    mb={isLast ? 0 : 4}
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

    <Box px="4" py="2">
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
    </Box>
  </Box>
);
