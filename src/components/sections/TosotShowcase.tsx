import { CheckCircle, Award, Zap, Shield, Globe, ThermometerSun } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

export function TosotShowcase() {
  return (
    <section id="merken" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tosot by Gree - Premium Kwaliteit
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Als officiële Tosot dealer brengen wij wereldwijde innovatie naar Limburg
          </p>
        </div>

        {/* Tosot Brand Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-blue-600 text-white text-4xl font-bold p-8 rounded-2xl text-center mb-6">
              TOSOT
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Wereldwijd #2 in airconditioning</h3>
                  <p className="text-gray-600">Tosot by Gree is een van de grootste airco producenten ter wereld</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">30+ jaar innovatie</h3>
                  <p className="text-gray-600">Continu onderzoek en ontwikkeling voor de beste klimaatoplossingen</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">Exclusief in Limburg</h3>
                  <p className="text-gray-600">Wij zijn uw officiële Tosot specialist voor heel Limburg</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Waarom Tosot in Limburg?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong>Beste prijs-kwaliteit:</strong> Premium features voor een eerlijke prijs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong>Energiezuinig:</strong> A+++ label bespaart tot 70% op energiekosten
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong>Fluisterstil:</strong> Vanaf 18 dB(A) voor optimaal comfort
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong>Smart Home ready:</strong> WiFi bediening via Tosot app
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong>Lokale service:</strong> Snelle levering en installatie in heel Limburg
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tosot Technologies */}
        <div className="bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Tosot Technologie & Innovatie
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Zap className="w-12 h-12 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">G10 Inverter</h4>
              <p className="text-sm opacity-90">
                Slimme inverter technologie voor maximale efficiëntie
              </p>
            </div>
            <div className="text-center">
              <ThermometerSun className="w-12 h-12 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">I-Feel Functie</h4>
              <p className="text-sm opacity-90">
                Temperatuur meting op afstandsbediening voor perfecte comfort
              </p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Cold Plasma</h4>
              <p className="text-sm opacity-90">
                Geavanceerde luchtzuivering voor een gezond binnenklimaat
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ontdek Tosot voor uw woning in Limburg
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Van Maastricht tot Venlo, van Sittard tot Roermond - wij installeren Tosot in heel Limburg
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-orange-500 hover:bg-orange-600 text-white transition-colors"
          >
            Vraag een Tosot offerte aan
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}