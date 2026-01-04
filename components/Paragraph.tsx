'use client';

interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
}

export default function Paragraph({ children, className = '' }: ParagraphProps) {
    return (
        <>
            <p className={`paragraph ${className}`}>
                {children}
            </p>

            <style jsx>{`
        .paragraph {
          font-size: 1.0625rem;
          line-height: 1.7;
          color: var(--foreground);
          margin-bottom: 1.25rem;
          opacity: 0.95;
        }

        .paragraph:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .paragraph {
            font-size: 1rem;
            line-height: 1.65;
          }
        }
      `}</style>
        </>
    );
}
