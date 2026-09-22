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

export function FormattedMathText({ text, className = '' }) {
  const html = useMemo(() => {
    if (!text) return '';
    try {
      return text
        .replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
          try {
            return `<div class="my-2 overflow-x-auto text-center py-1">${katex.renderToString(math.trim(), { displayMode: true, throwOnError: false })}</div>`;
          } catch {
            return `$$${math}$$`;
          }
        })
        .replace(/\$([^$]+?)\$/g, (_, math) => {
          try {
            return katex.renderToString(math.trim(), { displayMode: false, throwOnError: false });
          } catch {
            return `$${math}$`;
          }
        });
    } catch {
      return text;
    }
  }, [text]);

  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
