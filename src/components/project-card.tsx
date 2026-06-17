import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  description: string;
  dates: string;
  tags: readonly string[];
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

function refCode(title: string) {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = ((hash << 5) - hash) + title.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash % 1000);
}

export function ProjectCard({
  title,
  description,
  dates,
  tags,
  links,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border-none bg-transparent h-full relative group"
      }
    >
      <div className="absolute top-0 right-0 p-2 text-[8px] font-mono opacity-20 uppercase tracking-tighter" aria-hidden="true">
        Ref: {title.toUpperCase().slice(0, 3)}-{refCode(title)}
      </div>
      <CardHeader className="px-2 pt-4">
        <div className="space-y-1">
          <div className="tech-label text-primary font-bold mb-1" aria-hidden="true">Project.Data</div>
          <CardTitle className="mt-1 text-base font-mono uppercase tracking-tight">{title}</CardTitle>
          <time className="font-mono text-[10px] opacity-60 underline decoration-primary/30 underline-offset-4">{dates}</time>
          <Markdown className="prose max-w-full text-pretty font-mono text-[11px] text-muted-foreground dark:prose-invert mt-2 leading-relaxed">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2 pb-2">
        <div className="tech-label text-primary/50 text-[8px] mb-1" aria-hidden="true">Stack.Initialization</div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className="px-1.5 py-0 text-[9px] font-mono border-primary/20 bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
                variant="outline"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-4">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.map((link, idx) => (
              <Link href={link.href} key={idx} target="_blank">
                <Badge className="flex gap-2 px-2 py-1 text-[9px] font-mono bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
      <div className="absolute bottom-0 right-0 p-1 opacity-10 pointer-events-none" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M0 20L20 0M10 20L20 10M0 10L10 0" />
        </svg>
      </div>
    </Card>
  );
}
