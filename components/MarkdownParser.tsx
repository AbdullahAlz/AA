'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';

function doInline(text: string): React.ReactNode {
  if (typeof text !== 'string') return text;
  text = text.replace(/~~([^~]+)~~/g, '<del>$1</del>');
  text = text.replace(/==([^=]+)==/g, '<mark class="bg-yellow-300 dark:bg-yellow-600 px-1 rounded">$1</mark>');
  text = text.replace(/~([^~]+)~/g, '<sub>$1</sub>');
  text = text.replace(/\^([A-Za-z0-9]+)/g, '<sup>$1</sup>');
  text = text.replace(/\$([^$]+)\$/g, '<code class="bg-code px-2 py-1 rounded text-sm font-mono text-text-primary">$1</code>');
  if (text.includes('<')) {
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  }
  return text;
}

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown components={{
          h1: ({ children }) => <h1 className="text-3xl font-bold mb-4 text-text-primary">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-semibold mb-3 mt-6 text-text-primary">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl font-medium mb-2 mt-4 text-text-primary">{children}</h3>,
          h4: ({ children }) => <h4 className="text-lg font-medium mb-2 mt-3 text-text-primary">{children}</h4>,
          p: ({ children }) => {
            const procChldrn = React.Children.map(children, child => typeof child === 'string' ? doInline(child) : child);
            return <p className="mb-2 text-text-secondary leading-relaxed">{procChldrn}</p>;
          },
          code: ({ children }: any) => <code className="bg-code px-2 py-1 rounded text-sm font-mono text-text-primary">{children}</code>,
          pre: ({ children }) => <pre className="bg-code p-4 rounded-lg overflow-x-auto my-6 border border-border">{children}</pre>,
          ul: ({ children }) => <ul className="mb-4 list-disc list-inside space-y-1">{children}</ul>,
          ol: ({ children }) => <ol className="mb-4 list-decimal list-inside space-y-1">{children}</ol>,
          li: ({ children }) => <li className="text-text-secondary">{children}</li>,
          blockquote: ({ children }) => <blockquote className="border-l-4 border-accent pl-4 my-6 italic text-text-secondary bg-secondary p-4 rounded-r-lg">{children}</blockquote>,
          a: ({ children, href }) => <a href={href} className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>,
          strong: ({ children }) => <strong className="font-semibold text-text-primary">{children}</strong>,
          em: ({ children }) => <em className="italic text-text-secondary">{children}</em>,
          hr: () => <hr className="my-8 border-border" />,
        }}>{content}</ReactMarkdown>
    </div>
  );
}