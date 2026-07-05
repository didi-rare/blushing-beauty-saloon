import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import PortfolioGallery from '../components/PortfolioGallery';
import FAQ from '../components/FAQ';
import ExternalLink from '../components/ExternalLink';
import { WHATSAPP_URL } from '../config/contact';

const Home = () => (
    <>
        <Hero />
        <AboutUs />
        <Services />
        <PortfolioGallery />
        <FAQ />

        <section className="cta-section" aria-labelledby="cta-heading">
            <div className="container cta-content">
                <h2 id="cta-heading">Love What You See?</h2>
                <p>Contact us directly on WhatsApp to get a personalized quote or book your next look.</p>
                <ExternalLink href={WHATSAPP_URL} className="btn btn-primary">
                    Book on WhatsApp
                </ExternalLink>
            </div>
        </section>
    </>
);

export default Home;
