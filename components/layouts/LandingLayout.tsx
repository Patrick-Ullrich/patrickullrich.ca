import { Container, Flex } from '@chakra-ui/react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function LandingLayout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
