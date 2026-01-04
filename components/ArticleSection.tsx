'use client';

interface ArticleSectionProps {
    children: React.ReactNode;
    id?: string;
}

export default function ArticleSection({ children, id }: ArticleSectionProps) {
    return (
        <section className="article-section" id={id}>
            <div className="article-container">
                {children}
            </div>

            <style jsx>{`
        .article-section {
          width: 100%;
          padding: 2rem 1.5rem;
        }

        .article-container {
          max-width: 720px;
          margin: 0 auto;
          animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .article-section {
            padding: 1.5rem 1rem;
          }
        }
      `}</style>
        </section>
    );
}
