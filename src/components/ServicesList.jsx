import React from 'react';
import ServiceCard from './ServiceCard';
import '../styles/components.css';

const ServicesList = () => {
    // Data explicitly extracted from the Provided User Flyers
    const hairServices = [
        { name: 'Washing', price: 2000 },
        { name: 'Loosing', price: 1000 },
        { name: 'Loosing (Attachment)', price: 2500 },
        { name: 'Relaxing', price: 3500 },
        { name: 'Weaving (All back/DIDI)', price: 2500 },
        { name: 'Knotless Braid - Small', price: 12000 },
        { name: 'Knotless Braid - Big', price: 10000 },
        { name: 'Packing Gel', price: 6000 }
    ];

    const nailServices = [
        { name: 'Painting', price: 1000 },
        { name: 'Removing of painting', price: 500 },
        { name: 'Painting on toes', price: 1000 },
        { name: 'Gel polish painting', price: 2000 },
        { name: 'Painting on fixed nails', price: 3500 },
        { name: 'Gel painting on fixed nails', price: 4500 },
        { name: 'Powder nails short', price: 10000 },
        { name: 'Powder nail long', price: 14000 },
        { name: 'Pedicure', price: 10000 },
        { name: 'Pedicure and manicure', price: 13000 }
    ];

    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header">
                    <h2>Our Premium Services</h2>
                    <p>Explore our bespoke hair and nail treatments.</p>
                </div>

                <div className="services-grid">
                    <ServiceCard
                        title="Hair Services"
                        type="hair"
                        priceList={hairServices}
                    />
                    <ServiceCard
                        title="Nail Services"
                        type="nails"
                        priceList={nailServices}
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesList;
