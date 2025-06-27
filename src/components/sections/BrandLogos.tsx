
const brands = [
  {
    name: "Daikin",
    models: ["Comfora", "Emura", "Stylish", "Perfera", "Ururu Sarara"],
    logo: "DAIKIN"
  },
  {
    name: "LG",
    models: ["ArtCool", "DualCool Premium"],
    logo: "LG"
  },
  {
    name: "Samsung",
    models: ["WindFree series", "Luzon"],
    logo: "SAMSUNG"
  },
  {
    name: "Mitsubishi Heavy Industries",
    models: [],
    logo: "MITSUBISHI"
  },
  {
    name: "Toshiba",
    models: ["Haori", "Daiseikai", "Kazumi", "Seiya"],
    logo: "TOSHIBA"
  },
  {
    name: "Tosot",
    models: ["Pular", "Clivia", "Cosmo"],
    logo: "TOSOT"
  }
];

export function BrandLogos() {
  return (
    <section id="merken" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Wij Installeren Alle Top Merken
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Als erkend installateur werken wij met de beste airconditioning merken ter wereld
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-400 group-hover:text-blue-600 transition-colors duration-300 grayscale group-hover:grayscale-0">
                  {brand.logo}
                </div>
                {brand.models.length > 0 && (
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-gray-600">
                      {brand.models.slice(0, 2).join(", ")}
                      {brand.models.length > 2 && "..."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ook Mobiele Airco's Beschikbaar
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Naast vaste installaties leveren wij ook hoogwaardige mobiele airconditioners van LG en Tosot. 
            Perfect voor tijdelijke koeling of als u geen vaste installatie kunt plaatsen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur rounded-lg px-6 py-3">
              <span className="font-semibold">✓ Direct leverbaar</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-6 py-3">
              <span className="font-semibold">✓ Geen installatie nodig</span>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg px-6 py-3">
              <span className="font-semibold">✓ Plug & Play</span>
            </div>
          </div>
        </div>

        {/* Airco Covers */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Airco Covers voor Extra Bescherming
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Bescherm uw buitenunit tegen weersinvloeden met onze hoogwaardige airco covers. 
            Verkrijgbaar in wit en antraciet, passend bij elke gevel.
          </p>
          <div className="inline-flex gap-4">
            <div className="bg-white border-2 border-gray-300 rounded-lg px-6 py-3">
              <span className="font-medium">Cover Wit</span>
            </div>
            <div className="bg-gray-800 text-white rounded-lg px-6 py-3">
              <span className="font-medium">Cover Antraciet</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}