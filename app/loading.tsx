import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] grid place-items-center text-[var(--color-navy)]">
      <div className="flex items-center gap-2 text-sm">
        <Loader2 className="h-4 w-4 animate-spin text-[var(--color-gold)]" />
        Loading…
      </div>
    </div>
  );
}
