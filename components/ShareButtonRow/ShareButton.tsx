import { Button, Icon, Link } from '@chakra-ui/react';
import { ElementType } from 'react';

interface IProps {
  href: string;
  icon: ElementType;
  children: any;
}

export const ShareButton = ({ href, icon, children }: IProps) => (
  <Button
    size="sm"
    colorScheme="teal"
    leftIcon={<Icon as={icon} h={5} w={5} />}
    as={Link}
    rel="nofollow noopener noreferrer"
    isExternal
    textDecoration="none"
    _hover={{ textDecoration: 'none' }}
    href={href}
  >
    {children}
  </Button>
);
