import React from 'react';
import  Button  from "../ui/Button";
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    const stats = [
        { value: '300%', label: 'Aumento em conversões', icon: TrendingUp },
        { value: '24/7', label: 'Atendimento contínuo', icon: Zap },
        { value: '10k+', label: 'Leads qualificados/mês', icon: Users },
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mb-8">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm text-white/80">Inteligência Artificial para Vendas</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Transforme suas
                            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                                vendas com IA
                            </span>
                        </h1>

                        <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
                            Nossos agentes de IA trabalham 24/7 para qualificar leads, responder clientes e 
                            aumentar suas conversões em até 300%. Automatize e escale seu time comercial.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Button 
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-full px-8 h-14 text-base shadow-xl shadow-blue-500/25"
                            >
                                Começar Agora
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button 
                                size="lg"
                                variant="outline"
                                className="rounded-full px-8 h-14 text-base border-white/20 text-white hover:bg-white/10 hover:text-white"
                            >
                                <Play className="w-5 h-5 mr-2" />
                                Ver Demonstração
                            </Button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="text-center sm:text-left"
                                >
                                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs sm:text-sm text-slate-500">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative">
                            {/* Main Card */}
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                
                                {/* Chat Simulation */}
                                <div className="space-y-4">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white">
                                            C
                                        </div>
                                        <div className="bg-slate-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                                            <p className="text-sm text-slate-300">
                                                Olá! Quero saber mais sobre os planos empresariais
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-3 justify-end">
                                        <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                                            <p className="text-sm text-white">
                                                Olá! Fico feliz em ajudar. 🚀 Qual o tamanho da sua equipe de vendas?
                                            </p>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                                            <Sparkles className="w-4 h-4 text-white" />
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs text-white">
                                            C
                                        </div>
                                        <div className="bg-slate-800 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs">
                                            <p className="text-sm text-slate-300">
                                                Somos 15 pessoas no comercial
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-slate-500">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                        <span className="text-xs">IA digitando...</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-6 -right-6 bg-emerald-500 text-white px-4 py-2 rounded-xl shadow-lg shadow-emerald-500/25"
                            >
                                <span className="text-sm font-medium">+127 leads hoje</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -bottom-4 -left-6 bg-white px-4 py-2 rounded-xl shadow-xl"
                            >
                                <span className="text-sm font-medium text-slate-900">Taxa de conversão: 34%</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}