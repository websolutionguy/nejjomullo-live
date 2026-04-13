import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

export const sendEmail = async (templateParams: Record<string, any>) => {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error('EmailJS configuration is missing');
    return { success: false, error: 'Configuration missing' };
  }

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};
