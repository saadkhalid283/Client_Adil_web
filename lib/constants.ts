export const WA_NUMBER = "966598440397";
export const PHONE_PRIMARY = "+966598440397";

// Coordinates of the client's location (Abhar Al-Janubiyah, Al-Basatin, Jeddah)
export const MAP_LAT = "21.68932718013044";
export const MAP_LNG = "39.112510675275004";

// Google Maps embed driven directly by the coordinates above, so the map and
// its pin always land on the exact location (no hand-built pb= payload).
export const MAP_SRC = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&z=16&hl=en&output=embed`;

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
