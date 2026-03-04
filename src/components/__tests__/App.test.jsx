import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../App';

// Mock IntersectionObserver for scroll-reveal
const mockObserve = vi.fn();
const mockDisconnect = vi.fn();
vi.stubGlobal('IntersectionObserver', vi.fn(() => ({
    observe: mockObserve,
    disconnect: mockDisconnect,
    unobserve: vi.fn(),
})));

describe('App Component', () => {
    it('renders the Hero section', () => {
        render(<App />);
        expect(screen.getByText('Blushing Beauty Studio')).toBeInTheDocument();
    });

    it('renders the About Us section', () => {
        render(<App />);
        expect(screen.getByText('Your Beauty, Our Passion')).toBeInTheDocument();
    });

    it('renders the Portfolio section', () => {
        render(<App />);
        expect(screen.getByText('Signature Creations')).toBeInTheDocument();
    });

    it('renders the CTA banner', () => {
        render(<App />);
        expect(screen.getByText('Love What You See?')).toBeInTheDocument();
    });

    it('renders the Footer', () => {
        render(<App />);
        expect(screen.getByText(/Blushing Beauty Studio. All rights reserved/i)).toBeInTheDocument();
    });

    it('initializes the IntersectionObserver for scroll-reveal', () => {
        render(<App />);
        expect(IntersectionObserver).toHaveBeenCalled();
        expect(mockObserve).toHaveBeenCalled();
    });
});
