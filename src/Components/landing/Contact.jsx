import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from "../ui/Button";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/Select";
import { Send, Mail, Phone, MapPin, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        teamSize: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast.success('Mensagem enviada! Entraremos em contato em breve.');
    };

    return (
        <section id="contato" className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                            Fale Conosco
                        </span>
                        
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Pronto para transformar
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                                suas vendas?
                            </span>
                        </h2>

                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            Agende uma demonstração gratuita e veja como nossos agentes de IA podem 
                            multiplicar seus resultados comerciais.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Email</p>
                                    <p className="text-white font-medium">contato@nexusai.com.br</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Telefone</p>
                                    <p className="text-white font-medium">(11) 99999-9999</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-violet-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Localização</p>
                                    <p className="text-white font-medium">São Paulo, Brasil</p>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <Button
                            variant="outline"
                            className="rounded-full border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300"
                        >
                            <MessageSquare className="w-5 h-5 mr-2" />
                            Falar via WhatsApp
                        </Button>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white rounded-3xl p-8 shadow-2xl">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                        Mensagem Enviada!
                                    </h3>
                                    <p className="text-slate-600 mb-6">
                                        Nossa equipe entrará em contato em até 24 horas.
                                    </p>
                                    <Button
                                        onClick={() => setIsSubmitted(false)}
                                        variant="outline"
                                    >
                                        Enviar outra mensagem
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Seu nome
                                            </label>
                                            <Input
                                                required
                                                placeholder="João Silva"
                                                value={formData.name}
                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                className="h-12 rounded-xl border-slate-200"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Email
                                            </label>
                                            <Input
                                                required
                                                type="email"
                                                placeholder="joao@empresa.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                className="h-12 rounded-xl border-slate-200"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Telefone
                                            </label>
                                            <Input
                                                placeholder="(11) 99999-9999"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                className="h-12 rounded-xl border-slate-200"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Empresa
                                            </label>
                                            <Input
                                                placeholder="Nome da empresa"
                                                value={formData.company}
                                                onChange={(e) => setFormData({...formData, company: e.target.value})}
                                                className="h-12 rounded-xl border-slate-200"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Tamanho da equipe de vendas
                                        </label>
                                        <Select
                                            value={formData.teamSize}
                                            onValueChange={(value) => setFormData({...formData, teamSize: value})}
                                        >
                                            <SelectTrigger className="h-12 rounded-xl border-slate-200">
                                                <SelectValue placeholder="Selecione" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="1-5">1-5 pessoas</SelectItem>
                                                <SelectItem value="6-15">6-15 pessoas</SelectItem>
                                                <SelectItem value="16-50">16-50 pessoas</SelectItem>
                                                <SelectItem value="50+">Mais de 50 pessoas</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Como podemos ajudar?
                                        </label>
                                        <Textarea
                                            placeholder="Conte um pouco sobre seu desafio atual..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                            className="min-h-[120px] rounded-xl border-slate-200 resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white font-medium text-base shadow-lg shadow-blue-500/25"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Enviando...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Agendar Demonstração
                                                <ArrowRight className="w-5 h-5" />
                                            </span>
                                        )}
                                    </Button>

                                    <p className="text-xs text-center text-slate-500">
                                        Ao enviar, você concorda com nossa Política de Privacidade
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}