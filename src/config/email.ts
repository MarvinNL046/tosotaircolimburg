import emailjs from '@emailjs/browser';

// Get EmailJS configuration from environment variables
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';

// Initialize EmailJS with your public key
if (publicKey) {
  emailjs.init(publicKey);
}

export const emailConfig = {
  serviceId,
  templateId,
  publicKey
} as const;

// Validate configuration
if (!serviceId || !templateId || !publicKey) {
  console.warn('EmailJS configuration is incomplete. Please check your environment variables.');
}
