import ExternalLink from '../components/ExternalLink';
import { WHATSAPP_URL } from '../config/contact';
import { SERVICE_PAGES, servicePath } from '../config/servicePages';

const ServicePage = ({ page }) => {
    const related = SERVICE_PAGES.filter(({ slug }) => slug !== page.slug);

    return (
        <>
            <section className="service-hero">
                <div className="container">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                        <a href="/">Home</a> <span aria-hidden="true">›</span>{' '}
                        <a href="/#services">Services</a> <span aria-hidden="true">›</span>{' '}
                        <span aria-current="page">{page.name}</span>
                    </nav>
                    <span className="hero-label">{page.name}</span>
                    <h1>{page.h1}</h1>
                    <p className="hero-tagline">{page.lead}</p>
                    <div className="hero-buttons">
                        <ExternalLink href={WHATSAPP_URL} className="btn btn-primary">
                            Book via WhatsApp
                        </ExternalLink>
                    </div>
                </div>
            </section>

            <section className="service-body-section">
                <div className="container service-body">
                    {page.paragraphs.map((text) => (
                        <p key={text}>{text}</p>
                    ))}

                    <h2>What&rsquo;s included</h2>
                    <ul className="service-included">
                        {page.included.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {page.gallery && (
                <section className="portfolio-section">
                    <div className="container">
                        <div className="section-header">
                            <span className="section-label">Our Work</span>
                            <h2>Recent {page.name} looks</h2>
                        </div>
                        <div className="gallery-grid">
                            {page.gallery.map((item) => (
                                <ExternalLink
                                    key={item.src}
                                    href={WHATSAPP_URL}
                                    className="gallery-item"
                                    ariaLabel={`Book this look on WhatsApp: ${item.alt}`}
                                >
                                    <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                                    <div className="gallery-item-overlay" aria-hidden="true">
                                        <span>Book This Look →</span>
                                    </div>
                                </ExternalLink>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="faq-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-label">Questions</span>
                        <h2>{page.name} FAQs</h2>
                    </div>
                    <div className="faq-list">
                        {page.faqs.map(({ question, answer }, index) => (
                            <details key={question} className="faq-item" open={index === 0}>
                                <summary>{question}</summary>
                                <div className="faq-answer">{answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="service-body-section">
                <div className="container service-body">
                    <h2>Other services at Blushing Beauty Studio</h2>
                    <ul className="service-related">
                        {related.map(({ slug, name, icon }) => (
                            <li key={slug}>
                                <a href={servicePath(slug)}>
                                    <span aria-hidden="true">{icon}</span> {name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="cta-section" aria-labelledby="cta-heading">
                <div className="container cta-content">
                    <h2 id="cta-heading">Ready when you are</h2>
                    <p>Message us on WhatsApp with the look you want and your preferred time — we confirm during business hours.</p>
                    <ExternalLink href={WHATSAPP_URL} className="btn btn-primary">
                        Book on WhatsApp
                    </ExternalLink>
                </div>
            </section>
        </>
    );
};

export default ServicePage;
