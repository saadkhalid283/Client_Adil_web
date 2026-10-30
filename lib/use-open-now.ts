"use client";

import { useEffect, useState } from "react";

const OPEN_HOUR = 8;
const REFRESH_MS = 60_000;

function isOpenInRiyadh(): boolean {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Riyadh",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  return hour >= OPEN_HOUR;
}

/** null until mounted (matches SSR), then true/false, refreshed every minute. Open 08:00 to midnight Asia/Riyadh. */
export function useOpenNow(): boolean | null {
  const [open, setOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const update = () => setOpen(isOpenInRiyadh());
    update();
    const id = window.setInterval(update, REFRESH_MS);
    return () => window.clearInterval(id);
  }, []);

  return open;
}
