import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippet = ({ code, language = "html", otherProps }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneLight}
      showLineNumbers
      {...otherProps}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
