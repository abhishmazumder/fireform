import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import PropTypes from 'prop-types';

const CodeSnippet = ({ code, language }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    Prism.highlightElement(codeRef.current);
  }, [code]);

  return (
    <pre>
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

CodeSnippet.propTypes = {
    code: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired
}

export default CodeSnippet;
