import { FileText, Users, Shield, Award, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: "Gratis Offerte",
    description: "Vrijblijvend advies en een heldere offerte zonder verborgen kosten. Binnen 24 uur respons."
  },
  {
    icon: Users,
    title: "Gecertificeerde Monteurs",
    description: "Al onze monteurs zijn F-gassen gecertificeerd en hebben jarenlange ervaring in de airco branche."
  },
  {
    icon: Shield,
    title: "5 Jaar Garantie",
    description: "Complete fabrieksgarantie op alle geïnstalleerde systemen, met optie tot verlenging."
  },
  {
    icon: Award,
    title: "Tosot Specialist Limburg",
    description: "Exclusieve Tosot dealer voor heel Limburg met showroom en eigen servicedienst."
  }
];

export function WhyUs() {
  return (
    <section id="waarom-wij" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Airco Specialist Limburg - Waarom Kiezen voor Ons?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Airco kopen Limburg? Wij zijn uw airco bedrijf voor Heerlen, Sittard, Kerkrade, Brunssum en heel Parkstad
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="text-center group hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-gray-600">Jaar ervaring</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2000+</div>
              <p className="text-gray-600">Tevreden klanten</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4.7/5</div>
              <p className="text-gray-600">Google reviews</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24u</div>
              <p className="text-gray-600">Reactietijd</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Overtuigd? Start met een gratis adviesgesprek
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Onze adviseurs komen graag bij u langs om de mogelijkheden te bespreken. 
            Geheel vrijblijvend en zonder verplichtingen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-orange-500 hover:bg-orange-600 text-white transition-colors"
            >
              Vraag gratis offerte aan
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border-2 border-gray-300 bg-white hover:bg-gray-50 transition-colors"
            >
              Bekijk onze projecten
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}