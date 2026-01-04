'use client';

interface HeadingProps {
    children: React.ReactNode;
    level?: 2 | 3;
    className?: string;
}

export default function Heading({ children, level = 2, className = '' }: HeadingProps) {
    const Tag = `h${level}` as 'h2' | 'h3';

    return (
        <>
            <Tag className={`heading heading-${level} ${className}`}>
                {children}
            </Tag>

            <style jsx>{`
        .heading {
          color: var(--foreground);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .heading-2 {
          font-size: 2.25rem;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--border);
        }

        .heading-3 {
          font-size: 1.5rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: var(--docker-blue);
        }

        @media (max-width: 768px) {
          .heading-2 {
            font-size: 1.875rem;
            margin-top: 2.5rem;
          }

          .heading-3 {
            font-size: 1.25rem;
            margin-top: 1.5rem;
          }
        }
      `}</style>
        </>
    );
}
