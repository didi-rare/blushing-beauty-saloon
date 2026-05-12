export const SITE_URL = 'https://www.blushingbeauty.studio';
export const SITE_NAME = 'Blushing Beauty Studio';

export const WHATSAPP_NUMBER = '2348057451244';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_DISPLAY = '+234 805 745 1244';

export const INSTAGRAM_HANDLE = 'blushingbeautyhub';
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export const TIKTOK_HANDLE = 'blushingbeautyhub';
export const TIKTOK_URL = `https://tiktok.com/@${TIKTOK_HANDLE}`;

export const ADDRESS_LINE = '48 Agboyi Rd, Orioke, Lagos 100242';
const ADDRESS_QUERY = encodeURIComponent('Blushing Beauty Studio, 48 Agboyi Rd, Orioke, Lagos 100242');
// Opens Maps showing the location with a pin (Google's UI then offers a "Directions" button)
export const MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${ADDRESS_QUERY}`;
// Opens Maps in directions mode (auto-fills user's current location as origin)
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${ADDRESS_QUERY}`;
// Embed URL: iwloc=A forces an info-window marker; including the business name + address improves geocoding precision
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${ADDRESS_QUERY}&z=17&output=embed&iwloc=A`;

export const HOURS = [
    { label: 'Mon – Sat', time: '8:00 AM – 7:30 PM' },
    { label: 'Sunday', time: '1:00 PM – 7:00 PM' },
];
