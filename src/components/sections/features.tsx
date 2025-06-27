import { Thermometer, Timer, Wrench, Shield, Wind, ArrowRight } from "lucide-react";
import { CapacityCalculator } from "@/components/capacity-calculator";
import { ProductComparison } from "@/components/product-comparison";
import { EnergySavingsCalculator } from "@/components/energy-savings-calculator";

const features = [
  {
    name: "Temperatuurcontrole",
    description: "Nauwkeurige temperatuurregeling met I-Feel technologie.",
    icon: Thermometer,
  },
  {
    name: "Snelle installatie",
    description: "Professionele installatie door gecertificeerde monteurs.",
    icon: Timer,
  },
  {
    name: "Expert onderhoud",
    description: "Regelmatig onderhoud voor optimale prestaties en langere levensduur.",
    icon: Wrench,
  },
  {
    name: "Premium Design",
    description: "Stijlvolle wandunit met een minimalistisch design dat past in elk interieur.",
    icon: Wind,
  },
];

export function Features() {
  return (
    <section id="features" className="bg-gradient-to-br from-blue-50 to-gray-50 py-12 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bereken uw ideale Tosot airco
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Ontdek welk Tosot model perfect past bij uw situatie
          </p>
        </div>

        {/* Calculators */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <CapacityCalculator />
          <EnergySavingsCalculator />
        </div>

        {/* Product Comparison */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-bold mb-8">Vergelijk modellen</h3>
          <ProductComparison />
        </div>

        {/* Features */}
        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.name}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{feature.name}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                Meer info <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 p-4 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-lg">
            <Shield className="h-5 w-5 text-blue-600" />
            <p className="text-sm text-gray-700">
              5 jaar garantie op alle Tosot systemen
            </p>
          </div>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Plan een gratis adviesgesprek
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}