import React from 'react';
import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/Accordion";

const faqs = [
    {
        question: 'Como funciona o período de teste?',
        answer: 'Oferecemos 7 dias de teste grátis em todos os planos, sem necessidade de cartão de crédito. Durante esse período, você terá acesso completo às funcionalidades do plano escolhido para avaliar se atende suas necessidades.'
    },
    {
        question: 'Os agentes substituem minha equipe de vendas?',
        answer: 'Não! Os agentes de IA complementam sua equipe, cuidando de tarefas repetitivas como qualificação inicial, agendamento e follow-up. Isso libera seus vendedores para focarem no que fazem melhor: construir relacionamentos e fechar negócios.'
    },
    {
        question: 'Quanto tempo leva para implementar?',
        answer: 'A implementação básica leva apenas algumas horas. Você pode conectar seu WhatsApp, CRM e outras ferramentas em minutos. Para customizações mais avançadas, nossa equipe oferece onboarding completo em até 5 dias úteis.'
    },
    {
        question: 'Os agentes entendem português brasileiro?',
        answer: 'Sim! Nossos agentes são treinados especificamente para o português brasileiro, incluindo gírias, expressões regionais e contexto local. Eles se comunicam de forma natural e humanizada com seus clientes.'
    },
    {
        question: 'Posso personalizar as respostas dos agentes?',
        answer: 'Absolutamente! Você pode treinar os agentes com informações específicas do seu negócio, tom de voz da marca, scripts de vendas e muito mais. Quanto mais informações você fornecer, mais preciso será o atendimento.'
    },
    {
        question: 'Quais integrações estão disponíveis?',
        answer: 'Integramos com mais de 100 ferramentas, incluindo WhatsApp Business, RD Station, HubSpot, Salesforce, Pipedrive, Google Calendar, Calendly, Slack e muitas outras. Se não tivermos a integração que você precisa, podemos desenvolvê-la.'
    },
    {
        question: 'Meus dados estão seguros?',
        answer: 'Segurança é prioridade. Utilizamos criptografia de ponta a ponta, estamos em conformidade com a LGPD e passamos por auditorias regulares de segurança. Seus dados nunca são compartilhados ou vendidos.'
    },
    {
        question: 'Posso cancelar a qualquer momento?',
        answer: 'Sim, não há fidelidade. Você pode cancelar seu plano a qualquer momento diretamente pelo painel. Se cancelar, você mantém acesso até o fim do período já pago.'
    },
];

export default function FAQ() {
    return (
        <section id="faq" className="py-24 lg:py-32 bg-white">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-4">
                        Dúvidas Frequentes
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                        Tire suas dúvidas
                    </h2>
                    <p className="text-lg text-slate-600">
                        Reunimos as perguntas mais comuns. Não encontrou o que procura? Fale conosco.
                    </p>
                </motion.div>

                {/* FAQ Accordion */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-slate-50 rounded-2xl border-none px-6"
                            >
                                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}