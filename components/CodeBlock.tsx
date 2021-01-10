import { Box } from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, '');
  return (
    <Box padding="4">
      <SyntaxHighlighter
        showLineNumbers={true}
        wrapLongLines={true}
        language={language}
        style={vscDarkPlus}
      >
        {children}
      </SyntaxHighlighter>
    </Box>
  );
};
