import React from 'react';
import { motion } from 'framer-motion';
import { 
    MessageSquare, 
    Phone, 
    Mail, 
    Calendar, 
    Target, 
    BarChart3,
    ArrowRight,
    Check
} from 'lucide-react';
import  Button from "../ui/Button";

const agents = [
    {
        icon: MessageSquare,
        name: 'Agente de Chat',
        subtitle: 'Atendimento via WhatsApp e Site',
        description: 'Responde instantaneamente dúvidas, qualifica leads e agenda reuniões automaticamente via WhatsApp, Instagram e chat do site.',
        features: ['Respostas em segundos', 'Qualificação automática', 'Integração WhatsApp'],
        gradient: 'from-emerald-500 to-teal-600',
        bgGradient: 'from-emerald-50 to-teal-50',
    },
    {
        icon: Phone,
        name: 'Agente de Voz',
        subtitle: 'Ligações Inteligentes',
        description: 'Realiza ligações de prospecção, follow-up e qualificação com voz natural. Agenda reuniões e transfere para seu time.',
        features: ['Voz humanizada', 'Prospecção ativa', 'Transferência inteligente'],
        gradient: 'from-blue-500 to-indigo-600',
        bgGradient: 'from-blue-50 to-indigo-50',
    },
    {
        icon: Mail,
        name: 'Agente de Email',
        subtitle: 'Sequências Personalizadas',
        description: 'Cria e envia sequências de emails personalizados, responde automaticamente e identifica leads quentes.',
        features: ['Personalização IA', 'Sequências automáticas', 'Análise de interesse'],
        gradient: 'from-violet-500 to-purple-600',
        bgGradient: 'from-violet-50 to-purple-50',
    },
    {
        icon: Calendar,
        name: 'Agente de Agendamento',
        subtitle: 'Calendário Inteligente',
        description: 'Gerencia sua agenda, agenda reuniões automaticamente e envia lembretes. Zero conflitos, máxima eficiência.',
        features: ['Sync calendários', 'Confirmação automática', 'Lembretes inteligentes'],
        gradient: 'from-orange-500 to-red-500',
        bgGradient: 'from-orange-50 to-red-50',
    },
    {
        icon: Target,
        name: 'Agente de Qualificação',
        subtitle: 'Lead Scoring Avançado',
        description: 'Analisa e pontua leads automaticamente usando IA. Priorize quem tem maior chance de fechar negócio.',
        features: ['Scoring inteligente', 'Análise comportamental', 'Priorização automática'],
        gradient: 'from-pink-500 to-rose-600',
        bgGradient: 'from-pink-50 to-rose-50',
    },
    {
        icon: BarChart3,
        name: 'Agente Analítico',
        subtitle: 'Insights em Tempo Real',
        description: 'Gera relatórios automáticos, identifica padrões e sugere otimizações para melhorar sua performance de vendas.',
        features: ['Dashboards em tempo real', 'Previsões de vendas', 'Recomendações IA'],
        gradient: 'from-cyan-500 to-blue-600',
        bgGradient: 'from-cyan-50 to-blue-50',
    },
];

export default function Agents() {
    return (
        <section id="agentes" className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
                        Nossos Agentes
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Uma equipe de IA completa
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                            para suas vendas
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Cada agente é especializado em uma etapa do funil. Juntos, eles automatizam 
                        todo seu processo comercial.
                    </p>
                </motion.div>

                {/* Agents Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {agents.map((agent, index) => (
                        <motion.div
                            key={agent.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${agent.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            
                            <div className="relative bg-white rounded-3xl border border-slate-100 p-8 hover:border-transparent hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                                    <agent.icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-slate-900 mb-1">
                                    {agent.name}
                                </h3>
                                <p className="text-sm text-slate-500 mb-4">
                                    {agent.subtitle}
                                </p>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {agent.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2 mb-6">
                                    {agent.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                                            <Check className={`w-4 h-4 bg-gradient-to-br ${agent.gradient} text-white rounded-full p-0.5`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button className="flex items-center gap-2 text-sm font-medium text-slate-900 group/btn">
                                    Saiba mais
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <Button 
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-full px-8 h-14 text-base shadow-xl shadow-blue-500/25"
                    >
                        Ver Todos os Agentes
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}