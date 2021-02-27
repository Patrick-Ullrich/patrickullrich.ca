import { Wrap, WrapItem } from '@chakra-ui/react';
import { ShareButton } from './ShareButton';
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaRedditSquare,
  FaLinkedin,
  FaCommentDots,
} from 'react-icons/fa';

interface IProps {
  title: string;
  slug: string;
}

const BASE_URL = 'https://patrickullrich.ca/blogs/';

export const ShareButtonRow = ({ title, slug }: IProps) => {
  let url = `${BASE_URL}${slug}`;

  return (
    <Wrap spacing={2}>
      <WrapItem>
        <ShareButton
          icon={FaTwitterSquare}
          href={`https://twitter.com/intent/tweet?text=${title}&url=${url}`}
        >
          Twitter
        </ShareButton>
      </WrapItem>
      <WrapItem>
        <ShareButton
          icon={FaRedditSquare}
          href={`https://www.reddit.com/submit?url=${url}&title=${title}`}
        >
          Reddit
        </ShareButton>
      </WrapItem>
      <WrapItem>
        <ShareButton
          icon={FaLinkedin}
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
        >
          LinkedIn
        </ShareButton>
      </WrapItem>
      <WrapItem>
        <ShareButton
          icon={FaFacebookSquare}
          href={`https://www.facebook.com/sharer.php?u=${url}&t=${title}`}
        >
          Facebook
        </ShareButton>
      </WrapItem>
    </Wrap>
  );
};
