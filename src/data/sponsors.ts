export interface Partner {
  name: string;
  logo: string;
  href?: string;
}

export const SPONSORS: readonly Partner[] = [
  { name: "Susu Sarjana", logo: "/img/sponsors/susu-sarjana.png" },
  { name: "Kahf", logo: "/img/sponsors/kahf.png" },
  { name: "Surabraja Putra", logo: "/img/sponsors/sbp.png" },
  { name: "SBCR Surabraja", logo: "/img/sponsors/sbcr.png" },
  { name: "SBM", logo: "/img/sponsors/sbm.png" },
  { name: "Gelaskaca Productions", logo: "/img/sponsors/gelaskaca.png" },
];

export const MEDIA_PARTNERS: readonly Partner[] = [];
