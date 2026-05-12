import { SERVICES } from '../config/contact';

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
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
