import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price);
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return `${text.substring(0, length)}...`;
}

export function generateWhatsAppLink(productId: string, productName: string): string {
  const message = encodeURIComponent(`Hello! I'm interested in purchasing the saree: ${productName} (ID: ${productId}). Could you provide more details?`);
  // Replace with your actual WhatsApp number
  const phoneNumber = "919999999999"; // Format: country code + number without +
  
  return `https://wa.me/${phoneNumber}?text=${message}`;
}
