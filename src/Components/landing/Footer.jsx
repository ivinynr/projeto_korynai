import React from 'react';
import { Bot, Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const footerLinks = {
    produto: [
        { label: 'Agentes de IA', href: '#agentes' },
        { label: 'Planos', href: '#planos' },
        { label: 'Integrações', href: '#' },
        { label: 'Casos de Uso', href: '#' },
    ],
    empresa: [
        { label: 'Sobre Nós', href: '#sobre' },
        { label: 'Blog', href: '#' },
        { label: 'Carreiras', href: '#' },
        { label: 'Contato', href: '#contato' },
    ],
    recursos: [
        { label: 'Central de Ajuda', href: '#' },
        { label: 'Documentação', href: '#' },
        { label: 'Status', href: '#' },
        { label: 'API', href: '#' },
    ],
    legal: [
        { label: 'Termos de Uso', href: '#' },
        { label: 'Privacidade', href: '#' },
        { label: 'Cookies', href: '#' },
        { label: 'LGPD', href: '#' },
    ],
};

const socials = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                {/* Top Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
                        <a href="#" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                                <Bot className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">NexusAI</span>
                        </a>
                        <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                            Transformando vendas com inteligência artificial. 
                            Automatize, escale e conquiste mais clientes.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Produto</h4>
                        <ul className="space-y-3">
                            {footerLinks.produto.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Empresa</h4>
                        <ul className="space-y-3">
                            {footerLinks.empresa.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Recursos</h4>
                        <ul className="space-y-3">
                            {footerLinks.recursos.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">
                        © 2024 NexusAI. Todos os direitos reservados.
                    </p>
                    <p className="text-sm text-slate-500">
                        Feito com 💜 no Brasil
                    </p>
                </div>
            </div>
        </footer>
    );
}