import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header Component', () => {
    it('renders the brand name', () => {
        render(<Header />);
        expect(screen.getByText('Blushing Beauty')).toBeInTheDocument();
        expect(screen.getByText('Studio')).toBeInTheDocument();
    });

    it('renders all navigation links', () => {
        render(<Header />);
        // Desktop nav has Home, About, Portfolio, Contact; Mobile nav duplicates them
        const homeLinks = screen.getAllByText('Home');
        const aboutLinks = screen.getAllByText('About');
        const portfolioLinks = screen.getAllByText('Portfolio');
        const contactLinks = screen.getAllByText('Contact');
        expect(homeLinks.length).toBeGreaterThanOrEqual(1);
        expect(aboutLinks.length).toBeGreaterThanOrEqual(1);
        expect(portfolioLinks.length).toBeGreaterThanOrEqual(1);
        expect(contactLinks.length).toBeGreaterThanOrEqual(1);
    });

    it('has a "Book Now" CTA linking to WhatsApp', () => {
        render(<Header />);
        const bookNowLink = screen.getByText('Book Now');
        expect(bookNowLink.closest('a')).toHaveAttribute('href', 'https://wa.me/2348057451244');
    });

    it('has nav links pointing to correct sections', () => {
        render(<Header />);
        const homeLinks = screen.getAllByText('Home');
        expect(homeLinks[0].closest('a')).toHaveAttribute('href', '#home');

        const aboutLinks = screen.getAllByText('About');
        expect(aboutLinks[0].closest('a')).toHaveAttribute('href', '#about');
    });

    it('renders the hamburger menu button', () => {
        render(<Header />);
        const hamburger = screen.getByLabelText('Toggle menu');
        expect(hamburger).toBeInTheDocument();
    });

    it('has mobile nav WhatsApp CTA', () => {
        render(<Header />);
        const mobileBookLinks = screen.getAllByText('Book via WhatsApp');
        expect(mobileBookLinks.length).toBeGreaterThanOrEqual(1);
        expect(mobileBookLinks[0].closest('a')).toHaveAttribute('href', 'https://wa.me/2348057451244');
    });
});
