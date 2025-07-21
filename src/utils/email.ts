import emailjs from '@emailjs/browser';

const DEBUG_MODE = false;

const WEBHOOK_URL = import.meta.env.VITE_GHL_WEBHOOK_URL || "https://services.leadconnectorhq.com/hooks/k90zUH3RgEQLfj7Yc55b/webhook-trigger/54670718-ea44-43a1-a81a-680ab3d5f67f";

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

const sendToWebhook = async (data: EmailData): Promise<boolean> => {
  try {
    const webhookData = {
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        message: data.message
      }
    };

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(webhookData)
    });

    if (DEBUG_MODE) {
      console.log('Webhook response status:', response.status);
      const responseText = await response.text();
      console.log('Webhook response body:', responseText);
    }

    if (!response.ok) {
      if (DEBUG_MODE) console.error('Webhook returned error status:', response.status);
      return false;
    }
    
    return true;
  } catch (error) {
    if (DEBUG_MODE) console.error('Webhook error:', error);
    return false;
  }
};

export const sendEmail = async (data: EmailData): Promise<void> => {
  if (DEBUG_MODE) console.log('Sending email with data:', data);
  
  const emailJSSuccess = await sendViaEmailJS(data);
  const webhookSuccess = await sendToWebhook(data);
  
  if (DEBUG_MODE) {
    console.log('EmailJS success:', emailJSSuccess);
    console.log('Webhook success:', webhookSuccess);
  }
  
  if (!emailJSSuccess && !webhookSuccess) {
    throw new Error('Failed to send contact form data');
  }
};

export const sendToWebhookOnly = async (data: EmailData): Promise<boolean> => {
  return sendToWebhook(data);
};