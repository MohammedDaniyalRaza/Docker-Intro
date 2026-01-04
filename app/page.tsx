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
          <Heading level={2}>Learning Docker Made Simple</Heading>
          <Paragraph>
            Docker is a Containerization tool that makes developing and running apps much easier, especially when working in teams. This guide explains Docker in simple English so that after reading it, you get a clear idea of what it is and why it is so useful.
          </Paragraph>
          <Paragraph>
            We will cover the basic concepts, the difference between images and containers, and how Docker solves real problems in projects.
          </Paragraph>
        </ArticleSection>

        <ArticleSection id="what-is-docker">
          <Heading level={2}>What is Docker?</Heading>
          <Paragraph>
            Docker is a Containerization tool that lets you package your application along with everything it needs to run, like code, libraries, settings, and specific software versions, into something called a "container". This container works exactly the same on any computer, whether it is Linux, Mac, or Windows.
          </Paragraph>
          <Paragraph>
            Unlike virtual machines (which need a full separate operating system and are heavy and slow), Docker containers are lightweight. They share the host computer's main operating system part (called the kernel) and only include what your app really needs. This means containers start quickly and use much less memory.
          </Paragraph>
        </ArticleSection>

        <ArticleSection id="image-vs-container">
          <Heading level={2}>Image vs Container</Heading>
          <Paragraph>
            A Docker image is like a blueprint or a recipe. It is a fixed template that contains all the instructions, files, and software (like a specific Node.js version or database) needed to set up the environment. Images do not change and are read-only.
          </Paragraph>
          <Paragraph>
            A container is what you get when you run an image. It is like the actual house built from the blueprint or the meal cooked from the recipe. The container runs your app in an isolated space, and you can start, stop, or make many containers from one image.
          </Paragraph>
          <Paragraph>
            Simple example: The image is the recipe book. The container is the food you make and eat.
          </Paragraph>
        </ArticleSection>

        <ArticleSection id="why-use-docker">
          <Heading level={2}>Why Use Docker? (The Problem It Solves)</Heading>
          <Paragraph>
            In software development, a common headache is when code works perfectly on one person's computer but breaks on someone else's. This happens because of differences in operating systems, software versions, or installed tools.
          </Paragraph>
          <Paragraph>
            Docker solves this by creating an identical environment for everyone. You build one image with exact versions (like Node 18 or a specific database), and the whole team uses the same container. No more wasting time fixing "it works on my machine" issues, no manual setups, and apps run smoothly everywhere, from development to production.
          </Paragraph>
          <Paragraph>
            It also makes apps faster to start, easier to scale, and perfect for team collaboration.
          </Paragraph>
        </ArticleSection>

        <ArticleSection id="real-world-example">
          <Heading level={2}>A Real-World Example</Heading>
          <Paragraph>
            Suppose you are building a big web app, like a hosting service similar to Hostinger. On your Linux machine, you use Node.js version 18, PostgreSQL version 12, and a certain npm version. Everything works great.
          </Paragraph>
          <Paragraph>
            Now new developers join your team. One uses Mac with the latest Node, another uses Windows. If you just share the code through GitHub, they will probably face errors because versions do not match or some commands work differently on their OS.
          </Paragraph>
          <Paragraph>
            Here is where Docker shines: You write a simple file (Dockerfile) that lists everything needed. You build an image from it. You share the image (for example, upload to Docker Hub).
          </Paragraph>
          <Paragraph>
            The new developers just install Docker, download your image, and run one command to start the container. Suddenly, their computer has the exact same setup as yours inside the container. The app runs perfectly, no errors, no need to install or configure anything manually.
          </Paragraph>
          <Paragraph>
            This saves hours of setup time, reduces bugs, and lets the team focus on coding instead of fixing environment problems.
          </Paragraph>
        </ArticleSection>

        <ArticleSection id="getting-started">
          <Heading level={2}>Next Steps</Heading>
          <Paragraph>
            Now that the basics are clear, download and install Docker on your computer. Try creating a simple Dockerfile for a small Node.js app, build an image, and run a container.
          </Paragraph>
          <Paragraph>
            Once you start using Docker, you will see how much easier development becomes, especially in teams!
          </Paragraph>
        </ArticleSection>

        <Footer />
      </main>
    </ClientLayout>
  );
}