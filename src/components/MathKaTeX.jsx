import React, { useMemo } from 'react';
import katex from 'katex';

export default function MathKaTeX({ math, block = false, className = '' }) {
  const html = useMemo(() => {
    if (!math) return '';
    try {
      return katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
      });
    } catch (err) {
      return math;
    }
  }, [math, block]);

  return (
    <span
      className={`${block ? 'block my-3 text-center overflow-x-auto py-1' : 'inline-block px-1'} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
