/**
 * Strips HTML tags and encodes characters that could be used for XSS.
 * Applied to all user-supplied text at form submission boundaries.
 */
export function sanitizeText(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
}

/** Trim and enforce max length on a field. */
export function sanitizeField(input: string, maxLength = 500): string {
  return sanitizeText(input).slice(0, maxLength);
}

/** Validate an email address format. */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
