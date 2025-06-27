import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import emailjs from '@emailjs/browser';
import { emailConfig } from '@/config/email';

const businessHours = [
  { day: "Maandag", hours: "09:00 - 17:00" },
  { day: "Dinsdag", hours: "09:00 - 17:00" },
  { day: "Woensdag", hours: "09:00 - 17:00" },
  { day: "Donderdag", hours: "09:00 - 17:00" },
  { day: "Vrijdag", hours: "09:00 - 16:00" },
  { day: "Zaterdag", hours: "Gesloten", closed: true },
  { day: "Zondag", hours: "Gesloten", closed: true }
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    service: '',
    message: ''
  });

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
          service: formData.service,
          message: formData.message,
          to_email: 'info@staycoolairco.nl',
        },
        emailConfig.publicKey
      );

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        postcode: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Tosot Airco Limburg - Contact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Uw officiële Tosot dealer voor heel Limburg - van Maastricht tot Venlo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <Card className="p-8 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tosot Limburg Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Telefoon</p>
                    <a href="tel:0462021430" className="text-blue-600 hover:text-blue-700 text-lg">
                      046 202 1430
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <a href="https://wa.me/31636481054" className="text-blue-600 hover:text-blue-700 text-lg">
                      06 3648 1054
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">E-mail</p>
                    <a href="mailto:info@staycoolairco.nl" className="text-blue-600 hover:text-blue-700">
                      info@staycoolairco.nl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Adres</p>
                    <p className="text-gray-600">
                      Aan de Bogen 11<br />
                      6118 AS Nieuwstadt<br />
                      <span className="text-sm italic">(geen bezoekadres)</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Business Hours */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-blue-600" />
                Openingstijden
              </h3>
              
              <div className="space-y-2">
                {businessHours.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-0">
                    <span className="font-medium text-gray-700">{item.day}</span>
                    <span className={`${item.closed ? 'text-red-600' : 'text-gray-900'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Service gebied:</strong> Wij installeren Tosot airconditioners in heel Limburg. 
                  Van Maastricht, Heerlen, Sittard tot Venlo en Roermond.
                </p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tosot Offerte Limburg</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Naam *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Uw naam"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefoon *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="06-12345678"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="uw@email.nl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postcode">Postcode *</Label>
                    <Input
                      id="postcode"
                      required
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      placeholder="1234 AB"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="service">Gewenste service *</Label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  >
                    <option value="">Selecteer een service</option>
                    <option value="installatie">Tosot installatie</option>
                    <option value="onderhoud">Tosot onderhoud (vanaf €11/maand)</option>
                    <option value="reparatie">Tosot reparatie / Storing</option>
                    <option value="advies">Tosot advies Limburg</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Bericht</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[120px]"
                    placeholder="Vertel ons meer over uw wensen..."
                  />
                </div>

                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <p className="text-green-800 font-medium">Bedankt voor uw aanvraag!</p>
                    <p className="text-green-700 text-sm mt-1">
                      We nemen binnen 24 uur contact met u op.
                    </p>
                  </div>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                  >
                    {isSubmitting ? 'Versturen...' : 'Verstuur aanvraag'}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}