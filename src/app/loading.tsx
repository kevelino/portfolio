export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 text-center px-6">
      <div className="relative w-64 h-1 bg-primary/10 overflow-hidden tech-border rounded-none">
        <div className="absolute top-0 left-0 h-full bg-primary/50 animate-progress-technical" />
      </div>

      <div className="space-y-2">
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] animate-pulse text-primary">
          Data_Stream_Initialization
        </div>
        <div className="flex items-center justify-center space-x-1">
          <span className="size-1 bg-primary animate-bounce [animation-delay:-0.3s]"></span>
          <span className="size-1 bg-primary animate-bounce [animation-delay:-0.15s]"></span>
          <span className="size-1 bg-primary animate-bounce"></span>
        </div>
      </div>

      <div className="font-mono text-[9px] text-muted-foreground opacity-40 max-w-[200px] leading-tight uppercase">
        Checking System Integrity...<br />
        Linking Blueprint Nodes...<br />
        Syncing Neural Context...
      </div>
    </main>
  );
}
