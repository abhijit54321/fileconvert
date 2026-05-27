import React from 'react';

export function AdPlaceholder() {
  return (
    <div className="w-full max-w-3xl mx-auto my-8 overflow-hidden rounded-xl border border-dashed border-muted-foreground/30 bg-muted/20 flex flex-col items-center justify-center p-6 text-muted-foreground min-h-[120px]">
      <span className="text-xs uppercase tracking-widest font-medium opacity-50 mb-2">Advertisement</span>
      <div className="text-sm opacity-60 text-center max-w-sm">
        Supports FileConvert to keep tools 100% free.
      </div>
    </div>
  );
}
