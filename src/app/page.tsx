import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { Terminal } from "@/components/terminal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10 relative overflow-hidden">
      <div className="scanning-line" aria-hidden="true" />
      <section id="hero" className="pt-8">
        <div className="mx-auto w-full max-w-2xl space-y-8 tech-border p-6 bg-background/50 backdrop-blur-sm">
          <div className="flex flex-col-reverse sm:flex-row gap-4 justify-between items-start">
            <div className="flex-col flex flex-1 space-y-1.5">
              <div className="tech-label">System.Initialize(&quot;Kevelino&quot;)</div>
              <h3 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-mono">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  yOffset={8}
                  text={DATA.name}
                />
              </h3>
              <BlurFadeText
                className="max-w-[600px] md:text-xl font-mono opacity-80"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <Avatar className="size-28 border-2 border-primary bg-background flex items-center justify-center text-4xl">
                  {DATA.avatarUrl.startsWith("/") ? (
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  ) : (
                    <span role="img" aria-label="avatar">{DATA.avatarUrl}</span>
                  )}
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      {/* Removed Work and Education as requested */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="terminal">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <h2 className="text-xl font-bold mb-4">Terminal</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <Terminal />
        </BlurFade>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  My latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-[1000px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <div className="h-full tech-border bg-background/50 hover:bg-background/80 transition-colors duration-300">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    links={project.links}
                  />
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let&apos;s work together! I am passionate about creating innovative
                solutions and am always looking for ways to collaborate with others.
                Follow me on{" "}
                <Link
                    href={DATA.contact.social.X.url}
                    target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  Twitter
                </Link>{" "}
                and{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                    target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </Link>{" "}
                to stay connected.{" "}

              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
