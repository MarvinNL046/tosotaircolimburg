import { useState } from 'react';
import { ArrowRight, Check, Info, Wind, Zap, Volume2, Droplet, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { OptimizedImage } from '@/components/ui/optimized-image';

const products = [
  {
    id: 'clivia',
    name: 'Tosot Clivia',
    tagline: 'Stijlvol design voor elk interieur',
    description: 'De Tosot Clivia serie combineert elegantie met krachtige prestaties. Perfect voor woonkamers en slaapkamers.',
    images: [
      { color: 'Wit', src: '/images/tosot-clivia-wit.webp' },
      { color: 'Zwart', src: '/images/tosot-clivia-zwart.webp' }
    ],
    features: [
      { icon: Wind, label: 'Fluisterstil: vanaf 19 dB(A)' },
      { icon: Zap, label: 'Energielabel A+++/A++' },
      { icon: Volume2, label: '4D Luchtstroom' },
      { icon: Droplet, label: 'Zelfreinigend' }
    ],
    capacities: ['2.5 kW', '3.5 kW', '5.0 kW', '7.0 kW'],
    benefits: [
      'WiFi bediening via app',
      'Geschikt voor ruimtes tot 70m²',
      'Verwarm- en koelfunctie',
      'Luchtzuivering met filters'
    ]
  },
  {
    id: 'cosmo',
    name: 'Tosot Cosmo',
    tagline: 'Premium comfort met moderne technologie',
    description: 'De Tosot Cosmo biedt geavanceerde klimaatbeheersing met een minimalistisch design dat in elk modern interieur past.',
    images: [
      { color: 'Wit', src: '/images/tosot-cosmo-wit.webp' }
    ],
    features: [
      { icon: Wind, label: 'Ultra stil: vanaf 18 dB(A)' },
      { icon: Zap, label: 'Energielabel A+++' },
      { icon: Volume2, label: 'I-Feel functie' },
      { icon: Droplet, label: 'Luchtzuivering' }
    ],
    capacities: ['2.5 kW', '3.5 kW', '5.3 kW'],
    benefits: [
      'Slimme thermostaat functie',
      'Nachtmodus voor optimaal comfort',
      'Eco-modus voor energiebesparing',
      'Timer en weekprogramma'
    ]
  },
  {
    id: 'pular',
    name: 'Tosot Pular',
    tagline: 'Betaalbare kwaliteit zonder compromis',
    description: 'De Tosot Pular serie levert uitstekende prestaties voor een scherpe prijs. Ideaal voor wie kwaliteit zoekt binnen budget.',
    images: [
      { color: 'Wit', src: '/images/tosot-pular-wit.webp' }
    ],
    features: [
      { icon: Wind, label: 'Stil: vanaf 21 dB(A)' },
      { icon: Zap, label: 'Energielabel A++/A+' },
      { icon: Volume2, label: 'Turbo functie' },
      { icon: Droplet, label: 'Ontvochtiging' }
    ],
    capacities: ['2.5 kW', '3.5 kW', '5.0 kW'],
    benefits: [
      'Uitstekende prijs-kwaliteit',
      'Betrouwbaar en duurzaam',
      'Eenvoudige bediening',
      'Compact design'
    ]
  }
];

export function ProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Onze Tosot Airconditioners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ontdek ons assortiment hoogwaardige Tosot airconditioners. Van stijlvol design tot maximale efficiency.
          </p>
        </div>

        {/* Product Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {products.map((product) => (
            <Button
              key={product.id}
              variant={selectedProduct.id === product.id ? 'default' : 'outline'}
              onClick={() => {
                setSelectedProduct(product);
                setSelectedImage(0);
              }}
              className={selectedProduct.id === product.id ? 'bg-blue-600 hover:bg-blue-700' : ''}
            >
              {product.name}
            </Button>
          ))}
        </div>

        {/* Product Display */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <OptimizedImage
                src={selectedProduct.images[selectedImage].src}
                alt={`${selectedProduct.name} ${selectedProduct.images[selectedImage].color}`}
                className="w-full h-full object-contain"
                width={800}
                height={800}
                priority
              />
            </div>
            
            {selectedProduct.images.length > 1 && (
              <div className="flex gap-4">
                {selectedProduct.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-1 p-2 border-2 rounded-lg transition-colors ${
                      selectedImage === index
                        ? 'border-blue-600'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <OptimizedImage
                      src={image.src}
                      alt={`${selectedProduct.name} ${image.color}`}
                      className="w-full h-20 object-contain"
                      width={200}
                      height={80}
                    />
                    <p className="text-sm mt-1 text-gray-600">{image.color}</p>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {selectedProduct.name}
            </h3>
            <p className="text-xl text-blue-600 mb-4">
              {selectedProduct.tagline}
            </p>
            <p className="text-gray-600 mb-6">
              {selectedProduct.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {selectedProduct.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-700">{feature.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Capacities */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Beschikbare capaciteiten:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.capacities.map((capacity, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {capacity}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <Card className="p-4 mb-6 bg-blue-50 border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" />
                Voordelen
              </h4>
              <ul className="space-y-2">
                {selectedProduct.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-orange-500 hover:bg-orange-600 text-white transition-colors"
              >
                Vraag offerte aan
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/brochure.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md border-2 border-gray-300 bg-white hover:bg-gray-50 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download brochure
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Waarom Tosot Airconditioners?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">5</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">5 Jaar Garantie</h4>
              <p className="text-sm text-gray-600">
                Complete fabrieksgarantie op alle Tosot systemen
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">A+++</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Energiezuinig</h4>
              <p className="text-sm text-gray-600">
                Tot 70% besparing op energiekosten
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">WiFi</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Smart Control</h4>
              <p className="text-sm text-gray-600">
                Bedien uw airco overal via de app
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}