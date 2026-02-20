import emailjs from '@emailjs/browser';

const DEBUG_MODE = false;

// LeadFlow CRM configuration
const LEADFLOW_URL = "https://wetryleadflow.com/api/webhooks/leads";
const LEADFLOW_API_KEY = "lf_lRyHo1ENukt9VsG9gYT8EKeDA_nKuoQ1";

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
}

const sendViaEmailJS = async (data: EmailData): Promise<boolean> => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      if (DEBUG_MODE) console.error('EmailJS configuration missing');
      return false;
    }

    const templateParams = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      city: data.city,
      message: data.message,
      to_email: 'info@staycoolairco.nl'
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    if (DEBUG_MODE) console.log('EmailJS response:', response);
    return response.status === 200;
  } catch (error) {
    if (DEBUG_MODE) console.error('EmailJS error:', error);
    return false;
  }
};

// Send data to LeadFlow CRM
const sendToLeadflow = async (data: EmailData): Promise<boolean> => {
  try {
    const nameParts = data.name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const leadflowData = {
      firstName,
      lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
      source: 'website-contact',
      customFields: {
        city: data.city,
        woonplaats: data.city
      }
    };

    if (DEBUG_MODE) console.log('Sending data to Leadflow CRM:', leadflowData);

    const response = await fetch(LEADFLOW_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": LEADFLOW_API_KEY
      },
      body: JSON.stringify(leadflowData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (DEBUG_MODE) console.error(`Leadflow error (${response.status}):`, errorText);
      return false;
    }

    if (DEBUG_MODE) console.log('Leadflow submission successful');
    return true;
  } catch (error) {
    if (DEBUG_MODE) console.error('Leadflow submission failed:', error);
    return false;
  }
};

export const sendEmail = async (data: EmailData): Promise<void> => {
  if (DEBUG_MODE) console.log('Sending email with data:', data);

  const emailJSSuccess = await sendViaEmailJS(data);
  const leadflowSuccess = await sendToLeadflow(data);

  if (DEBUG_MODE) {
    console.log('EmailJS success:', emailJSSuccess);
    console.log('Leadflow success:', leadflowSuccess);
  }

  if (!emailJSSuccess && !leadflowSuccess) {
    throw new Error('Failed to send contact form data');
  }
};