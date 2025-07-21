import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { sendToWebhookOnly } from "@/utils/email";

const formSchema = z.object({
  name: z.string().min(2, "Naam moet minimaal 2 karakters bevatten"),
  email: z.string().email("Vul een geldig e-mailadres in"),
  phone: z.string().min(10, "Vul een geldig telefoonnummer in"),
  city: z.string().min(2, "Stad moet minimaal 2 karakters bevatten"),
  message: z.string().min(10, "Bericht moet minimaal 10 karakters bevatten"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactWebhookTest() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const success = await sendToWebhookOnly({
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        message: data.message,
      });
      
      setSubmitStatus({
        success,
        message: success 
          ? "✅ Webhook succesvol verzonden!" 
          : "❌ Webhook verzending mislukt"
      });
      
      if (success) {
        reset();
      }
    } catch (error) {
      console.error("Error sending to webhook:", error);
      setSubmitStatus({
        success: false,
        message: "❌ Er is een fout opgetreden"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <meta name="robots" content="noindex, nofollow" />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Webhook Test Page
              </h1>
              <p className="text-gray-600">
                Deze pagina is alleen voor het testen van de GoHighLevel webhook integratie.
                Het verstuurt alleen naar de webhook, niet naar EmailJS.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Stad
                  </label>
                  <input
                    type="text"
                    id="city"
                    {...register("city")}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                  {errors.city && (
                    <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verzenden naar webhook...
                      </>
                    ) : (
                      "Test webhook"
                    )}
                  </button>
                </div>

                {submitStatus && (
                  <div className={`rounded-md p-4 ${
                    submitStatus.success 
                      ? "bg-green-50 text-green-800" 
                      : "bg-red-50 text-red-800"
                  }`}>
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                  </div>
                )}
              </form>
            </div>

            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-3">Webhook Details:</h2>
              <div className="space-y-2 text-sm">
                <p><strong>URL:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-xs break-all">https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f</code></p>
                <p><strong>Method:</strong> POST</p>
                <p><strong>Content-Type:</strong> application/json</p>
                <p><strong>Data structure:</strong></p>
                <pre className="bg-gray-100 p-3 rounded text-xs overflow-x-auto">
{`{
  "data": {
    "name": "...",
    "email": "...",
    "phone": "...",
    "city": "...",
    "message": "..."
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}