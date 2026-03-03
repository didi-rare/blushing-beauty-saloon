import React from 'react';
import '../styles/components.css';

const ServiceCard = ({ title, imgUrl, priceList, type = 'hair' }) => {
    return (
        <div className="service-card glass-card">
            <div className={`service-card-header bg-${type}`}>
                <h3>{title}</h3>
            </div>
            <div className="service-card-body">
                <ul className="price-list">
                    {priceList.map((item, index) => (
                        <li key={index} className="price-item">
                            <span className="price-name">{item.name}</span>
                            <span className="price-dots"></span>
                            <span className="price-amount">&#8358;{item.price.toLocaleString()}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServiceCard;
