import React, { useEffect } from "react";
import hljs from "highlight.js"; // import Highlight.js

const CodeBlock = ({ language, code }) => {
    useEffect(() => {
      // Highlight the code when component mounts
      hljs.highlightAll();
    }, []);
  
    return (
      <div className="flex flex-col">
        <div className="flex py-2 text-black/75 dark:text-white/50  dark:bg-black/50 bg-white/50 border-1 backdrop-blur-xl border-black/50 dark:border-white/50 rounded-t-xl">
          <span className="ms-3 text-sm">{language}</span>
        </div>
        <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    );
  };

  export default CodeBlock;