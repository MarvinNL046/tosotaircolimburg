import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export function TotSnel() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Bedankt voor uw bericht!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We hebben uw aanvraag ontvangen en nemen zo spoedig mogelijk contact
          met u op. U hoort binnen 24 uur van ons.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
        >
          Terug naar home
        </Link>
      </div>
    </div>
  );
}