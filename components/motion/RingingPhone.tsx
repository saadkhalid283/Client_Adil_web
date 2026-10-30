import { Phone } from "lucide-react";

/**
 * Phone icon that rings in bursts: a decaying handset shake plus three diamond
 * sound-waves radiating across the button. Purely decorative (aria-hidden);
 * the motion lives in fx.css (.ringph*).
 */
export function RingingPhone({ size = 22 }: { size?: number }) {
  return (
    <span className="ringph" aria-hidden="true">
      <span className="ringph__wave" />
      <span className="ringph__wave ringph__wave--2" />
      <span className="ringph__wave ringph__wave--3" />
      <Phone size={size} className="ringph__icon" />
    </span>
  );
}
