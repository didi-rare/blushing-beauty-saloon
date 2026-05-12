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
        const handles = screen.getAllByText('@blushingbeautyhub');
        expect(handles.length).toBeGreaterThanOrEqual(1);
    });

    it('Instagram link has correct href', () => {
        render(<Footer />);
        const igLink = screen.getByRole('link', { name: /Instagram/i });
        expect(igLink).toHaveAttribute('href', 'https://instagram.com/blushingbeautyhub');
    });

    // --- TikTok ---
    it('displays the correct TikTok handle', () => {
        render(<Footer />);
        const handles = screen.getAllByText('@blushingbeautyhub');
        expect(handles.length).toBeGreaterThanOrEqual(2); // Instagram + TikTok use the same handle
    });

    it('TikTok link has correct href', () => {
        render(<Footer />);
        const tiktokLink = screen.getByRole('link', { name: /TikTok/i });
        expect(tiktokLink).toHaveAttribute('href', 'https://tiktok.com/@blushingbeautyhub');
    });

    // --- Address ---
    it('displays the correct address', () => {
        render(<Footer />);
        expect(screen.getByText(/48 Agboyi Rd, Orioke, Lagos 100242/i)).toBeInTheDocument();
    });

    it('address link opens Google Maps showing the location (search, not directions)', () => {
        render(<Footer />);
        const addressLink = screen.getByText(/48 Agboyi Rd/i).closest('a');
        expect(addressLink.getAttribute('href')).toContain('google.com/maps/search');
        expect(addressLink.getAttribute('href')).toMatch(/6\.5744/);
    });

    it('has a separate Get Directions link that uses Maps directions mode', () => {
        render(<Footer />);
        const dirLink = screen.getByText(/Get Directions/i).closest('a');
        expect(dirLink.getAttribute('href')).toContain('google.com/maps/dir');
        expect(dirLink.getAttribute('href')).toMatch(/6\.5744/);
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
    it('has accessible social icon links in the footer', () => {
        render(<Footer />);
        const whatsappIcon = screen.getByRole('link', { name: /WhatsApp/i });
        const igIcon = screen.getByRole('link', { name: /Instagram/i });
        const ttIcon = screen.getByRole('link', { name: /TikTok/i });
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
