import { ArrowRight, Phone, Shield } from 'lucide-react';

interface CTABannerProps {
  variant?: 'primary' | 'secondary' | 'emergency';
}

export function CTABanner({ variant = 'primary' }: CTABannerProps) {
  const variants = {
    primary: {
      bgClass: 'bg-gradient-to-r from-blue-600 to-blue-700',
      title: 'Bespaar nu op uw energierekening',
      subtitle: 'Gratis advies • Binnen 24u reactie • 5 jaar garantie',
      features: [
        'Gratis inmeting',
        'Binnen 24u reactie',
        '5 jaar garantie'
      ]
    },
    secondary: {
      bgClass: 'bg-gradient-to-r from-orange-500 to-orange-600',
      title: 'Onderhoud vanaf €11 per maand',
      subtitle: 'Voorkom dure reparaties • Behoud uw garantie • Altijd optimale prestaties',
      features: [
        'Jaarlijkse controle',
        'Voorrang bij storingen',
        'Verlengde garantie'
      ]
    },
    emergency: {
      bgClass: 'bg-gradient-to-r from-gray-800 to-gray-900',
      title: 'Tosot storing in Limburg? Wij helpen!',
      subtitle: 'Onze Tosot specialisten staan voor u klaar in heel Limburg',
      features: [
        'Snelle diagnose',
        'Transparante prijzen',
        'Tosot specialist'
      ]
    }
  };

  const config = variants[variant];

  return (
    <section className={`${config.bgClass} py-16`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <div className="text-white lg:max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {config.title}
            </h2>
            <p className="text-lg mb-6 opacity-90">
              {config.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              {config.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-white/80" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-md bg-white text-blue-600 hover:bg-gray-100 transition-colors"
            >
              Direct offerte aanvragen
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="tel:0462021430"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Bel direct
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sticky CTA for mobile
export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex gap-2">
          <a
            href="tel:0462021430"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-orange-500 hover:bg-orange-600 text-white transition-colors"
          >
            <Phone className="w-4 h-4 mr-1" />
            Bel nu
          </a>
          <a
            href="#contact"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            Offerte
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
}