import { motion } from "framer-motion";
import { useState } from "react";
import { ShoppingCart, Flame, Leaf, Star } from "lucide-react";
import { menuItems, categories, tagColors } from "../utils/menuItems.js";


export default function Menu() {
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [cart, setCart] = useState([]);

    const filtered = activeCategory === "Todos"
        ? menuItems
        : menuItems.filter((item) => item.category === activeCategory);

    const addToCart = (id) => {
        setCart((prev) => [...prev, id]);
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Hero banner */}
            <div className="bg-blue-950 text-white py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10"
                     style={{
                         backgroundImage: "radial-gradient(circle at 30% 50%, #facc15 0%, transparent 60%), radial-gradient(circle at 70% 50%, #1d4ed8 0%, transparent 60%)",
                     }}
                />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10"
                >
                    <span className="text-yellow-400 text-sm font-bold uppercase tracking-widest">Los Pollos Hermanos</span>
                    <h1 className="text-5xl font-black mt-3 mb-4 font-pollos">Nosso Cardápio</h1>
                    <p className="text-white/60 max-w-xl mx-auto">
                        Preparado com os melhores ingredientes e a receita que conquistou gerações. Escolha o seu favorito!
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Cart indicator */}
                {cart.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 p-4 bg-yellow-50 border border-yellow-300 rounded-2xl flex items-center justify-between"
                    >
                        <div className="flex items-center gap-3">
                            <ShoppingCart size={20} className="text-blue-900" />
                            <span className="text-blue-900 font-semibold">{cart.length} item(s) no carrinho</span>
                        </div>
                        <button
                            onClick={() => setCart([])}
                            className="text-sm text-gray-500 hover:text-red-500 transition-colors"
                        >
                            Limpar
                        </button>
                    </motion.div>
                )}

                {/* Category filters */}
                <div className="flex flex-wrap gap-3 mb-12 justify-center">
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                                activeCategory === cat
                                    ? "bg-blue-900 text-white shadow-lg shadow-blue-900/20"
                                    : "bg-gray-100 text-gray-500 hover:bg-yellow-100 hover:text-blue-900"
                            }`}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {filtered.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300 group"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                                    {item.tags.map((tag) => (
                                        <span key={tag} className={`text-xs font-bold px-2.5 py-1 rounded-full ${tagColors[tag] ?? "bg-gray-100 text-gray-600"}`}>
                      {tag === "Picante" && <Flame size={10} className="inline mr-1" />}
                                            {tag === "Vegetariano" && <Leaf size={10} className="inline mr-1" />}
                                            {tag}
                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <h3 className="text-blue-900 font-black text-base leading-tight">{item.name}</h3>
                                    <span className="text-yellow-500 font-black text-base shrink-0">R$ {item.price.toFixed(2)}</span>
                                </div>

                                <div className="flex gap-0.5 mb-3">
                                    {Array.from({ length: 5 }).map((_, j) => (
                                        <Star key={j} size={12} className={j < item.stars ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"} />
                                    ))}
                                </div>

                                <p className="text-gray-500 text-xs leading-relaxed mb-5">{item.desc}</p>

                                <button
                                    onClick={() => addToCart(item.id)}
                                    className="w-full py-2.5 bg-blue-900 text-white font-bold rounded-xl text-sm uppercase tracking-wider hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    <ShoppingCart size={15} />
                                    Adicionar
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
