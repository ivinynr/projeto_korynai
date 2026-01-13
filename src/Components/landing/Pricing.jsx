import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import  Button  from "../ui/Button";
import  Switch  from "../ui/Switch";

const plans = [
    {
        name: 'Starter',
        description: 'Para pequenas empresas começando com IA',
        monthlyPrice: 297,
        yearlyPrice: 237,
        features: [
            '1 Agente de Chat',
            '500 conversas/mês',
            'Integração WhatsApp',
            'Dashboard básico',
            'Suporte por email',
            'Relatórios mensais',
        ],
        highlighted: false,
        cta: 'Começar Grátis',
    },
    {
        name: 'Professional',
        description: 'Para equipes em crescimento',
        monthlyPrice: 697,
        yearlyPrice: 557,
        features: [
            '3 Agentes (Chat, Email, Agendamento)',
            '2.000 conversas/mês',
            'Todas as integrações',
            'Dashboard avançado',
            'Suporte prioritário',
            'Relatórios semanais',
            'Treinamento personalizado',
            'API de acesso',
        ],
        highlighted: true,
        cta: 'Escolher Professional',
        badge: 'Mais Popular',
    },
    {
        name: 'Enterprise',
        description: 'Para grandes operações',
        monthlyPrice: 1997,
        yearlyPrice: 1597,
        features: [
            'Todos os 6 Agentes',
            'Conversas ilimitadas',
            'Integrações customizadas',
            'Dashboard white-label',
            'Suporte 24/7 dedicado',
            'Relatórios em tempo real',
            'Onboarding exclusivo',
            'SLA garantido',
            'Agente de Voz incluso',
        ],
        highlighted: false,
        cta: 'Falar com Vendas',
    },
];

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(true);

    return (
        <section id="planos" className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-violet-50 text-violet-600 text-sm font-medium mb-4">
                        Planos & Preços
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Invista em resultados,
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600">
                            não em promessas
                        </span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Planos flexíveis que crescem com seu negócio. Cancele quando quiser.
                    </p>
                </motion.div>

                {/* Toggle */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className={`text-sm font-medium ${!isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
                        Mensal
                    </span>
                    <Switch 
                        checked={isYearly} 
                        onCheckedChange={setIsYearly}
                        className="data-[state=checked]:bg-violet-600"
                    />
                    <span className={`text-sm font-medium ${isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
                        Anual
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">
                        Economize 20%
                    </span>
                </div>

                {/* Plans Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-3xl p-8 ${
                                plan.highlighted 
                                    ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white ring-4 ring-violet-500/20 scale-105' 
                                    : 'bg-white border border-slate-200'
                            }`}
                        >
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium shadow-lg">
                                        <Sparkles className="w-4 h-4" />
                                        {plan.badge}
                                    </div>
                                </div>
                            )}

                            {/* Plan Header */}
                            <div className="mb-8">
                                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                                    {plan.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-8">
                                <div className="flex items-baseline gap-2">
                                    <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                                        R$ {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                                    </span>
                                    <span className={`text-sm ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                                        /mês
                                    </span>
                                </div>
                                {isYearly && (
                                    <p className={`text-sm mt-1 ${plan.highlighted ? 'text-violet-400' : 'text-violet-600'}`}>
                                        Cobrado anualmente
                                    </p>
                                )}
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                            plan.highlighted 
                                                ? 'bg-violet-500/20 text-violet-400' 
                                                : 'bg-emerald-100 text-emerald-600'
                                        }`}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className={`text-sm ${plan.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Button 
                                className={`w-full h-12 rounded-xl font-medium ${
                                    plan.highlighted 
                                        ? 'bg-white text-slate-900 hover:bg-slate-100' 
                                        : 'bg-slate-900 text-white hover:bg-slate-800'
                                }`}
                            >
                                {plan.cta}
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-sm text-slate-500 mt-12"
                >
                    Todos os planos incluem 7 dias de teste grátis. Sem necessidade de cartão de crédito.
                </motion.p>
            </div>
        </section>
    );
}