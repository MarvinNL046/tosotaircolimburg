import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Building2, TrendingUp, Users, Award } from 'lucide-react';

const timelineEvents = [
  {
    year: 1989,
    title: "Oprichting Gree",
    description: "Gree wordt opgericht in Zhuhai, Guangdong, als 'Zhuhai City Haili Cooling Engineering Company Limited'",
    icon: Building2,
    category: "milestone"
  },
  {
    year: 1991,
    title: "Officiële Registratie",
    description: "Het bedrijf wordt officieel geregistreerd als Gree Electric Appliances, Inc. of Zhuhai",
    icon: Building2,
    category: "milestone"
  },
  {
    year: 1996,
    title: "Beursnotering",
    description: "Gree wordt genoteerd aan de Shenzhen Stock Exchange",
    icon: TrendingUp,
    category: "growth"
  },
  {
    year: 2008,
    title: "Sterke Groei",
    description: "47% groei ondanks wereldwijde recessie, met contractverkopen van $23 miljard",
    icon: TrendingUp,
    category: "growth"
  },
  {
    year: 2011,
    title: "Record Kwartaal",
    description: "Netto-inkomen stijgt met 47% tot 934,7 miljoen yuan in het eerste kwartaal",
    icon: TrendingUp,
    category: "growth"
  },
  {
    year: 2019,
    title: "Strategische Herstructurering",
    description: "Gree Group verkoopt meerderheidsbelang aan private equity fonds",
    icon: Users,
    category: "milestone"
  },
  {
    year: 2022,
    title: "Sportsponsoring",
    description: "Gree wordt sponsor van de AFF Mitsubishi Electric Cup 2022",
    icon: Award,
    category: "achievement"
  }
];

export function Timeline() {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          De Geschiedenis van Gree Electric Appliances
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              const Icon = event.icon;

              return (
                <div
                  key={event.year}
                  className={`relative flex items-center ${
                    isEven ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}
                  >
                    <div
                      className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-2 ${
                        activeEvent === index
                          ? 'border-primary'
                          : 'border-transparent'
                      }`}
                      onClick={() => setActiveEvent(activeEvent === index ? null : index)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-bold text-xl">{event.year}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-600">
                        {event.description}
                      </p>
                      {activeEvent === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 pt-4 border-t border-gray-100"
                        >
                          <p className="text-sm text-gray-500">
                            Klik voor meer informatie over deze mijlpaal
                          </p>
                          <ChevronRight className="h-4 w-4 text-primary mt-2" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow" />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Van een kleine fabriek met 200 werknemers is Gree uitgegroeid tot 's werelds grootste fabrikant van residentiële airconditioners met meer dan 90.000 medewerkers, waaronder 16.000 ingenieurs.
          </p>
        </div>
      </div>
    </section>
  );
}