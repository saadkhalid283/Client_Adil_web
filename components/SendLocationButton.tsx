"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { wa } from "@/lib/constants";
import { locationContent } from "@/lib/content/location";

export function SendLocationButton({ isAr }: { isAr: boolean }) {
  const copy = isAr ? locationContent.ar : locationContent.en;
  const [busy, setBusy] = useState(false);

  const openWhatsApp = (message: string) => {
    const url = wa(message);
    if (window.trackWhatsappConversion) {
      window.trackWhatsappConversion(url);
    } else {
      window.location.href = url;
    }
  };

  const handleClick = () => {
    if (busy) return;
    if (!("geolocation" in navigator)) {
      openWhatsApp(copy.messagePlain);
      return;
    }
    setBusy(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setBusy(false);
        const { latitude, longitude } = pos.coords;
        openWhatsApp(
          `${copy.messageWithLocation} https://www.google.com/maps?q=${latitude},${longitude}`
        );
      },
      () => {
        setBusy(false);
        openWhatsApp(copy.messagePlain);
      },
      { timeout: 8000, enableHighAccuracy: false }
    );
  };

  return (
    <div className="sendloc">
      <button
        type="button"
        className="sendloc__btn tap"
        onClick={handleClick}
        disabled={busy}
        aria-busy={busy}
      >
        <MapPin size={18} aria-hidden="true" />
        {busy ? copy.busy : copy.button}
      </button>
      <p className="sendloc__note">{copy.privacy}</p>
    </div>
  );
}
