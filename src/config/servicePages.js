import { hairImages, nailImages } from './portfolio';

// Content for the dedicated service pages under /services/<slug>/.
// Every claim here must stay consistent with contact.js (SERVICES, FAQS)
// and the copy on the home page — do not promise services we don't list.

export const SERVICE_PAGES = [
    {
        slug: 'hair-and-wigs',
        name: 'Hair & Wigs',
        icon: '✂️',
        title: 'Hair Styling, Braids & Wigs in Lagos | Blushing Beauty Studio',
        description:
            'Expert hair styling, protective braids, and wig installation at Blushing Beauty Studio in Orioke, Lagos. Serving Ogudu, Ojota, Ketu & Gbagada. Book on WhatsApp.',
        h1: 'Hair Styling, Braids & Wigs in Lagos',
        lead: 'Luxurious hair transformations, wig installation and styling, and protective braiding — delivered by stylists obsessed with the details.',
        paragraphs: [
            'Your hair is the first thing people notice, and our stylists treat it that way. Whether you want a fresh new look, a flawless wig installation, or protective braids that keep your natural hair healthy, we take the time to understand what suits your face, lifestyle, and routine before we pick up a comb.',
            'From our studio at 48 Agboyi Rd, Orioke, we style clients from Ogudu, Ojota, Ketu, Gbagada, Maryland and across Mainland Lagos. Every appointment ends the same way: you leaving our chair with a look that turns heads.',
        ],
        included: [
            'Wig installation and styling',
            'Protective braiding, including box braids',
            'Luxurious hair transformations and treatments',
            'Routine maintenance and restyling',
        ],
        gallery: hairImages,
        faqs: [
            {
                question: 'Do you install and style wigs?',
                answer:
                    'Yes — wig installation and styling is one of our core services. Bring your unit and we will install, style, and finish it to look natural and last.',
            },
            {
                question: 'Do you do protective braids?',
                answer:
                    'Yes, we specialise in protective braiding, including box braids and layered styles that protect your natural hair while looking stunning.',
            },
            {
                question: 'How do I get a price for my hair appointment?',
                answer:
                    'Message us on WhatsApp at +234 805 745 1244 with the style you want (a photo helps) and we will reply with a personalised quote and available times.',
            },
        ],
    },
    {
        slug: 'nails-and-pedicure',
        name: 'Nails & Pedicure',
        icon: '💅',
        title: 'Manicure, Pedicure & Nail Art in Lagos | Blushing Beauty Studio',
        description:
            'Flawless manicure, pedicure, gel polish, and custom nail art at Blushing Beauty Studio in Orioke, Lagos. Serving Ogudu, Ojota, Ketu & Gbagada. Book on WhatsApp.',
        h1: 'Manicure, Pedicure & Nail Art in Lagos',
        lead: 'Flawless manicure, pedicure, gel polish, and custom nail art — hands and feet that feel as polished as they look.',
        paragraphs: [
            'Great nails are equal parts precision and creativity. Our nail technicians shape, buff, and finish with care, whether you want a clean classic manicure, a long-lasting gel set, or bold custom art in stiletto, almond, or coffin shapes.',
            'We keep our tools and station spotless, and we never rush a set. Visit us at 48 Agboyi Rd, Orioke — minutes from Ogudu, Ojota, Ketu, and Gbagada — and walk out with nails you can’t stop looking at.',
        ],
        included: [
            'Classic manicure and pedicure',
            'Gel polish',
            'Custom nail art — stiletto, almond, and coffin shapes',
            'Finishing care for hands and feet',
        ],
        gallery: nailImages,
        faqs: [
            {
                question: 'Do you do gel polish and custom nail art?',
                answer:
                    'Yes — gel polish and custom nail art are our specialities, from subtle French tips to bold embellished sets.',
            },
            {
                question: 'Can I walk in for nails or do I need to book?',
                answer:
                    'Booking in advance via WhatsApp is recommended to guarantee your preferred time. Walk-ins are welcome subject to availability.',
            },
            {
                question: 'What payment methods do you accept?',
                answer:
                    'We accept cash, bank transfers, and POS card payments in Nigerian Naira (NGN).',
            },
        ],
    },
    {
        slug: 'makeup-and-gele',
        name: 'Makeup & Gele',
        icon: '💄',
        title: 'Bridal Makeup & Gele Tying in Lagos | Blushing Beauty Studio',
        description:
            'Professional bridal and occasion makeup with expert Gele tying at Blushing Beauty Studio in Orioke, Lagos. Bridal packages available. Book on WhatsApp.',
        h1: 'Professional Makeup & Gele Tying in Lagos',
        lead: 'Bridal and occasion makeup paired with expert Gele tying for weddings, photoshoots, and traditional events.',
        paragraphs: [
            'On your big day, everything has to be perfect — and stay perfect through hours of celebration. Our makeup artists build looks that photograph beautifully and last, while our Gele specialists tie crisp, elegant styles that complete any traditional outfit.',
            'We work with brides, wedding parties, and clients attending traditional events across Lagos. Full bridal packages combine hair styling, makeup, and Gele, so you only have one appointment to think about on the morning that matters most.',
        ],
        included: [
            'Bridal makeup and full bridal packages',
            'Occasion and photoshoot makeup',
            'Traditional Gele tying for weddings and ceremonies',
            'Styling for bridal parties',
        ],
        gallery: null,
        faqs: [
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
                question: 'How far in advance should I book for a wedding?',
                answer:
                    'As early as you can — wedding dates fill up quickly. Message us on WhatsApp with your date and we will confirm availability and arrange a consultation.',
            },
        ],
    },
    {
        slug: 'facials-and-skincare',
        name: 'Facials & Skincare',
        icon: '🧖',
        title: 'Facials & Skincare Treatments in Lagos | Blushing Beauty Studio',
        description:
            'Revitalising facials and skincare treatments tailored to your skin type at Blushing Beauty Studio in Orioke, Lagos. Unwind and leave glowing. Book on WhatsApp.',
        h1: 'Revitalising Facials & Skincare in Lagos',
        lead: 'Revitalising facials and complete skincare treatments tailored to your skin type — unwind in our chair and leave glowing.',
        paragraphs: [
            'Healthy skin is the foundation every other beauty service builds on. Our facials cleanse, treat, and refresh, with each session tailored to your skin type rather than a one-size-fits-all routine.',
            'Treat it as self-care: a calm chair, unhurried hands, and skin that thanks you for days afterwards. We are at 48 Agboyi Rd, Orioke — easy to reach from Ogudu, Ojota, Ketu, Gbagada, and Maryland.',
        ],
        included: [
            'Revitalising facials',
            'Complete skincare treatments',
            'Care tailored to your skin type',
            'A relaxing, unhurried studio experience',
        ],
        gallery: null,
        faqs: [
            {
                question: 'Are your facials suited to my skin type?',
                answer:
                    'Yes — every facial and skincare treatment is tailored to your skin type. Tell us about your skin when you book and we will recommend the right treatment.',
            },
            {
                question: 'How do I book a facial?',
                answer:
                    'Send a WhatsApp message to +234 805 745 1244 with your preferred date and time. We reply and confirm during business hours.',
            },
            {
                question: 'What are your opening hours?',
                answer:
                    'Monday to Saturday from 8:00 AM to 7:30 PM, and Sunday from 1:00 PM to 7:00 PM.',
            },
        ],
    },
];

export const servicePath = (slug) => `/services/${slug}/`;
