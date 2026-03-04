import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import PortfolioGallery from '../PortfolioGallery';

describe('PortfolioGallery Component', () => {
    it('renders the section heading', () => {
        render(<PortfolioGallery />);
        expect(screen.getByText('Signature Creations')).toBeInTheDocument();
    });

    it('renders the "Our Work" label', () => {
        render(<PortfolioGallery />);
        expect(screen.getByText('Our Work')).toBeInTheDocument();
    });

    it('renders all 3 tab filters', () => {
        render(<PortfolioGallery />);
        expect(screen.getByText('All Work')).toBeInTheDocument();
        expect(screen.getByText('Hair & Wigs')).toBeInTheDocument();
        expect(screen.getByText('Nails')).toBeInTheDocument();
    });

    it('shows all items when "All Work" tab is active', () => {
        render(<PortfolioGallery />);
        // 4 hair + 9 nails = 13 total images
        const images = screen.getAllByRole('img');
        expect(images.length).toBe(13);
    });

    it('filters to only hair images when "Hair & Wigs" tab is clicked', () => {
        render(<PortfolioGallery />);
        fireEvent.click(screen.getByText('Hair & Wigs'));
        const images = screen.getAllByRole('img');
        expect(images.length).toBe(4);
    });

    it('filters to only nail images when "Nails" tab is clicked', () => {
        render(<PortfolioGallery />);
        fireEvent.click(screen.getByText('Nails'));
        const images = screen.getAllByRole('img');
        expect(images.length).toBe(9);
    });

    it('has a WhatsApp booking CTA', () => {
        render(<PortfolioGallery />);
        const bookingLink = screen.getByText('Book Your Appointment');
        expect(bookingLink.closest('a')).toHaveAttribute('href', 'https://wa.me/2348057451244');
    });

    it('all images use lazy loading', () => {
        render(<PortfolioGallery />);
        const images = screen.getAllByRole('img');
        images.forEach(img => {
            expect(img).toHaveAttribute('loading', 'lazy');
        });
    });
});
