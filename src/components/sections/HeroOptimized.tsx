import React, { useState, useEffect } from 'react';
import { Star, Clock, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import { emailConfig } from '@/config/email';

const rotatingHeadlines = [
  "Airco installateur Limburg",
  "Airco specialist Limburg",
  "Airco kopen en laten installeren Limburg",
  "Airco service Limburg"
];

export function HeroOptimized() {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    message: ''
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % rotatingHeadlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          postcode: formData.postcode,
          message: formData.message,
          to_email: 'info@staycoolairco.nl',
        },
        emailConfig.publicKey
      );

      toast({
        title: "Aanvraag verstuurd!",
        description: "We nemen binnen 24 uur contact met u op.",
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        postcode: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Er ging iets mis",
        description: "Probeer het later opnieuw of bel ons direct.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            {/* Ribbon */}
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-semibold">Binnen 24u reactie</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block mb-2">Airco Limburg - Tosot Specialist</span>
              <span className="text-orange-500 block h-16 overflow-hidden">
                <span
                  key={currentHeadline}
                  className="block animate-slide-up"
                >
                  {rotatingHeadlines[currentHeadline]}
                </span>
              </span>
            </h1>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-white/90">4.7/5 (163 reviews)</span>
              </div>
            </div>

            {/* Benefits List */}
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>Gratis offerte & advies op maat</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>Tosot gecertificeerde monteurs in Limburg</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>5 jaar garantie op alle Tosot systemen</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>Onderhoud vanaf slechts €11 per maand</span>
              </li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0462021430"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                046 202 1430
              </a>
              <a
                href="https://wa.me/31636481054"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                WhatsApp: 06 3648 1054
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-2">
              Vraag direct een offerte aan
            </h2>
            <p className="text-white/80 mb-6">
              Ontvang binnen 24 uur een vrijblijvende offerte
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-white">Naam *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  placeholder="Uw naam"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-white">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    placeholder="uw@email.nl"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white">Telefoon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    placeholder="06-12345678"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="postcode" className="text-white">Postcode *</Label>
                <Input
                  id="postcode"
                  required
                  value={formData.postcode}
                  onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  placeholder="1234 AB"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white">Bericht</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 min-h-[100px]"
                  placeholder="Vertel ons meer over uw wensen..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all"
              >
                {isSubmitting ? 'Versturen...' : 'Verstuur aanvraag'}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="text-xs text-white/60 text-center">
                Door dit formulier te versturen gaat u akkoord met onze privacy voorwaarden
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}