import React, { useState, useEffect } from 'react';
import  Button  from "../ui/Button";
import { Menu, X, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Agentes', href: '#agentes' },
        { label: 'Benefícios', href: '#beneficios' },
        { label: 'Planos', href: '#planos' },
        { label: 'Sobre', href: '#sobre' },
        { label: 'FAQ', href: '#faq' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-100' 
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3">
                       <img  loading="eager"
  src={isScrolled ? "/site.png" : "/site dark.png"}
  className="h-16 w-auto object-contain" alt="KorynAI Logo"
/>

                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                                    isScrolled ? 'text-slate-600' : 'text-white/80 hover:text-white'
                                }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a 
                            href="#contato" 
                            className={`text-sm font-medium transition-colors ${
                                isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/80 hover:text-white'
                            }`}
                        >
                            Login
                        </a>
                        <Button 
                            className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-full px-6 shadow-lg shadow-blue-500/25"
                        >
                            Agendar Demo
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-slate-900' : 'text-white'}`}
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-slate-100"
                    >
                        <div className="px-6 py-4 space-y-3">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-2 text-slate-600 hover:text-blue-600 font-medium"
                                >
                                    {item.label}
                                </a>
                            ))}
                            <Button className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full mt-4">
                                Agendar Demo
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}