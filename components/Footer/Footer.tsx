import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';

export default function Footer(props) {
  return (
    <Box
      boxShadow="inner"
      borderBottomRightRadius="md"
      borderBottomLeftRadius="md"
      mb="8"
    >
      <Container maxW="960px" pt="4">
        <Heading size="sm" fontWeight="700">
          Don't be shy, say hi.
        </Heading>
        <Text>
          I am always open to discuss your next project, opportunities, new
          mentees, or other business engagements.
        </Text>
      </Container>
    </Box>
  );
}
