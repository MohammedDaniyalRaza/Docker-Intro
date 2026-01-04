'use client';

import Image from 'next/image';

export default function Hero() {
    return (
        <section className="hero-section">
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
          box-shadow: var(--shadow-lg);
          position: relative;
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
          color: rgba(255, 255, 255, 0.95);
          font-size: 1.125rem;
          max-width: 600px;
          line-height: 1.6;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 3rem 1.5rem 2.5rem;
            margin-bottom: 3rem;
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
