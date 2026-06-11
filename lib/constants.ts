export const WA_NUMBER = "966598440397";
export const PHONE_PRIMARY = "+966598440397";

export const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3707.344889917054!2d39.112510675275004!3d21.68932718013044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!2m2!1m1!2zMjHCsDQxJzIxLjYiTiAzOcKwMDYnNTQuMyJF!5e0!3m2!1sen!2s!4v1781122182993!5m2!1sen!2s";

export const RATING = "4.8";

export const wa = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
