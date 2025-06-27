import { Wrench, Shield, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
  {
    icon: Wrench,
    title: "Airco Installatie Limburg",
    description: "Professionele airco installatie in heel Limburg. Van Maastricht tot Venlo, wij installeren Tosot airco's.",
    features: [
      "Gratis inmeting en advies",
      "Installatie binnen 3-5 werkdagen",
      "5 jaar Tosot garantie",
      "Nette afwerking zonder schade"
    ],
    cta: "Vraag installatie aan"
  },
  {
    icon: Shield,
    title: "Airco Onderhoud Limburg",
    description: "Airco service Limburg vanaf €11/maand. Onderhoud in Sittard, Heerlen, Roermond en heel Zuid-Limburg.",
    features: [
      "Vanaf €11 per maand",
      "Jaarlijkse onderhoudsbeurt",
      "Verlengde garantie",
      "Voorrang bij storingen"
    ],
    cta: "Bekijk onderhoudsplannen"
  },
  {
    icon: Settings,
    title: "Reparatie & Storing",
    description: "Snelle en betrouwbare reparatie service voor uw Tosot airconditioning in heel Limburg.",
    features: [
      "Diagnose binnen 24 uur",
      "Transparante prijzen",
      "Originele Tosot onderdelen",
      "Garantie op reparaties"
    ],
    cta: "Meld een storing"
  }
];

export function ServicesOptimized() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Airco Service Limburg - Installatie & Onderhoud
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Uw officiële Tosot dealer in Limburg: van installatie tot onderhoud voor particulieren en bedrijven
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium rounded-md bg-orange-500 hover:bg-orange-600 text-white transition-colors"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Card>
            );
          })}
        </div>

        {/* YouTube Video Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Video */}
            <div className="aspect-video bg-gray-100">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9m-jkGgfLog"
                title="Tosot Airconditioning Limburg - Professionele installatie"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            {/* Video Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Tosot installatie in Limburg
              </h3>
              <p className="text-gray-600 mb-6">
                Bekijk hoe onze Tosot-gecertificeerde monteurs in Limburg een complete Tosot airconditioning installatie uitvoeren. 
                Van Maastricht tot Venlo: wij installeren Tosot in heel Limburg.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Nette en snelle installatie</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Minimale overlast tijdens werkzaamheden</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Uitgebreide uitleg over bediening</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Plan een gratis adviesgesprek
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Bespaar tot 40% op uw energiekosten
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Moderne airconditioners zijn niet alleen voor koeling, maar ook zeer efficiënt voor verwarming
          </p>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-white text-blue-600 hover:bg-gray-100 transition-colors"
          >
            Bereken uw besparing
          </a>
        </div>
      </div>
    </section>
  );
}