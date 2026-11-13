"use client";

import { useEffect, useState } from "react";

/** null until mounted (matches SSR), then true. Emergency service runs 24/7, so the status never flips to closed. */
export function useOpenNow(): boolean | null {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setOpen(true);
  }, []);

  return open;
}
