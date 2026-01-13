import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Rocket } from 'lucide-react';

const stats = [
    { value: '500+', label: 'Empresas atendidas' },
    { value: '2M+', label: 'Leads qualificados' },
    { value: '98%', label: 'Satisfação do cliente' },
    { value: '50+', label: 'Especialistas em IA' },
];

const values = [
    {
        icon: Target,
        title: 'Foco em Resultados',
        description: 'Cada decisão é guiada pelo impacto real no seu negócio.'
    },
    {
        icon: Heart,
        title: 'Obsessão pelo Cliente',
        description: 'Seu sucesso é nosso sucesso. Estamos juntos em cada etapa.'
    },
    {
        icon: Rocket,
        title: 'Inovação Constante',
        description: 'Sempre na fronteira da tecnologia para oferecer o melhor.'
    },
];

export default function About() {
    return (
        <section id="sobre" className="py-24 lg:py-32 bg-slate-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-blue-400 text-sm font-medium mb-6">
                            Sobre a NexusAI
                        </span>
                        
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Transformando o futuro
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                                das vendas com IA
                            </span>
                        </h2>

                        <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                            Nascemos da frustração de ver empresas perdendo oportunidades por falta de agilidade 
                            no atendimento. Desde 2021, desenvolvemos agentes de IA que trabalham incansavelmente 
                            para que você possa focar no que realmente importa: fechar negócios.
                        </p>

                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            Nossa missão é democratizar o acesso à inteligência artificial para equipes comerciais 
                            de todos os tamanhos. Com tecnologia proprietária e uma equipe de especialistas, 
                            entregamos resultados reais e mensuráveis.
                        </p>

                        {/* Mission & Vision */}
                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                                    <Target className="w-5 h-5 text-blue-400" />
                                </div>
                                <h4 className="font-semibold mb-2">Nossa Missão</h4>
                                <p className="text-sm text-slate-400">
                                    Empoderar equipes de vendas com IA acessível e eficiente.
                                </p>
                            </div>
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center mb-4">
                                    <Eye className="w-5 h-5 text-violet-400" />
                                </div>
                                <h4 className="font-semibold mb-2">Nossa Visão</h4>
                                <p className="text-sm text-slate-400">
                                    Ser referência global em automação comercial inteligente.
                                </p>
                            </div>
                        </div>

                        {/* Values */}
                        <div className="space-y-4">
                            {values.map((value) => (
                                <div key={value.title} className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <value.icon className="w-4 h-4 text-white/70" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white mb-1">{value.title}</h4>
                                        <p className="text-sm text-slate-400">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats & Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-violet-600/20 rounded-3xl blur-3xl" />
                        
                        {/* Stats Grid */}
                        <div className="relative grid grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 text-center hover:bg-white/10 transition-colors"
                                >
                                    <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-slate-400">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Awards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="relative mt-6 bg-gradient-to-r from-blue-600/20 to-violet-600/20 rounded-2xl p-6 border border-white/10"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Top 10 Startups de IA</h4>
                                    <p className="text-sm text-slate-400">Forbes Brasil 2024</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}