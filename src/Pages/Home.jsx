import React from 'react';
import Navbar from '../Components/landing/Navbar';
import Hero from '../Components/landing/Hero';
import Agents from '../Components/landing/Agents';
import Benefits from '../Components/landing/Benefits';
import Pricing from '../Components/landing/Pricing';
import About from '../Components/landing/About';
import Testimonials from '../Components/landing/Testimonials';
import FAQ from '../Components/landing/FAQ';
import Contact from '../Components/landing/Contact';
import Footer from '../Components/landing/Footer';

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <Agents />
            <Benefits />
            <Testimonials />
            <Pricing />
            <About />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    );
}