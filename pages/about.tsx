import { Container, Heading, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import MainLayout from '../components/layouts/MainLayout';

export default function About() {
  return (
    <MainLayout>
      <Container maxW="1280px" mb={[8, 8, 16]}>
        <Heading>Servus and Hello, I'm Patrick U.</Heading>
        <Text>
          I am a full-stack software developer, amateur blogger, and infrequent
          speaker. I currently work at Outpost Health.
        </Text>
      </Container>
    </MainLayout>
  );
}
