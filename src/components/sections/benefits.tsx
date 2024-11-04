import { Leaf, Snowflake, Euro, ThermometerSun } from "lucide-react";

const benefits = [
  {
    title: "Energiezuinig",
    description: "Bespaar op uw energierekening met onze A+++ energielabel airconditioners",
    icon: Leaf,
  },
  {
    title: "Perfecte Temperatuur",
    description: "Geniet van aangename koeling in de zomer en efficiënte verwarming in de winter",
    icon: ThermometerSun,
  },
  {
    title: "Kosten Effectief",
    description: "Aantrekkelijke prijzen en verschillende financieringsmogelijkheden",
    icon: Euro,
  },
  {
    title: "Jaar-rond Comfort",
    description: "Optimaal binnenklimaat in elk seizoen met één systeem",
    icon: Snowflake,
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-light/5 to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Waarom Kiezen voor Onze Tosot Airconditioners?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Guarantee Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 p-4 bg-primary/5 rounded-lg">
            <svg 
              className="h-5 w-5 text-primary" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <p className="text-sm text-gray-700">
              5 jaar garantie op alle systemen
            </p>
          </div>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-[#009688] text-white rounded-lg hover:bg-[#00796B] transition-colors"
            >
              Plan een gratis adviesgesprek
              <svg 
                className="ml-2 h-5 w-5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}