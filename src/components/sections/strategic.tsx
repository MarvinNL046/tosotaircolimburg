import { Shield, Award, Factory, Leaf } from "lucide-react";

const strategicPoints = [
  {
    title: "Wereldwijde Marktleider",
    description: "Gree is 's werelds grootste fabrikant van airconditioners met meer dan 90.000 medewerkers.",
    icon: Award,
    stats: "400+ miljoen gebruikers wereldwijd"
  },
  {
    title: "Innovatie & Ontwikkeling",
    description: "Met 16.000 ingenieurs en eigen R&D faciliteiten staat Tosot by Gree voorop in innovatie.",
    icon: Factory,
    stats: "30.000+ patenten"
  },
  {
    title: "Duurzaamheid",
    description: "Tosot airconditioners behoren tot de meest energiezuinige systemen met A+++ labels.",
    icon: Leaf,
    stats: "Tot 70% energiebesparing"
  },
  {
    title: "Betrouwbaarheid",
    description: "Hoogwaardige kwaliteit en uitgebreide garantie voor zorgeloos comfort.",
    icon: Shield,
    stats: "5 jaar volledige garantie"
  }
];

export function Strategic() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-blue-100/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">
            Waarom Tosot by Gree?
          </h2>
          <p className="text-lg text-gray-600">
            Als onderdeel van Gree Electric Appliances, combineert Tosot decennialange ervaring 
            met de nieuwste technologische innovaties voor optimale klimaatbeheersing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strategicPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <point.icon className="h-6 w-6 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                {point.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {point.description}
              </p>
              
              <div className="pt-4 border-t border-gray-100">
                <p className="text-blue-600 font-semibold">
                  {point.stats}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Ontdek onze modellen
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
    </section>
  );
}