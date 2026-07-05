import { SERVICES } from '../config/contact';
import { SERVICE_PAGES, servicePath } from '../config/servicePages';

const pagePathByName = new Map(SERVICE_PAGES.map(({ name, slug }) => [name, servicePath(slug)]));

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-label">What We Do</span>
                    <h2>Services we offer in Lagos</h2>
                    <p>Personalised, breathtaking results across hair, nails, makeup, and skincare.</p>
                </div>

                <div className="services-grid">
                    {SERVICES.map(({ icon, name, description }) => (
                        <article key={name} className="service-card">
                            <span className="service-icon" aria-hidden="true">{icon}</span>
                            <h3>{name}</h3>
                            <p>{description}</p>
                            {pagePathByName.has(name) && (
                                <a className="service-card-link" href={pagePathByName.get(name)}>
                                    Learn more<span aria-hidden="true"> →</span>
                                    <span className="sr-only"> about {name}</span>
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
