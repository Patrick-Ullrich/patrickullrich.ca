import { Link, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

interface IProps {
  children: any;
  isLast?: boolean;
  to?: string;
}

export const MenuItem = ({
  children,
  isLast = false,
  to = '/',
  ...rest
}: IProps) => {
  return (
    <NextLink href={to} passHref>
      <Text
        mb={{ base: isLast ? 4 : 8, md: 0 }}
        mr={{ base: 0, md: isLast ? 2 : 8 }}
        display="block"
        {...rest}
      >
        <Link color={useColorModeValue('red.300', 'teal.300')} href={to}>
          {children}
        </Link>
      </Text>
    </NextLink>
  );
};
