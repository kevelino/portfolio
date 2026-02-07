import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] space-y-8 text-center px-6">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl animate-pulse text-primary">
          404
        </h1>
        <div className="inline-block px-3 py-1 text-xs font-mono uppercase tracking-widest border border-primary/30 bg-primary/5 text-primary">
          System Error: Resource_Not_Found
        </div>
      </div>

      <div className="max-w-md space-y-4 font-mono text-sm text-muted-foreground tech-border p-6 bg-background/50 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 animate-scan-line" />
        <p className="text-left leading-relaxed">
          &gt; ERROR_CODE: 0xDEADBEEF<br />
          &gt; REQUEST_URI: INVALID<br />
          &gt; TRACEBACK: The requested segment could not be localized within the current technical schematic.
        </p>
        <p className="text-left opacity-70 italic">
          Please re-calibrate your navigation parameters or return to the main console.
        </p>
      </div>

      <Button asChild className="tech-border px-8 font-mono group">
        <Link href="/">
          <span className="mr-2">&lt;</span>
          RETURN_TO_HOME
          <span className="ml-2 group-hover:translate-x-1 transition-transform">_</span>
        </Link>
      </Button>

      {/* Decorative Blueprint Markers */}
      <div className="absolute top-1/4 left-10 opacity-10 pointer-events-none hidden md:block">
        <div className="text-[10px] font-mono whitespace-pre">
          [REF-ID: 404-ERR]
          STATUS: NULL_PTR
          LOC: GLOBAL_SCOPE
        </div>
      </div>
    </main>
  );
}
