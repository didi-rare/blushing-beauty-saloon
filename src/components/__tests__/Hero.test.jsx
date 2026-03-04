import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero Component', () => {
    it('renders the studio name', () => {
        render(<Hero />);
        expect(screen.getByText('Blushing Beauty Studio')).toBeInTheDocument();
    });

    it('renders the brand tagline', () => {
        render(<Hero />);
        expect(screen.getByText(/Where Professionalism Meets Perfection/i)).toBeInTheDocument();
    });

    it('renders the "Welcome to" label', () => {
        render(<Hero />);
        expect(screen.getByText('Welcome to')).toBeInTheDocument();
    });

    it('has a WhatsApp booking CTA with correct number', () => {
        render(<Hero />);
        const whatsappLink = screen.getByText('Book via WhatsApp');
        expect(whatsappLink).toBeInTheDocument();
        expect(whatsappLink.closest('a')).toHaveAttribute('href', 'https://wa.me/2348057451244');
    });

    it('has a "View Our Work" CTA linking to portfolio', () => {
        render(<Hero />);
        const viewWorkLink = screen.getByText('View Our Work');
        expect(viewWorkLink).toBeInTheDocument();
        expect(viewWorkLink.closest('a')).toHaveAttribute('href', '#portfolio');
    });

    it('opens WhatsApp link in a new tab', () => {
        render(<Hero />);
        const whatsappLink = screen.getByText('Book via WhatsApp').closest('a');
        expect(whatsappLink).toHaveAttribute('target', '_blank');
        expect(whatsappLink).toHaveAttribute('rel', 'noreferrer');
    });
});
