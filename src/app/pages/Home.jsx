import { motion } from "framer-motion";
import { NavLink } from "react-router";
import { Star, Award, Truck, Clock, ChevronRight } from "lucide-react";
import gusFring from "../../assets/gus_fring.jpg"
import friedChicken from "../../assets/fried_chicken.jpg";
import bgImage from "../../assets/background_image.jpg";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
};

const features = [
    {
        icon: Star,
        title: "Ingredientes Premium",
        desc: "Selecionamos apenas os melhores insumos para garantir um sabor único em cada pedaço.",
    },
    {
        icon: Award,
        title: "Receita Premiada",
        desc: "Nossa fórmula secreta conquistou paladares por todo o Novo México e além.",
    },
    {
        icon: Truck,
        title: "Entrega Rápida",
        desc: "Seu pedido chega quentinho e crocante, no tempo que você precisa.",
    },
    {
        icon: Clock,
        title: "Sempre Fresquinho",
        desc: "Preparamos tudo na hora. Nunca servimos frango que ficou esperando.",
    },
];

const testimonials = [
    { name: "Maria S.", text: "O melhor frango que já comi na minha vida! Crocante por fora, suculento por dentro.", stars: 5 },
    { name: "Carlos M.", text: "Ambiente incrível, atendimento impecável. Voltarei com certeza!", stars: 5 },
    { name: "João P.", text: "Molhos incríveis, porções generosas. Vale cada centavo.", stars: 5 },
];


