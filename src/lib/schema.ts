import { contactConfig } from "@/config/contact";
import { productImages } from "@/config/images";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": contactConfig.companyName,
  "description": "Officiële Tosot by Gree airconditioning specialist in Limburg. Professionele installatie, onderhoud en reparatie van premium airconditioners.",
  "url": "https://tosotaircolimburg.nl",
  "logo": "https://tosotaircolimburg.nl/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": `+31${contactConfig.phoneClean}`,
    "contactType": "customer service",
    "areaServed": "Limburg",
    "availableLanguage": "Dutch"
  },
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Limburg",
    "addressCountry": "NL"
  },
  "sameAs": [
    contactConfig.socialMedia.facebook,
    contactConfig.socialMedia.instagram
  ]
};

export const productsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": productImages.map((product, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Product",
      "name": product.title,
      "description": product.description,
      "image": product.src,
      "brand": {
        "@type": "Brand",
        "name": "Tosot by Gree"
      },
      "offers": {
        "@type": "Offer",
        "price": product.price?.replace(/[^0-9]/g, ''),
        "priceCurrency": "EUR",
        "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": contactConfig.companyName
        }
      }
    }
  }))
};

export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "itemReviewed": {
    "@type": "Organization",
    "name": contactConfig.companyName,
    "@id": "https://tosotaircolimburg.nl/#organization"
  },
  "ratingValue": "4.8",
  "bestRating": "5",
  "worstRating": "1",
  "ratingCount": "127",
  "reviewCount": "89"
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wat kost een Tosot airco installatie in Limburg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Een complete Tosot airco installatie in Limburg begint vanaf €1.599,- inclusief BTW, montage en inbedrijfstelling. De exacte prijs hangt af van het Tosot model (Clivia, Cosmo of Pular), het vermogen (kW) en de complexiteit van de installatie. Wij bieden gratis inmeting en offerte binnen 24 uur voor heel Limburg, van Maastricht tot Venlo."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe lang duurt een Tosot airco installatie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Een standaard Tosot single-split installatie duurt 4-6 uur. Voor een Tosot multi-split systeem rekenen we 6-8 uur. Onze Tosot-gecertificeerde monteurs werken netjes en efficiënt, inclusief het wegwerken van leidingen en het testen van uw nieuwe Tosot systeem. We plannen installaties ook op zaterdag zonder meerkosten."
      }
    },
    {
      "@type": "Question",
      "name": "Hoeveel verbruikt een Tosot airco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tosot airconditioners hebben energielabel A+++ en verbruiken slechts 0,5-1 kWh per uur bij koelen. Een Tosot Clivia 2.5kW verbruikt bijvoorbeeld €0,15-0,30 per uur. Met de Tosot WiFi-module en I-Feel technologie bespaart u tot 30% extra door slimme temperatuurregeling. Bij verwarmen levert een Tosot tot 5kW warmte per 1kW stroom (COP 5.0)."
      }
    },
    {
      "@type": "Question",
      "name": "Wat kost Tosot airco onderhoud in Limburg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tosot onderhoudscontract in Limburg kost vanaf €11 per maand (€132/jaar). Dit omvat jaarlijkse controle, filterreiniging, koudemiddelcontrole en software-updates. Met onderhoudscontract heeft u voorrang bij storingen en behoud van 5 jaar Tosot garantie. Losse onderhoudsbeurt kost €89. Wij onderhouden Tosot in heel Limburg."
      }
    },
    {
      "@type": "Question",
      "name": "Kan een Tosot airco ook verwarmen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, alle Tosot modellen (Clivia, Cosmo, Pular) zijn lucht-lucht warmtepompen die efficiënt verwarmen tot -25°C buitentemperatuur. Een Tosot verwarmt 4-5x goedkoper dan gas of elektrische kachels. De Tosot Clivia heeft zelfs een speciale 10°C verwarmingsstand voor vorstbeveiliging in vakantiewoningen."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe stil is een Tosot airco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tosot airconditioners behoren tot de stilste ter wereld. De Tosot Clivia produceert slechts 19dB (stiller dan gefluister). De Tosot Cosmo: 22dB. De Tosot Pular: 24dB. Ter vergelijking: een normale conversatie is 60dB. Perfect voor slaapkamers en babykamers."
      }
    },
    {
      "@type": "Question",
      "name": "Hoeveel jaar garantie zit er op een Tosot airco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tosot geeft standaard 5 jaar fabrieksgarantie op alle onderdelen bij installatie door een erkend bedrijf. Met ons Tosot onderhoudscontract verlengen wij de garantie tot 7 jaar. Dit is de langste garantie in de markt. Garantie geldt voor heel Limburg."
      }
    }
  ]
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://tosotaircolimburg.nl"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tosot Airco",
      "item": "https://tosotaircolimburg.nl/tosot"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Contact",
      "item": "https://tosotaircolimburg.nl#contact"
    }
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": contactConfig.companyName,
  "image": "https://tosotaircolimburg.nl/images/tosot-clivia-wit.png",
  "priceRange": "€€",
  "@id": "https://tosotaircolimburg.nl/#organization",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Limburg",
    "addressCountry": "NL"
  },
  "geo": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 51.2093,
      "longitude": 5.9526
    },
    "geoRadius": 50000
  },
  "url": "https://tosotaircolimburg.nl",
  "telephone": `+31${contactConfig.phoneClean}`,
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "areaServed": {
    "@type": "State",
    "name": "Limburg"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127",
    "reviewCount": "89"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Tosot Airconditioning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tosot Airconditioning Installatie",
          "description": "Professionele installatie van Tosot by Gree airconditioners"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airconditioning Onderhoud",
          "description": "Regelmatig onderhoud van uw Tosot airconditioningsysteem"
        }
      }
    ]
  }
};