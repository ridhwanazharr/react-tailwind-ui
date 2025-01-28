import React, { useEffect } from "react";
import hljs from "highlight.js"; // import Highlight.js

const CodeBlock = ({ language, code }) => {
    useEffect(() => {
      // Highlight the code when component mounts
      hljs.highlightAll();
    }, []);
  
    return (
      <div className="text-xs font-bold border-1 border-black/50 dark:border-white/50 rounded-xl">
        <pre>
          <code className={`language-${language}`}>{code}</code>
        </pre>
      </div>
    );
  };

  export default CodeBlock;