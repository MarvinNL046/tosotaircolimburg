import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Wat kost een Tosot airco installatie in Limburg?",
    answer: "Een complete Tosot airco installatie in Limburg begint vanaf €1.599,- inclusief BTW, montage en inbedrijfstelling. De exacte prijs hangt af van het Tosot model (Clivia, Cosmo of Pular), het vermogen (kW) en de complexiteit van de installatie. Wij bieden gratis inmeting en offerte binnen 24 uur voor heel Limburg, van Maastricht tot Venlo."
  },
  {
    question: "Hoe lang duurt een Tosot airco installatie?",
    answer: "Een standaard Tosot single-split installatie duurt 4-6 uur. Voor een Tosot multi-split systeem rekenen we 6-8 uur. Onze Tosot-gecertificeerde monteurs werken netjes en efficiënt, inclusief het wegwerken van leidingen en het testen van uw nieuwe Tosot systeem. We plannen installaties ook op zaterdag zonder meerkosten."
  },
  {
    question: "Hoeveel verbruikt een Tosot airco?",
    answer: "Tosot airconditioners hebben energielabel A+++ en verbruiken slechts 0,5-1 kWh per uur bij koelen. Een Tosot Clivia 2.5kW verbruikt bijvoorbeeld €0,15-0,30 per uur. Met de Tosot WiFi-module en I-Feel technologie bespaart u tot 30% extra door slimme temperatuurregeling. Bij verwarmen levert een Tosot tot 5kW warmte per 1kW stroom (COP 5.0)."
  },
  {
    question: "Wat kost Tosot airco onderhoud in Limburg?",
    answer: "Tosot onderhoudscontract in Limburg kost vanaf €11 per maand (€132/jaar). Dit omvat jaarlijkse controle, filterreiniging, koudemiddelcontrole en software-updates. Met onderhoudscontract heeft u voorrang bij storingen en behoud van 5 jaar Tosot garantie. Losse onderhoudsbeurt kost €89. Wij onderhouden Tosot in heel Limburg."
  },
  {
    question: "Kan een Tosot airco ook verwarmen?",
    answer: "Ja, alle Tosot modellen (Clivia, Cosmo, Pular) zijn lucht-lucht warmtepompen die efficiënt verwarmen tot -25°C buitentemperatuur. Een Tosot verwarmt 4-5x goedkoper dan gas of elektrische kachels. De Tosot Clivia heeft zelfs een speciale 10°C verwarmingsstand voor vorstbeveiliging in vakantiewoningen."
  },
  {
    question: "Welke Tosot airco is het beste voor mijn woning?",
    answer: "Voor slaapkamers tot 35m² adviseren wij de stille Tosot Clivia (19dB). Voor woonkamers tot 50m² is de krachtige Tosot Cosmo ideaal. Voor grote ruimtes tot 70m² biedt de Tosot Pular maximaal vermogen. Onze adviseurs berekenen gratis het exacte vermogen voor uw situatie in Limburg."
  },
  {
    question: "Hoe stil is een Tosot airco?",
    answer: "Tosot airconditioners behoren tot de stilste ter wereld. De Tosot Clivia produceert slechts 19dB (stiller dan gefluister). De Tosot Cosmo: 22dB. De Tosot Pular: 24dB. Ter vergelijking: een normale conversatie is 60dB. Perfect voor slaapkamers en babykamers."
  },
  {
    question: "Wat is het verschil tussen Tosot en andere merken?",
    answer: "Tosot by Gree is 's werelds grootste aircoproducent met 40% marktaandeel. Tosot biedt: langste garantie (5 jaar), hoogste energielabel (A+++), stilste werking (vanaf 19dB), beste prijs-kwaliteit en snelste levertijd. Als officiële Tosot dealer Limburg hebben wij alle modellen op voorraad."
  },
  {
    question: "Mag ik zelf een Tosot airco installeren?",
    answer: "Nee, volgens F-gassen wetgeving moet een airco geïnstalleerd worden door een F-gassen gecertificeerd bedrijf. Onze monteurs hebben alle certificaten voor Tosot installatie. Bij zelf installeren vervalt de garantie en riskeert u een boete tot €45.000. Wij installeren vakkundig in heel Limburg."
  },
  {
    question: "Hoeveel jaar garantie zit er op een Tosot airco?",
    answer: "Tosot geeft standaard 5 jaar fabrieksgarantie op alle onderdelen bij installatie door een erkend bedrijf. Met ons Tosot onderhoudscontract verlengen wij de garantie tot 7 jaar. Dit is de langste garantie in de markt. Garantie geldt voor heel Limburg."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Veelgestelde vragen over Tosot Airco Limburg
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Alles wat u moet weten over Tosot airconditioning installatie, kosten, onderhoud en garantie in Limburg
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}