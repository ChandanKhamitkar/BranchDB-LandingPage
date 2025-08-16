'use client';

import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";

interface CodeSnippetProps {
  code: string;
  language?: string;
}

const SyntaxHighlighter: React.FC<CodeSnippetProps> = ({ code, language = "javascript" }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [code]);

  return (
    <div className="w-full max-w-full overflow-hidden">
      <pre className="rounded-lg overflow-x-auto bg-[#1e1e1e] shadow-lg p-4 text-sm max-w-full min-w-0">
        <code className={`language-${language} hljs break-words whitespace-pre-wrap min-w-0 block`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default SyntaxHighlighter;