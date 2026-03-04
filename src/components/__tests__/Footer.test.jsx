import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
    it('renders the brand name', () => {
        render(<Footer />);
        expect(screen.getByText('Blushing Beauty')).toBeInTheDocument();
    });

    // --- WhatsApp ---
    it('displays the correct WhatsApp number', () => {
        render(<Footer />);
        expect(screen.getByText('+234 805 745 1244')).toBeInTheDocument();
    });

    it('WhatsApp link has correct href', () => {
        render(<Footer />);
        const whatsappLink = screen.getByText('+234 805 745 1244').closest('a');
        expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/2348057451244');
    });

    // --- Instagram ---
    it('displays the correct Instagram handle', () => {
        render(<Footer />);
        expect(screen.getByText('@blushingbeautyhub')).toBeInTheDocument();
    });

    it('Instagram link has correct href', () => {
        render(<Footer />);
        const igLink = screen.getByText('@blushingbeautyhub').closest('a');
        expect(igLink).toHaveAttribute('href', 'https://instagram.com/blushingbeautyhub');
    });

    // --- TikTok ---
    it('displays the correct TikTok handle', () => {
        render(<Footer />);
        expect(screen.getByText('@blushlingbeautyhub')).toBeInTheDocument();
    });

    it('TikTok link has correct href', () => {
        render(<Footer />);
        const ttLink = screen.getByText('@blushlingbeautyhub').closest('a');
        expect(ttLink).toHaveAttribute('href', 'https://tiktok.com/@blushlingbeautyhub');
    });

    // --- Address ---
    it('displays the correct address', () => {
        render(<Footer />);
        expect(screen.getByText(/48 Agboyi Rd, Orioke, Lagos 100242/i)).toBeInTheDocument();
    });

    it('address link opens Google Maps with directions', () => {
        render(<Footer />);
        const addressLink = screen.getByText(/48 Agboyi Rd/i).closest('a');
        expect(addressLink.getAttribute('href')).toContain('google.com/maps/dir');
        expect(addressLink.getAttribute('href')).toContain('Agboyi');
    });

    // --- Working Hours ---
    it('displays Monday-Saturday hours', () => {
        render(<Footer />);
        expect(screen.getByText(/8:00 AM – 7:30 PM/)).toBeInTheDocument();
    });

    it('displays Sunday hours', () => {
        render(<Footer />);
        expect(screen.getByText(/1:00 PM – 7:00 PM/)).toBeInTheDocument();
    });

    // --- Navigation ---
    it('renders footer navigation links', () => {
        render(<Footer />);
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('About Us')).toBeInTheDocument();
        expect(screen.getByText('Our Work')).toBeInTheDocument();
    });

    // --- Social Icons (SVGs) ---
    it('has social icon links in the footer', () => {
        render(<Footer />);
        const whatsappIcon = screen.getByTitle('WhatsApp');
        const igIcon = screen.getByTitle('Instagram');
        const ttIcon = screen.getByTitle('TikTok');
        expect(whatsappIcon).toBeInTheDocument();
        expect(igIcon).toBeInTheDocument();
        expect(ttIcon).toBeInTheDocument();
    });

    // --- Copyright ---
    it('displays the current year in copyright', () => {
        render(<Footer />);
        const year = new Date().getFullYear().toString();
        expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
    });
});
