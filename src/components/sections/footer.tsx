import { Mail, MapPin, Phone } from "lucide-react";
import { contactConfig } from "@/config/contact";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center sm:justify-start">
                <Phone className="w-5 h-5 mr-2 text-blue-600" />
                <a href={`tel:+31${contactConfig.phoneClean}`} className="hover:text-blue-600 active:text-blue-700 transition-colors">
                  {contactConfig.phone}
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Mail className="w-5 h-5 mr-2 text-blue-600" />
                <a href={`mailto:${contactConfig.email}`} className="hover:text-blue-600 active:text-blue-700 transition-colors">
                  {contactConfig.email}
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <MapPin className="w-5 h-5 mr-2 text-blue-600" />
                <span>Limburg, Nederland</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-blue-600 active:text-blue-700 transition-colors">
                  Tosot Airco Installatie
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-600 active:text-blue-700 transition-colors">
                  Onderhoud & Service
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-600 active:text-blue-700 transition-colors">
                  Reparatie
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 active:text-blue-700 transition-colors">
                  Gratis Adviesgesprek
                </a>
              </li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Werkgebied</h3>
            <ul className="space-y-2">
              <li>
                <a href="/werkgebied/maastricht" className="hover:text-blue-600 active:text-blue-700 transition-colors">
                  Maastricht
                </a>
              </li>
              <li>
                <a href="/werkgebied/heerlen" className="hover:text-blue-600 active:text-blue-700 transition-colors">
                  Heerlen
                </a>
              </li>
              <li>
                <a href="/werkgebied/roermond" className="hover:text-blue-600 active:text-blue-700 transition-colors">
                  Roermond
                </a>
              </li>
              <li>
                <a href="/werkgebied/venlo" className="hover:text-blue-600 active:text-blue-700 transition-colors">
                  Venlo
                </a>
              </li>
              <li>
                <a href="/werkgebied" className="hover:text-blue-600 active:text-blue-700 transition-colors">
                  Heel Limburg
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-sm sm:text-base text-gray-600">
            <p className="mb-2">
              Officiële Tosot by Gree partner voor Limburg
            </p>
            <p>
              © {new Date().getFullYear()} {contactConfig.companyName}. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}