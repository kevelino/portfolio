"use client";

import { DATA } from "@/data/resume";
import { useEffect, useRef, useState } from "react";

type Line = { text: string; isCommand?: boolean };

const BLOG_POSTS = [
  "SpaceX Acquires Cursor: The $60B Deal That Redefined AI Software",
  "The Evolution of Agentic Coding",
  "The State of AI: Early 2026 Overview",
  "Agentic Workflows for Small Teams",
  "Cursor vs VSCode in 2026",
  "Codex Legacy",
  "The Rise of Vibe Coding",
  "Rust in AI Infrastructure",
  "Personalized Web with AI-Driven UI",
  "From Prompt Engineering to Orchestration",
  "Deploying Django Project to VPS",
  "Top Programming Languages of 2025",
];

const BANNER = [
  "╔═══════════════════════════════════════════╗",
  "║        PORTFOLIO TERMINAL  v1.0           ║",
  "║                                           ║",
  `║  ${DATA.name.toUpperCase().padEnd(39)}║`,
  `║  ${DATA.description.padEnd(39)}║`,
  "║                                           ║",
  "║  Type 'help' to see available commands    ║",
  "╚═══════════════════════════════════════════╝",
];

const HELP_TEXT = [
  "Available commands:",
  "",
  "  about     - About me",
  "  skills    - My technical skills",
  "  projects  - My projects",
  "  blog      - Latest blog posts",
  "  contact   - Get in touch",
  "  whoami    - Who I am",
  "  date      - Current date/time",
  "  clear     - Clear terminal",
  "  banner    - Show welcome banner",
  "  neofetch  - System info (me)",
  "  gui       - \"Wait, this isn't a GUI?\"",
  "  sudo      - Nice try",
  "  help      - Show this message",
];

type CommandHandler = (args: string[]) => (string | Line)[];

export function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [ready, setReady] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initLines = BANNER.map((l) => ({ text: l }));
    const prompt = { text: "" };
    setLines([...initLines, prompt]);
    setReady(true);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const commands: Record<string, CommandHandler> = {
    help: () => HELP_TEXT,
    about: () => [`${DATA.summary}`, "", `Location: ${DATA.location}`],
    skills: () => {
      const cols = 3;
      const items = DATA.skills;
      const rows: string[] = [];
      for (let i = 0; i < items.length; i += cols) {
        rows.push(items.slice(i, i + cols).map((s) => `  • ${s.padEnd(14)}`).join(""));
      }
      return rows;
    },
    projects: () => {
      const out: string[] = [];
      DATA.projects.forEach((p) => {
        out.push(`  ${p.title} (${p.dates})`);
        out.push(`    ${p.description}`);
        p.links.forEach((l) => out.push(`    ${l.href}`));
        out.push("");
      });
      return out;
    },
    blog: () => {
      return ["  Recent posts:", "", ...BLOG_POSTS.map((t, i) => `  ${i + 1}. ${t}`), "", "  Visit /blog for the full list."];
    },
    contact: () => {
      const c = DATA.contact;
      return [
        `  Email:   ${c.email}`,
        `  Tel:     ${c.tel}`,
        `  GitHub:  ${c.social.GitHub.url}`,
        `  X:       ${c.social.X.url}`,
        `  YouTube: ${c.social.Youtube.url}`,
      ];
    },
    whoami: () => [
      `  ${DATA.name}`,
      `  > ${DATA.description}`,
      `  > Location: ${DATA.location}`,
    ],
    date: () => [`  ${new Date().toLocaleString()}`],
    clear: () => {
      setLines([]);
      return [] as (string | Line)[];
    },
    banner: () => BANNER,
    neofetch: () => [
      `  ${DATA.name}@portfolio`,
      `  ---------------------------`,
      `  OS:        Human v1.0`,
      `  Shell:     Coffee + Code`,
      `  Location:  ${DATA.location}`,
      `  Languages: ${DATA.skills.slice(0, 3).join(", ")}...`,
      `  Projects:  ${DATA.projects.length} active`,
      `  Status:    Building cool stuff`,
    ],
    gui: () => [
      `  "This IS the GUI. The website is the terminal."`,
      `  — Some philosopher, probably`,
    ],
    sudo: () => [
      `  [sudo] password for ${DATA.name.toLowerCase()}:`,
      `  Sorry, try again.`,
      `  [sudo] 3 incorrect password attempts`,
      `  Permission denied. This user has no root access.`,
    ],
  };

  function processCommand(cmd: string) {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const parts = trimmed.split(/\s+/);
    const name = parts[0].toLowerCase();
    const args = parts.slice(1);

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const newLines: Line[] = [{ text: `$ ${trimmed}`, isCommand: true }];

    if (name in commands) {
      const result = commands[name](args);
      if (name === "clear") {
        setLines([]);
        return;
      }
      if (result.length > 0) {
        result.forEach((r) => {
          if (typeof r === "string") {
            newLines.push({ text: r });
          } else {
            newLines.push(r);
          }
        });
      }
    } else {
      newLines.push({ text: `  command not found: ${name}  (try 'help')` });
    }

    setLines((prev) => [...prev, ...newLines]);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const newIdx = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIdx);
      setInput(history[newIdx]);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIdx = historyIndex + 1;
      if (newIdx >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(newIdx);
        setInput(history[newIdx]);
      }
      return;
    }
  }

  return (
    <div
      className="w-full border border-primary/20 bg-[#0a0e1a] font-mono text-sm tech-border overflow-hidden cursor-text"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/20 bg-[#0a0e1a]">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-red-500/80" />
          <span className="size-2.5 rounded-full bg-yellow-500/80" />
          <span className="size-2.5 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] text-primary/40 uppercase tracking-wider ml-2">
          terminal — {DATA.name.toLowerCase()}@portfolio
        </span>
      </div>

      <div ref={containerRef} className="p-4 max-h-[400px] overflow-y-auto space-y-1">
        {lines.map((line, i) => (
          <div
            key={i}
            className={`whitespace-pre-wrap break-all leading-relaxed ${
              line.isCommand ? "text-green-400/80" : "text-primary/80"
            }`}
          >
            {line.text}
            {i === lines.length - 1 && !line.text && (
              <span className="inline-block w-2 h-4 bg-primary/60 animate-pulse ml-0.5 align-middle" />
            )}
          </div>
        ))}

        <div className="flex items-center gap-1">
          <span className="text-green-400/80 shrink-0">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none border-none text-primary/90 caret-primary/60 font-mono text-sm"
            spellCheck={false}
            autoComplete="off"
            autoFocus
          />
        </div>

        <div ref={bottomRef} />
      </div>
    </div>
  );
}
