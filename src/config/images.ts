export const images = {
  hero: {
    main: "/images/tosot-clivia-wit.png",
    alt: "Tosot Clivia airconditioner in modern interieur"
  },
  products: {
    clivia: {
      white: "/images/tosot-clivia-wit.png",
      black: "/images/tosot-clivia-zwart.png",
      alt: "Tosot Clivia airconditioner"
    },
    cosmo: {
      white: "/images/tosot-cosmo-wit.png",
      alt: "Tosot Cosmo airconditioner"
    },
    pular: {
      white: "/images/tosot-pular-wit.png",
      alt: "Tosot Pular airconditioner"
    }
  }
} as const;

export type ProductImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
  price?: string;
  highlight?: string;
};

export const productImages: ProductImage[] = [
  {
    src: "/images/tosot-clivia-wit.png",
    alt: "Tosot Clivia Wit",
    title: "Tosot Clivia",
    description: "Premium design met geavanceerde technologie",
    price: "Vanaf €1.899,-",
    highlight: "Best verkocht"
  },
  {
    src: "/images/tosot-clivia-zwart.png",
    alt: "Tosot Clivia Zwart",
    title: "Tosot Clivia Black",
    description: "Stijlvolle zwarte uitvoering met superieure prestaties",
    price: "Vanaf €1.899,-"
  },
  {
    src: "/images/tosot-cosmo-wit.png",
    alt: "Tosot Cosmo",
    title: "Tosot Cosmo",
    description: "Krachtige prestaties voor optimaal comfort",
    price: "Vanaf €1.699,-"
  },
  {
    src: "/images/tosot-pular-wit.png",
    alt: "Tosot Pular",
    title: "Tosot Pular",
    description: "Efficiënte klimaatbeheersing voor elke ruimte",
    price: "Vanaf €1.599,-",
    highlight: "Voordeligste model"
  }
];