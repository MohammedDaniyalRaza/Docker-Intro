import Hero from "@/components/Hero";
import ArticleSection from "@/components/ArticleSection";
import Heading from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Footer from "@/components/Footer";
import ClientLayout from "@/components/ClientLayout";

export default function Home() {
  return (
    <ClientLayout>
      <main>
        <Hero />

        <ArticleSection id="learning-docker">
          <Heading level={2}>Learning Docker</Heading>
          <Paragraph>
            Docker has revolutionized the way we develop, ship, and run applications. Whether you're a seasoned developer or just starting your journey in software development, understanding Docker is essential in today's cloud-native world.
          </Paragraph>
          <Paragraph>
            This comprehensive guide will walk you through the fundamental concepts of Docker, explaining not just the "how" but also the "why" behind containerization. By the end of this article, you'll have a solid understanding of Docker's role in modern software development and why it has become an indispensable tool for developers worldwide.
          </Paragraph>
        </ArticleSection>

        <ArticleSection id="what-is-docker">
          <Heading level={2}>What is Docker?</Heading>
          <Paragraph>
            Docker is an open-source platform that enables developers to automate the deployment of applications inside lightweight, portable containers. Think of containers as standardized units of software that package up code and all its dependencies so the application runs quickly and reliably from one computing environment to another.
          </Paragraph>

          <Heading level={3}>The Container Concept</Heading>
          <Paragraph>
            A Docker container is a standalone, executable package that includes everything needed to run a piece of software: the code, runtime, system tools, libraries, and settings. Unlike virtual machines, containers share the host system's kernel but run in isolated user spaces, making them incredibly lightweight and efficient.
          </Paragraph>

          <Heading level={3}>Key Components</Heading>
          <Paragraph>
            Docker's architecture consists of several key components working together seamlessly. The Docker Engine is the core runtime that builds and runs containers. Docker Images serve as the blueprint for containers—they're read-only templates containing the application and its dependencies. The Docker Hub acts as a registry where developers can share and distribute container images globally.
          </Paragraph>
          <Paragraph>
            When you run a Docker image, it creates a container instance. Multiple containers can run simultaneously on the same host, each isolated from the others, yet sharing the same operating system kernel. This architecture makes Docker both powerful and resource-efficient.
          </Paragraph>
        </ArticleSection>

        <ArticleSection id="why-docker-exists">
          <Heading level={2}>Why Docker Exists?</Heading>
          <Paragraph>
            Before Docker, developers faced a persistent challenge: "It works on my machine." This phrase became infamous in software development because applications that ran perfectly on a developer's local environment would often fail in production due to differences in configurations, dependencies, or system libraries.
          </Paragraph>

          <Heading level={3}>The Problem Docker Solves</Heading>
          <Paragraph>
            Traditional deployment methods required careful coordination between development and operations teams. Developers would write code in one environment, QA would test in another, and operations would deploy to yet another environment. Each environment had its own unique configuration, leading to inconsistencies and deployment failures.
          </Paragraph>
          <Paragraph>
            Virtual machines offered a partial solution by providing environment isolation, but they came with significant overhead. Each VM required its own operating system, consuming substantial memory and storage. Spinning up VMs was slow, and managing multiple VMs became complex and resource-intensive.
          </Paragraph>

          <Heading level={3}>Docker's Revolutionary Approach</Heading>
          <Paragraph>
            Docker addresses these challenges through containerization. By packaging applications with all their dependencies into containers, Docker ensures consistency across different environments. The same container that runs on a developer's laptop will run identically in testing, staging, and production environments.
          </Paragraph>
          <Paragraph>
            Containers start in seconds rather than minutes, use a fraction of the memory compared to VMs, and can be easily scaled up or down based on demand. This efficiency has made Docker the foundation of modern DevOps practices and cloud-native application development.
          </Paragraph>
        </ArticleSection>

        <ArticleSection id="real-world-examples">
          <Heading level={2}>Real-World Examples</Heading>
          <Paragraph>
            Understanding Docker's practical applications helps illustrate its transformative impact on software development and deployment. Let's explore how Docker is used in real-world scenarios across different industries and use cases.
          </Paragraph>

          <Heading level={3}>Microservices Architecture</Heading>
          <Paragraph>
            Modern applications are often built as microservices—small, independent services that work together. Docker excels in this architecture. Each microservice runs in its own container with its specific dependencies and runtime environment. For example, an e-commerce platform might have separate containers for user authentication, product catalog, shopping cart, payment processing, and order management. Each service can be developed, deployed, and scaled independently.
          </Paragraph>

          <Heading level={3}>Continuous Integration and Deployment</Heading>
          <Paragraph>
            Development teams use Docker to create consistent CI/CD pipelines. When a developer commits code, automated systems build a Docker image, run tests inside containers, and deploy the same image to production. This ensures that what gets tested is exactly what gets deployed, eliminating environment-related bugs and reducing deployment risks.
          </Paragraph>

          <Heading level={3}>Development Environment Standardization</Heading>
          <Paragraph>
            Teams use Docker to create standardized development environments. New developers can start contributing immediately by running a single command that sets up their entire development environment—databases, caching systems, message queues, and application servers—all configured and ready to use. This eliminates the notorious "setup day" where new team members spend hours configuring their machines.
          </Paragraph>

          <Heading level={3}>Cloud Migration and Hybrid Deployments</Heading>
          <Paragraph>
            Organizations use Docker to facilitate cloud migration strategies. Applications containerized with Docker can run on any cloud provider—AWS, Google Cloud, Azure, or on-premises infrastructure. This portability gives businesses flexibility in their infrastructure choices and prevents vendor lock-in. Companies can start on-premises and gradually migrate to the cloud, or run hybrid deployments across multiple environments seamlessly.
          </Paragraph>

          <Heading level={3}>Legacy Application Modernization</Heading>
          <Paragraph>
            Docker helps organizations modernize legacy applications without complete rewrites. By containerizing existing applications, teams can deploy them alongside modern microservices, gradually refactoring components while maintaining system stability. This approach reduces risk and allows for incremental modernization rather than risky "big bang" migrations.
          </Paragraph>
        </ArticleSection>

        <Footer />
      </main>
    </ClientLayout>
  );
}