export default function Home() {
    return (
        <div className="overflow-x-hidden">
            {/* Hero */}
            <section
                className="relative min-h-[92vh] flex items-center justify-center text-white"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-linear-to-br from-blue-950/85 via-blue-900/70 to-yellow-900/40" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text */}
                    <div>
                        <motion.span
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                            className="inline-block text-yellow-400 text-sm font-bold uppercase tracking-widest mb-4 border border-yellow-400/40 px-4 py-1.5 rounded-full"
                        >
                            🍗 Albuquerque's #1 Fried Chicken
                        </motion.span>

                        <motion.h1
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={1}
                            className="text-5xl lg:text-7xl font-black leading-tight mb-6"
                        >
                            O Sabor que<br />
                            <span className="text-yellow-400">Conquistou</span><br />
                            o Novo México
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={2}
                            className="text-white/75 text-lg leading-relaxed mb-10 max-w-lg"
                        >
                            "Os melhores ingredientes. As especiarias mais saborosas. Tudo preparado com carinho e entregue com um sorriso amigável. Essa é a promessa Los Pollos Hermanos."
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={3}
                            className="flex flex-wrap gap-4"
                        >
                            <NavLink
                                to="/menu"
                                className="px-8 py-4 bg-yellow-400 text-blue-900 font-black rounded-full uppercase tracking-wider hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-yellow-400/40 transition-all duration-300 flex items-center gap-2"
                            >
                                Ver Cardápio <ChevronRight size={18} />
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className="px-8 py-4 border-2 border-white/40 text-white font-bold rounded-full uppercase tracking-wider hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300"
                            >
                                Fale Conosco
                            </NavLink>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={4}
                            className="mt-14 flex gap-10"
                        >
                            {[
                                { value: "15+", label: "Anos de experiência" },
                                { value: "50K+", label: "Clientes satisfeitos" },
                                { value: "4.9★", label: "Avaliação média" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p className="text-yellow-400 text-2xl font-black">{s.value}</p>
                                    <p className="text-white/50 text-xs uppercase tracking-wider mt-1">{s.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Image Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, rotate: 2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="hidden lg:block"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-yellow-400/20 rounded-3xl blur-2xl" />
                            <div className="relative bg-blue-900/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 shadow-2xl p-6">
                                <img
                                    src={gusFring}
                                    alt="Gustavo Fring"
                                    className="w-full max-h-105 object-contain object-bottom"
                                />
                                <div className="mt-4 p-4 bg-white/10 rounded-2xl">
                                    <p className="text-yellow-400 font-bold text-sm">Gustavo Fring</p>
                                    <p className="text-white/70 text-xs mt-1">Fundador & CEO — Los Pollos Hermanos</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
                    <span>Role para ver mais</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center pt-1.5"
                    >
                        <div className="w-1 h-2 bg-white/50 rounded-full" />
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-yellow-500 text-sm font-bold uppercase tracking-widest">Por que nos escolher?</span>
                        <h2 className="text-4xl font-black text-blue-900 mt-3">O que nos torna especiais</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((f, i) => (
                            <motion.div
                                key={f.title}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                className="group p-8 rounded-2xl border border-gray-100 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-400 bg-white"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center mb-5 group-hover:bg-yellow-400 transition-colors duration-300">
                                    <f.icon size={26} className="text-yellow-500 group-hover:text-blue-900 transition-colors duration-300" />
                                </div>
                                <h3 className="text-blue-900 font-bold text-lg mb-3">{f.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Destaque do prato */}
            <section className="py-24 bg-blue-950 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="absolute -inset-6 bg-yellow-400/10 rounded-3xl blur-2xl" />
                        <img
                            src={friedChicken}
                            alt="Frango Frito Los Pollos Hermanos"
                            className="relative rounded-3xl shadow-2xl w-full object-cover max-h-120"
                        />
                        <div className="absolute top-6 right-6 bg-yellow-400 text-blue-900 font-black px-4 py-2 rounded-full text-sm shadow-xl">
                            ⭐ Prato do Chefe
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-yellow-400 text-sm font-bold uppercase tracking-widest">Destaque da semana</span>
                        <h2 className="text-4xl font-black mt-3 mb-6">
                            Frango Frito<br />
                            <span className="text-yellow-400">Clássico LPH</span>
                        </h2>
                        <p className="text-white/70 leading-relaxed mb-8">
                            Nosso carro-chefe. Marinado por 24 horas em nossa mistura secreta de especiarias, empanado na hora e frito até a perfeição dourada. Acompanha molho especial e dois acompanhamentos à escolha.
                        </p>
                        <ul className="space-y-3 mb-10">
                            {["Marinado em especiarias exclusivas", "Sempre preparado na hora", "Acompanha molho secreto LPH", "Disponível em 3 tamanhos"].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-white/80 text-sm">
                  <span className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                    <span className="text-blue-900 text-xs font-black">✓</span>
                  </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <NavLink
                            to="/menu"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-blue-900 font-black rounded-full uppercase tracking-wider hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-400/30 transition-all duration-300"
                        >
                            Ver Cardápio Completo <ChevronRight size={18} />
                        </NavLink>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-yellow-50">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-yellow-500 text-sm font-bold uppercase tracking-widest">Depoimentos</span>
                        <h2 className="text-4xl font-black text-blue-900 mt-3">O que nossos clientes dizem</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={t.name}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i}
                                className="bg-white rounded-2xl p-8 shadow-sm border border-yellow-100 hover:shadow-lg hover:border-yellow-300 transition-all duration-300"
                            >
                                <div className="flex gap-1 mb-4">
                                    {Array.from({ length: t.stars }).map((_, j) => (
                                        <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-sm">
                                        {t.name[0]}
                                    </div>
                                    <span className="text-blue-900 font-bold text-sm">{t.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-yellow-400">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-black text-blue-900 mb-4">Pronto para experimentar?</h2>
                        <p className="text-blue-900/70 text-lg mb-10">Visite uma de nossas unidades ou peça pelo telefone agora mesmo.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <NavLink
                                to="/menu"
                                className="px-8 py-4 bg-blue-900 text-white font-black rounded-full uppercase tracking-wider hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300 shadow-xl"
                            >
                                Ver Cardápio
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className="px-8 py-4 border-2 border-blue-900/40 text-blue-900 font-bold rounded-full uppercase tracking-wider hover:border-blue-900 transition-all duration-300"
                            >
                                Encontre uma Unidade
                            </NavLink>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
