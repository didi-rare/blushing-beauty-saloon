import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutUs from '../AboutUs';

describe('AboutUs Component', () => {
    it('renders the section heading', () => {
        render(<AboutUs />);
        expect(screen.getByText('Your Beauty, Our Passion')).toBeInTheDocument();
    });

    it('renders the "Our Story" label', () => {
        render(<AboutUs />);
        expect(screen.getByText('Our Story')).toBeInTheDocument();
    });

    it('mentions the founding year', () => {
        render(<AboutUs />);
        expect(screen.getByText(/Founded in January 2022/i)).toBeInTheDocument();
    });

    it('mentions personalized results', () => {
        render(<AboutUs />);
        expect(screen.getByText(/personalized, breathtaking results/i)).toBeInTheDocument();
    });

    it('renders the "3+ Years of Excellence" badge', () => {
        render(<AboutUs />);
        expect(screen.getByText('3+')).toBeInTheDocument();
        expect(screen.getByText('Years of Excellence')).toBeInTheDocument();
    });

    it('renders all 4 service features', () => {
        render(<AboutUs />);
        expect(screen.getByText('Hair & Wigs')).toBeInTheDocument();
        expect(screen.getByText('Nails & Pedicure')).toBeInTheDocument();
        expect(screen.getByText('Makeup & Gele')).toBeInTheDocument();
        expect(screen.getByText('Facials & Skincare')).toBeInTheDocument();
    });

    it('uses a local portfolio image, not an external URL', () => {
        render(<AboutUs />);
        const img = screen.getByAltText('Inside Blushing Beauty Studio');
        expect(img).toBeInTheDocument();
        expect(img.getAttribute('src')).toMatch(/^\/portfolio\//);
        expect(img.getAttribute('src')).not.toMatch(/unsplash/);
    });
});
