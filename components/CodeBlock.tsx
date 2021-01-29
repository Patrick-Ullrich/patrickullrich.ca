import { Box } from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import styled from '@emotion/styled';

export const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, '');
  return (
    <Wrapper padding="4" mx={[0, '-20px', '-80px']}>
      <SyntaxHighlighter
        showLineNumbers={true}
        wrapLongLines={true}
        language={language}
        style={vscDarkPlus}
      >
        {children}
      </SyntaxHighlighter>
    </Wrapper>
  );
};

const Wrapper = styled(Box)`
  > pre {
    border-radius: 8px;
  }
`;
