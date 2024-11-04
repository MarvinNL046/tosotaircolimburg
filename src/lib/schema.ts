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
      "name": "Wat zijn de kosten van een Tosot airco installatie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De kosten van een Tosot airco installatie beginnen vanaf €1.599,- voor een complete installatie inclusief montage. De exacte prijs is afhankelijk van het model, de grootte van de ruimte en de complexiteit van de installatie."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe lang duurt een airco installatie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Een standaard Tosot airco installatie duurt gemiddeld 4-6 uur. Bij complexere installaties of bij een multi-split systeem kan dit oplopen tot een hele werkdag."
      }
    },
    {
      "@type": "Question",
      "name": "Is een Tosot airco energiezuinig?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, Tosot airconditioners zijn zeer energiezuinig met energielabel A+++. Ze verbruiken gemiddeld 0,5-1 kWh per uur bij koelen en hebben een hoge SEER-waarde voor optimale efficiëntie."
      }
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