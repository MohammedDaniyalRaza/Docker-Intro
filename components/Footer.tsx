'use client';

import Paragraph from './Paragraph';

export default function Footer() {
    return (
        <footer className="article-footer">
            <div className="footer-content">
                <Paragraph>
                    Docker continues to evolve, shaping the future of application development and deployment. As you begin your Docker journey, remember that containerization is more than just a technology—it's a paradigm shift in how we think about building and running software.
                </Paragraph>
            </div>

            <style jsx>{`
        .article-footer {
          margin-top: 4rem;
          padding: 3rem 1.5rem;
          background: var(--card-bg);
          border-top: 1px solid var(--border);
        }

        .footer-content {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-content :global(p) {
          color: var(--muted);
          font-style: italic;
        }

        @media (max-width: 768px) {
          .article-footer {
            margin-top: 3rem;
            padding: 2rem 1rem;
          }
        }
      `}</style>
        </footer>
    );
}
