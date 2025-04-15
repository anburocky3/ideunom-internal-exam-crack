"use client";

import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import "highlight.js/lib/languages/javascript";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({
  code,
  language = "javascript",
}: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Force re-highlighting when code changes
    if (codeRef.current) {
      // Reset the highlighting state
      delete codeRef.current.dataset.highlighted;

      // First, remove any existing highlighting classes
      codeRef.current.className = `language-${language}`;

      // Clear existing content
      codeRef.current.innerHTML = "";

      // Add the code as text content (this automatically escapes HTML)
      codeRef.current.textContent = code;

      // Then apply highlighting
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <div className="code-block relative rounded-lg overflow-hidden bg-[#282c34]">
      <pre className="p-4 overflow-x-auto">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
