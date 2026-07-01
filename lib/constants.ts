export const WA_NUMBER = "966598440397";
export const PHONE_PRIMARY = "+966598440397";

// Coordinates of the client's location (Abhar Al-Janubiyah, Al-Basatin, Jeddah)
export const MAP_LAT = "21.68932718013044";
export const MAP_LNG = "39.112510675275004";

// Official Google Maps embed endpoint — reliably framable. The camera is
// centered exactly on the client's coordinates, and ContactSection overlays a
// pin at the map's center to mark the location (the legacy ?output=embed marker
// endpoint is blocked by X-Frame-Options, so we mark the spot ourselves).
export const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3707.344889917054!2d39.112510675275004!3d21.68932718013044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDQxJzIxLjYiTiAzOcKwMDYnNTQuMyJF!5e0!3m2!1sen!2s!4v1781270961603!5m2!1sen!2s";

// Link that opens Google Maps with the pin + directions available
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_LAT},${MAP_LNG}`;
export const DIRECTIONS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${MAP_LAT},${MAP_LNG}`;

export const RATING = "4.8";

// Appliance brands commonly found in Saudi homes — shown in the brands
// marquee and mirrored in the LocalBusiness "knowsAbout" structured data.
export const BRANDS = [
  "Samsung",
  "LG",
  "Gree",
  "Midea",
  "Haier",
  "Daikin",
  "Zamil",
  "Carrier",
  "Panasonic",
  "Toshiba",
  "Sharp",
  "Hisense",
];

export const wa = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
