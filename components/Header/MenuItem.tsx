import { Link, Text } from '@chakra-ui/react';
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
        mb={{ base: isLast ? 0 : 8, md: 0 }}
        mr={{ base: 0, md: isLast ? 0 : 8 }}
        display="block"
        {...rest}
      >
        <Link to={to}>{children}</Link>
      </Text>
    </NextLink>
  );
};
