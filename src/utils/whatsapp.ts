export const OFFICIAL_PHONE = '+91 8767168411';
export const OFFICIAL_PHONE_DIGITS = '918767168411';

export const WHATSAPP_MESSAGES = {
  fullStack:
    'Hello Pathfinder, I am interested in the Full Stack Development with AI Tools course. Please share the complete curriculum, duration, fees and enrollment details.',
  manualTesting:
    'Hello Pathfinder, I am interested in the Manual Software Testing course. Please share the curriculum, duration and fees.',
  internship:
    'Hello Pathfinder, I would like to know more about the optional internship opportunity and its charges.',
  general:
    'Hello Pathfinder, I would like to know more about your IT training courses.',
} as const;

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${OFFICIAL_PHONE_DIGITS}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message: string): void {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function buildContactFormWhatsAppMessage(data: {
  fullName: string;
  mobileNumber: string;
  emailAddress: string;
  courseInterested: string;
  internshipRequired: string;
  message?: string;
}): string {
  const lines = [
    'Hello Pathfinder,',
    '',
    'I would like to enquire about training at Pathfinder. Here are my details:',
    `• Name: ${data.fullName.trim()}`,
    `• Mobile: ${data.mobileNumber.trim()}`,
    `• Email: ${data.emailAddress.trim()}`,
    `• Course Interested In: ${data.courseInterested}`,
    `• Internship Required: ${data.internshipRequired}`,
  ];

  if (data.message && data.message.trim()) {
    lines.push(`• Message: ${data.message.trim()}`);
  }

  lines.push('', 'Kindly share the relevant course information and admission steps.');
  return lines.join('\n');
}
