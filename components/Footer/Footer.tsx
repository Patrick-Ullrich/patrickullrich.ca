import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Img,
  Input,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { GrInstagram, GrLinkedinOption, GrTwitter } from 'react-icons/gr';

export default function Footer(props) {
  const logo = useColorModeValue(
    '/assets/images/itspatricku-symbol-full colour navy.svg',
    '/assets/images/itspatricku-symbol-full colour cream.svg',
  );

  return (
    <Box mb="8">
      <Container maxW="1280px" pt="12" minHeight="100px">
        <Stack
          spacing="4"
          flexDirection={['column', 'row']}
          justifyContent="space-between"
          alignItems={['center', 'flex-end']}
        >
          <Flex alignItems="flex-end">
            <FormControl maxW="270px" id="email">
              <FormLabel>Subscribe to my Newsletter</FormLabel>
              <Input maxW="250px" type="email" placeholder="Email" />
            </FormControl>
            <Button
              mt={4}
              ml={4}
              bgColor={useColorModeValue('red.300', 'teal.300')}
              colorScheme={useColorModeValue('red', 'teal')}
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Flex>
          <Stack pb={2} justifyContent={'start'} direction="row" spacing="8">
            <Link isExternal href="https://www.instagram.com/itspatricku/">
              <Icon
                color={useColorModeValue('brandBlack', 'brandWhite')}
                fontSize="1.5rem"
                as={GrInstagram}
              />
            </Link>

            <Link isExternal href="https://twitter.com/ItsPatrickU">
              <Icon
                color={useColorModeValue('brandBlack', 'brandWhite')}
                fontSize="1.5rem"
                as={GrTwitter}
              />
            </Link>

            <Link isExternal href="https://www.linkedin.com/in/itspatricku/">
              <Icon
                color={useColorModeValue('brandBlack', 'brandWhite')}
                fontSize="1.5rem"
                as={GrLinkedinOption}
              />
            </Link>
          </Stack>
        </Stack>
        <Divider mt={12} mb={8} />
        <HStack justifyContent="center" spacing={4}>
          <Img src={logo} htmlWidth="75" />
          <Text>© {new Date().getFullYear()} Patrick Ullrich</Text>
        </HStack>
      </Container>
    </Box>
  );
}
