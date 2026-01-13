import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Ricardo Mendes',
        role: 'CEO',
        company: 'TechSales Brasil',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        content: 'Triplicamos nossas conversões em 3 meses. O agente de chat responde mais rápido que qualquer humano e nunca perde um lead.',
        rating: 5,
    },
    {
        name: 'Carla Souza',
        role: 'Diretora Comercial',
        company: 'InovaCorp',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
        content: 'Finalmente minha equipe pode focar em fechar negócios. A IA cuida de toda qualificação inicial e agendamento.',
        rating: 5,
    },
    {
        name: 'Fernando Lima',
        role: 'Founder',
        company: 'StartupFlow',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        content: 'O ROI foi absurdo. Em 2 meses já havia se pago. Hoje não consigo imaginar operar sem os agentes NexusAI.',
        rating: 5,
    },
    {
        name: 'Ana Paula Costa',
        role: 'Head de Vendas',
        company: 'MegaStore',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        content: 'Passamos de 50 para 200 atendimentos por dia sem aumentar a equipe. Qualidade e escala na mesma solução.',
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 lg:py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-amber-50 text-amber-600 text-sm font-medium mb-4">
                        Depoimentos
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        O que nossos clientes
                        <span className="block text-amber-600">estão dizendo</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Empresas reais com resultados reais. Veja como a NexusAI transformou suas vendas.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 border border-slate-100"
                        >
                            {/* Quote Icon */}
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                                <Quote className="w-5 h-5 text-blue-600" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-slate-700 text-lg leading-relaxed mb-8">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-slate-900">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-slate-500">
                                        {testimonial.role} • {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Logos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <p className="text-sm text-slate-500 mb-8">
                        Empresas que confiam na NexusAI
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
                        {['TechCorp', 'InovaSoft', 'DataFlow', 'CloudBase', 'SmartSales'].map((company) => (
                            <div key={company} className="text-2xl font-bold text-slate-400">
                                {company}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}