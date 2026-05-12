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
// Verified coordinates of the salon. Used in Maps URLs because the textual
// address geocodes to a nearby-but-wrong spot in Google's index.
const LAT = 6.574422615930472;
const LNG = 3.4006385864415036;
const COORDS = `${LAT},${LNG}`;
export const MAPS_SEARCH_URL = `https://www.google.com/maps/search/?api=1&query=${COORDS}`;
export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${COORDS}`;
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${COORDS}&z=17&output=embed&iwloc=A`;

export const HOURS = [
    { label: 'Mon – Sat', time: '8:00 AM – 7:30 PM' },
    { label: 'Sunday', time: '1:00 PM – 7:00 PM' },
];

// Bump when meaningful content changes — surfaces a freshness signal in the footer.
export const SITE_LAST_UPDATED = '2026-05-12';

// Keep in sync with the BeautySalon.hasOfferCatalog block in index.html.
export const SERVICES = [
    {
        icon: '✂️',
        name: 'Hair & Wigs',
        description:
            'Luxurious hair transformations, wig installation and styling, protective braiding, and treatments. Whether you want a fresh new look or routine maintenance, our stylists deliver results that turn heads.',
    },
    {
        icon: '💅',
        name: 'Nails & Pedicure',
        description:
            'Flawless manicure, pedicure, gel polish, and custom nail art. Walk out with hands and feet that feel as polished as they look.',
    },
    {
        icon: '💄',
        name: 'Makeup & Gele',
        description:
            'Professional makeup for weddings, photoshoots, and special occasions, paired with expert Gele tying for traditional events. Bridal packages available.',
    },
    {
        icon: '🧖',
        name: 'Facials & Skincare',
        description:
            'Revitalising facials and complete skincare treatments tailored to your skin type. Unwind in our chair and leave glowing.',
    },
];

// Keep in sync with the FAQPage JSON-LD block in index.html.
export const FAQS = [
    {
        question: 'What services does Blushing Beauty Studio offer?',
        answer:
            'Hair styling and wigs, manicure and pedicure, professional makeup and Gele tying, and revitalising facials. We serve clients across Lagos from our studio at 48 Agboyi Rd, Orioke.',
    },
    {
        question: 'Where is Blushing Beauty Studio located?',
        answer:
            '48 Agboyi Rd, Orioke, Lagos 100242, Nigeria. We are easily accessible from Ogudu, Ojota, Ketu, Gbagada, Maryland and the wider Mainland Lagos area.',
    },
    {
        question: 'How do I book an appointment?',
        answer:
            'Send a WhatsApp message to +234 805 745 1244 with the service you want and your preferred date and time. We reply and confirm during business hours.',
    },
    {
        question: 'What are your opening hours?',
        answer:
            'Monday to Saturday from 8:00 AM to 7:30 PM, and Sunday from 1:00 PM to 7:00 PM.',
    },
    {
        question: 'Do you tie Gele for weddings and traditional events?',
        answer:
            'Yes — Gele tying is one of our specialities. We work with brides, wedding parties, and clients attending traditional events to create stunning Gele styles paired with full makeup.',
    },
    {
        question: 'Do you do bridal hair and makeup?',
        answer:
            'Yes, we offer full bridal packages including hair styling, makeup, and Gele. Contact us via WhatsApp to discuss your wedding date and book a consultation.',
    },
    {
        question: 'Can I walk in or do I need to book in advance?',
        answer:
            'Booking in advance via WhatsApp is recommended to guarantee your preferred time. Walk-ins are welcome subject to availability.',
    },
    {
        question: 'What payment methods do you accept?',
        answer:
            'Cash, bank transfers, and POS card payments in Nigerian Naira (NGN).',
    },
];
