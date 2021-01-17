import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Collapse,
  Container,
  Fade,
  Flex,
  Img,
  Link,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useState } from 'react';
import { MenuItem } from './MenuItem';

export default function Header(props) {
  const [isCollapsableMenuActive] = useMediaQuery('(max-width: 48em)');
  const [show, setShow] = useState(false);

  const toggleMenu = () => setShow(!show);

  const { colorMode, toggleColorMode } = useColorMode();
  const logo = useColorModeValue(
    '/assets/images/itspatricku-logo-full colour navy.svg',
    '/assets/images/itspatricku-logo-full colour cream.svg',
  );

  return (
    <Box
      boxShadow="base"
      borderBottomRightRadius="md"
      borderBottomLeftRadius="md"
      mb="8"
    >
      <Container maxW="960px">
        <Flex
          justifyContent="space-between"
          alignItems="center'"
          wrap="wrap"
          as="nav"
        >
          <NextLink href="/" passHref>
            <Link>
              <Img src={logo} htmlWidth="250" />
            </Link>
          </NextLink>

          <Box
            justifyContent="center"
            alignItems="center"
            display={{ base: 'flex', md: 'none' }}
            onClick={toggleMenu}
          >
            {show ? (
              <Fade in={true}>
                <CloseIcon w="6" h="6" />
              </Fade>
            ) : (
              <Fade in={true}>
                <HamburgerIcon w="8" h="8" />
              </Fade>
            )}
          </Box>

          <Box
            display={{ base: 'block', md: 'flex' }}
            flexBasis={{ base: '100%', md: 'auto' }}
          >
            <Collapse in={!isCollapsableMenuActive || show} animateOpacity>
              <Flex
                height="100%"
                alignItems="center"
                justify={['center', 'center', 'flex-end', 'flex-end']}
                direction={['column', 'column', 'row', 'row']}
              >
                <MenuItem to="/blogs">Blog</MenuItem>
                <MenuItem to="/about">About</MenuItem>
                <MenuItem isLast to="/shop">
                  Shop
                </MenuItem>
                <Button
                  background="none"
                  _active={{ background: 'none' }}
                  _hover={{ background: 'none' }}
                  onClick={toggleColorMode}
                >
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Flex>
            </Collapse>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
