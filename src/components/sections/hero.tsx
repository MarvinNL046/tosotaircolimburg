import { Wind } from "lucide-react";
import { contactConfig } from "@/config/contact";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-12 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Wind className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              <a 
                href={`tel:+31${contactConfig.phoneClean}`} 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Bel {contactConfig.phone}
              </a>
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
              Premium klimaatbeheersing door{" "}
              <span className="text-blue-600">Tosot</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600">
              Specialist in Tosot by Gree airconditioningsystemen in Limburg. Wij zorgen voor een aangenaam binnenklimaat, het hele jaar door.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="w-full sm:w-auto bg-orange-500 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 transition-colors"
              >
                Vrijblijvende offerte
              </a>
              <a
                href={`tel:+31${contactConfig.phoneClean}`}
                className="w-full sm:w-auto rounded-lg border-2 border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                Bel {contactConfig.phone}
              </a>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-blue-200/20 rounded-lg" />
            <img
              src="/images/tosot-clivia-wit.webp"
              alt="Tosot Clivia airconditioner"
              className="rounded-lg object-cover w-full h-[300px] sm:h-[400px] lg:h-full shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}