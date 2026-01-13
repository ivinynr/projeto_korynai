import React from 'react';
import { motion } from 'framer-motion';
import { 
    Zap, 
    TrendingUp, 
    Clock, 
    Shield, 
    Puzzle, 
    HeadphonesIcon,
    ArrowUpRight
} from 'lucide-react';

const benefits = [
    {
        icon: Zap,
        title: 'Resposta Instantânea',
        description: 'Seus leads nunca mais esperam. Respostas em segundos, 24 horas por dia, 7 dias por semana.',
        stat: '< 5 seg',
        statLabel: 'tempo de resposta'
    },
    {
        icon: TrendingUp,
        title: 'Aumento de Conversão',
        description: 'Leads bem atendidos convertem mais. Nossa IA garante qualificação precisa e follow-up consistente.',
        stat: '+300%',
        statLabel: 'em conversões'
    },
    {
        icon: Clock,
        title: 'Economia de Tempo',
        description: 'Libere sua equipe para fechar negócios. A IA cuida do trabalho repetitivo.',
        stat: '40h',
        statLabel: 'economizadas/semana'
    },
    {
        icon: Shield,
        title: 'Segurança Total',
        description: 'Dados criptografados e conformidade com LGPD. Sua informação sempre protegida.',
        stat: '100%',
        statLabel: 'compliance LGPD'
    },
    {
        icon: Puzzle,
        title: 'Integração Fácil',
        description: 'Conecta com seu CRM, WhatsApp, email e mais de 100 ferramentas em minutos.',
        stat: '100+',
        statLabel: 'integrações'
    },
    {
        icon: HeadphonesIcon,
        title: 'Suporte Dedicado',
        description: 'Time de especialistas disponível para ajudar você a extrair o máximo da plataforma.',
        stat: '24/7',
        statLabel: 'suporte disponível'
    },
];

export default function Benefits() {
    return (
        <section id="beneficios" className="py-24 lg:py-32 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium mb-4">
                        Por que nos escolher
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Resultados reais para
                        <span className="block text-emerald-600">seu negócio</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Mais de 500 empresas já transformaram suas vendas com nossos agentes de IA. 
                        Veja o que você ganha.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-2xl p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 border border-slate-100"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                    <benefit.icon className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors" />
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 transition-colors" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {benefit.description}
                            </p>

                            <div className="pt-6 border-t border-slate-100">
                                <div className="text-2xl font-bold text-blue-600">
                                    {benefit.stat}
                                </div>
                                <div className="text-sm text-slate-500">
                                    {benefit.statLabel}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}