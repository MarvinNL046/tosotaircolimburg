import { Check, Minus } from "lucide-react";

const comparisonData = {
  headers: ["Kenmerken", "Pular", "Cosmo", "Clivia"],
  features: [
    {
      name: "Energielabel koelen",
      values: ["A++", "A+++", "A+++"]
    },
    {
      name: "Energielabel verwarmen",
      values: ["A+", "A++", "A+++"]
    },
    {
      name: "SEER-waarde",
      values: ["6.1", "7.1", "8.5"]
    },
    {
      name: "SCOP-waarde",
      values: ["4.0", "4.2", "5.1"]
    },
    {
      name: "Geluidsniveau (min. dB)",
      values: ["26dB", "23dB", "20dB"]
    },
    {
      name: "I-Feel temperatuursensor",
      values: [true, true, true]
    },
    {
      name: "WiFi-besturing ingebouwd",
      values: [false, true, true]
    },
    {
      name: "8°C verwarmingsfunctie",
      values: [false, true, true]
    },
    {
      name: "3D luchtstroomregeling",
      values: [false, true, true]
    },
    {
      name: "Intelligent defrosting",
      values: [true, true, true]
    },
    {
      name: "Self-cleaning functie",
      values: [false, true, true]
    },
    {
      name: "Turbo modus",
      values: [true, true, true]
    },
    {
      name: "Verkrijgbaar in zwart",
      values: [false, false, true]
    }
  ],
  prices: ["Vanaf €1.599,-", "Vanaf €1.699,-", "Vanaf €1.899,-"]
};

export function ProductComparison() {
  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-50">
                {comparisonData.headers.map((header, index) => (
                  <th
                    key={index}
                    className={`px-6 py-4 text-left text-sm font-semibold text-gray-900 ${
                      index === 0 ? "sticky left-0 bg-gray-50 z-10" : ""
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comparisonData.features.map((feature, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 sticky left-0 bg-white whitespace-nowrap font-medium">
                    {feature.name}
                  </td>
                  {feature.values.map((value, colIndex) => (
                    <td key={colIndex} className="px-6 py-4 text-sm text-gray-600">
                      {typeof value === "boolean" ? (
                        value ? (
                          <Check className="h-5 w-5 text-green-600" />
                        ) : (
                          <Minus className="h-5 w-5 text-gray-400" />
                        )
                      ) : (
                        value
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-gray-50">
                <td className="px-6 py-4 text-sm font-semibold text-gray-900 sticky left-0 bg-gray-50">
                  Vanaf prijs (incl. installatie)
                </td>
                {comparisonData.prices.map((price, index) => (
                  <td key={index} className="px-6 py-4 text-sm font-semibold text-blue-600">
                    {price}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          * Prijzen zijn inclusief BTW en standaard installatie. Exacte prijs is afhankelijk van uw situatie.
          <br />
          * SEER = Seizoensgebonden Energie-Efficiëntie Ratio voor koelen
          <br />
          * SCOP = Seizoensgebonden Coëfficiënt Of Performance voor verwarmen
        </div>
      </div>
    </div>
  );
}