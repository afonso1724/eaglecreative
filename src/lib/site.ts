export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgawagby";

export const EMAIL = "eaglecriative@gmail.com";

export const WHATSAPP_NUMBER = "+244 950 620 975";
export const WHATSAPP_URL = `https://wa.me/244950620975?text=${encodeURIComponent(
  "Olá Eagle Criative! Gostaria de falar sobre um projeto.",
)}`;

export const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1D4uPGnntd/",
    kind: "facebook" as const,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/eaglecreative0?igsh=djg0cTJjOWpibGJp",
    kind: "instagram" as const,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@eagle_creative0?_r=1&_t=ZS-98m24juZytA",
    kind: "tiktok" as const,
  },
] as const;
