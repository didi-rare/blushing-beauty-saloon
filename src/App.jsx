import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesList from './components/ServicesList';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
    return (
        <div className="app-container">
            <Header />
            <main>
                <Hero />
                <ServicesList />
                <Gallery />
            </main>
            <Footer />
        </div>
    );
}

export default App;
