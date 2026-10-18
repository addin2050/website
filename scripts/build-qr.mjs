// Builds public/call-qr.svg (dials) and public/whatsapp-qr.svg (opens WhatsApp chat) from src/data.js.
import QRCode from 'qrcode';
import { writeFileSync } from 'node:fs';
import { profile } from '../src/data.js';

const make = (text) => QRCode.toString(text, {
  type: 'svg', margin: 2, errorCorrectionLevel: 'M',
  color: { dark: '#0b0d0c', light: '#ffffff' },
});
writeFileSync('public/call-qr.svg', await make(`tel:${profile.phoneLink}`));
writeFileSync('public/whatsapp-qr.svg', await make(profile.whatsapp));
console.log('Wrote call-qr.svg and whatsapp-qr.svg for', profile.phoneLink);
