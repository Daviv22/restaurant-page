import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" },
    }),
};

const locations = [
    {
        name: "Unidade Centro",
        address: "1216 Coors Road SW, Albuquerque, NM 87121",
        phone: "(505) 555-0192",
        hours: "Seg–Sex: 10h–22h | Sáb: 09h–23h | Dom: 10h–21h",
    },
    {
        name: "Unidade Norte",
        address: "4727 Eubank Blvd NE, Albuquerque, NM 87111",
        phone: "(505) 555-0287",
        hours: "Seg–Sex: 11h–22h | Sáb–Dom: 10h–23h",
    },
];

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <div className="bg-blue-950 text-white py-20 px-6 text-center relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 30% 50%, #facc15 0%, transparent 60%), radial-gradient(circle at 70% 50%, #1d4ed8 0%, transparent 60%)",
                    }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                >
                    <span className="text-yellow-400 text-sm font-bold uppercase tracking-widest">Fale Conosco</span>
                    <h1 className="text-5xl font-black mt-3 mb-4">Entre em Contato</h1>
                    <p className="text-white/60 max-w-xl mx-auto">
                        Estamos sempre prontos para atendê-lo. Envie uma mensagem ou visite uma de nossas unidades.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Form */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                    >
                        <h2 className="text-3xl font-black text-blue-900 mb-2">Envie uma Mensagem</h2>
                        <p className="text-gray-500 mb-8">Respondemos em até 24 horas úteis.</p>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-green-50 border border-green-200 rounded-2xl p-10 flex flex-col items-center text-center"
                            >
                                <CheckCircle size={56} className="text-green-500 mb-4" />
                                <h3 className="text-green-800 font-black text-xl mb-2">Mensagem Enviada!</h3>
                                <p className="text-green-700/70">Obrigado por entrar em contato. Retornaremos em breve.</p>
                                <button
                                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                                    className="mt-6 px-6 py-2.5 bg-blue-900 text-white font-bold rounded-full text-sm hover:bg-blue-800 transition-colors"
                                >
                                    Enviar outra mensagem
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">Nome *</label>
                                        <input
                                            required
                                            type="text"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            placeholder="Seu nome completo"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all placeholder:text-gray-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">E-mail *</label>
                                        <input
                                            required
                                            type="email"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            placeholder="seu@email.com"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">Assunto *</label>
                                    <select
                                        required
                                        value={form.subject}
                                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
                                    >
                                        <option value="">Selecione um assunto</option>
                                        <option>Reserva de Espaço</option>
                                        <option>Pedidos e Entregas</option>
                                        <option>Sugestão ou Reclamação</option>
                                        <option>Parcerias e Franquias</option>
                                        <option>Outros</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">Mensagem *</label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        placeholder="Escreva sua mensagem aqui..."
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all placeholder:text-gray-400 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 bg-blue-900 text-white font-black rounded-xl uppercase tracking-wider hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} /> Enviar Mensagem
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Info */}
                    <div className="space-y-8">
                        {/* Div normal envolvendo as unidades — sem travar animação nos filhos */}
                        <div>
                            {/* Título animado de forma independente */}
                            <motion.h2
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                custom={1}
                                className="text-3xl font-black text-blue-900 mb-8"
                            >
                                Nossas Unidades
                            </motion.h2>

                            {locations.map((loc, i) => (
                                <motion.div
                                    key={loc.name}
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="visible"
                                    custom={i + 2} // O primeiro card vai ter custom={2}, o segundo custom={3}...
                                    className="mb-6 p-6 rounded-2xl border border-gray-100 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300 bg-white"
                                >
                                    <h3 className="text-blue-900 font-black text-lg mb-4">{loc.name}</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-3 text-sm text-gray-600">
                                            <MapPin size={16} className="text-yellow-500 mt-0.5 shrink-0"/>
                                            {loc.address}
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-gray-600">
                                            <Phone size={16} className="text-yellow-500 shrink-0"/>
                                            {loc.phone}
                                        </li>
                                        <li className="flex items-start gap-3 text-sm text-gray-600">
                                            <Clock size={16} className="text-yellow-500 mt-0.5 shrink-0"/>
                                            {loc.hours}
                                        </li>
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        {/* Caixa de E-mail entra por último */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={4}
                            className="p-6 rounded-2xl bg-yellow-400"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <Mail size={20} className="text-blue-900" />
                                <h3 className="text-blue-900 font-black">E-mail Geral</h3>
                            </div>
                            <p className="text-blue-900/70 text-sm mb-1">contato@lph.com</p>
                            <p className="text-blue-900/70 text-sm">franquias@lph.com</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
