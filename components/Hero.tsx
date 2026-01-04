'use client';

import Image from 'next/image';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="social-icons">
                <a
                    href="https://www.linkedin.com/in/muhammad-daniyal-aa26b22ba/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    data-tooltip="LinkedIn"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                    </svg>
                </a>
                <a
                    href="https://github.com/MohammedDaniyalRaza"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    data-tooltip="GitHub"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                </a>
                <a
                    href="https://x.com/daniyalrazaqa"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    data-tooltip="X"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>
            </div>

            <div className="hero-content">
                <div className="hero-logo">
                    <Image
                        src="/docker-logo.png"
                        alt="Docker Logo"
                        width={120}
                        height={120}
                        priority
                    />
                </div>
                <div className="hero-text">
                    <h1>Docker</h1>
                    <p className="hero-description">
                        Empowering developers to build, share, and run applications anywhere with containerization technology
                    </p>
                </div>
            </div>

            <style jsx>{`
        .hero-section {
          width: 100%;
          background: linear-gradient(
            180deg,
            var(--gradient-start) 0%,
            var(--gradient-end) 100%
          );
          padding: 5rem 2rem 4rem;
          margin-bottom: 4rem;
          position: relative;
        }

        .social-icons {
          position: absolute;
          top: 2rem;
          left: 2rem;
          display: flex;
          gap: 1.5rem;
          z-index: 10;
        }

        .social-icons a {
          color: var(--foreground);
          opacity: 0.7;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .social-icons a:hover {
          opacity: 1;
          transform: translateY(-2px);
        }

        /* Tooltip Styles */
        .social-icons a::after {
          content: attr(data-tooltip);
          position: absolute;
          bottom: -30px;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background-color: var(--card-bg);
          color: var(--foreground);
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid var(--border);
          pointer-events: none;
        }

        .social-icons a:hover::after {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .hero-logo {
          flex-shrink: 0;
        }

        .hero-logo :global(img) {
          border-radius: 50%;
          border: 4px solid rgba(255, 255, 255, 0.3);
          box-shadow: var(--shadow-lg);
          background: white;
          padding: 0.5rem;
        }

        .hero-text {
          flex: 1;
        }

        .hero-text h1 {
          color: white;
          margin-bottom: 1rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .hero-description {
          color: var(--foreground);
          font-size: 1.125rem;
          max-width: 600px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 3rem 1.5rem 2.5rem;
            margin-bottom: 3rem;
          }

          .social-icons {
             top: 1.5rem;
             left: 1.5rem; 
             right: auto;
             gap: 1rem;
          }
          
          .social-icons svg {
            width: 20px;
            height: 20px;
          }

          .hero-content {
            flex-direction: column;
            text-align: center;
            gap: 2rem;
          }

          .hero-logo :global(img) {
            width: 100px;
            height: 100px;
          }

          .hero-text h1 {
            font-size: 2.5rem;
          }

          .hero-description {
            font-size: 1rem;
            margin: 0 auto;
          }
        }
      `}</style>
        </section>
    );
}
