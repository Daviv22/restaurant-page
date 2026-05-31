import { NavLink, useLocation, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronUp } from "lucide-react";
import logo from "../../assets/logo.png";


export default function Layout() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showTop, setShowTop] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
            setShowTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    const navLinks = [
        { to: "/", label: "Início" },
        { to: "/menu", label: "Cardápio" },
        { to: "/contact", label: "Contato" },
    ];


    return (
        <div className="min-h-screen flex flex-col bg-white text-gray-900">
            {/* Header */}
            <motion.header
                animate={{ backgroundColor: scrolled ? "rgba(15,36,75,0.97)" : "rgba(15,36,75,1)", boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.25)" : "none" }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 right-0 z-50"

            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-3 group">
                        <div className="rounded-full bg-transparent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <img src={logo} alt="Logo" className="w-20 h-20  rounded-full"/>
                        </div>
                        <div className="leading-tight font-pollos">
                            <span className="text-yellow-400 font-black tracking-wide text-xl">Los Pollos</span>
                            <span className="text-white font-light tracking-widest text-xl"> Hermanos</span>
                        </div>
                    </NavLink>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.to === "/"}
                                className={({ isActive }) =>
                                    `relative text-sm font-semibold tracking-wider uppercase transition-colors duration-300 py-1 ${
                                        isActive ? "text-yellow-400" : "text-white/80 hover:text-yellow-400"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.label}
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-underline"
                                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 rounded-full"
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                        <NavLink
                            to="/menu"
                            className="ml-4 px-5 py-2 bg-yellow-400 text-blue-900 font-bold rounded-full text-sm uppercase tracking-wider hover:bg-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30 hover:-translate-y-0.5"
                        >
                            Peça Agora
                        </NavLink>
                    </nav>

                    {/* Mobile burger */}
                    <button
                        className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden overflow-hidden bg-blue-950 border-t border-white/10"
                        >
                            <nav className="flex flex-col p-6 gap-4">
                                {navLinks.map((link) => (
                                    <NavLink
                                        key={link.to}
                                        to={link.to}
                                        end={link.to === "/"}
                                        className={({ isActive }) =>
                                            `text-lg font-semibold tracking-wider py-2 border-b border-white/10 transition-colors ${
                                                isActive ? "text-yellow-400" : "text-white/80"
                                            }`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                                <NavLink
                                    to="/menu"
                                    className="mt-2 px-5 py-3 bg-yellow-400 text-blue-900 font-bold rounded-full text-center uppercase tracking-wider"
                                >
                                    Peça Agora
                                </NavLink>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Page Content */}
            <main className="flex-1 pt-18">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Footer */}
            <footer className="bg-blue-950 text-white">
                <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Brand */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="rounded-full bg-yellow-400 flex items-center justify-center">
                                    <img src={logo} alt="Logo" className="w-20 h-20  rounded-full"/>
                                </div>
                                <div>
                                    <p className="text-yellow-400 font-black font-pollos">Los Pollos Hermanos</p>
                                </div>
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed mb-6">
                                O melhor frango frito do Novo México, preparado com os melhores ingredientes e entregue com um sorriso amigável.
                            </p>
                            <div className="flex gap-3">
                                {[
                                    {
                                        href: "#",
                                        svg: (
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        href: "#",
                                        svg: (
                                            <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                            </svg>
                                        )
                                    },
                                    {
                                        href: "#",
                                        svg: (
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                {/* Logo do X (Antigo Twitter) */}
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        )
                                    }
                                ].map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.href}
                                        className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300"
                                    >
                                        {item.svg}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-5">Navegação</h4>
                            <ul className="space-y-3">
                                {[
                                    { to: "/", label: "Início" },
                                    { to: "/menu", label: "Cardápio" },
                                    { to: "/contact", label: "Contato" },
                                    { to: "/menu", label: "Peça Online" },
                                ].map((item) => (
                                    <li key={item.label}>
                                        <NavLink
                                            to={item.to}
                                            className="text-white/60 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2 group"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            {item.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Horários */}
                        <div>
                            <h4 className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-5">Horários</h4>
                            <ul className="space-y-3">
                                {[
                                    { day: "Segunda – Sexta", time: "10h – 22h" },
                                    { day: "Sábado", time: "09h – 23h" },
                                    { day: "Domingo", time: "10h – 21h" },
                                ].map((item) => (
                                    <li key={item.day} className="flex items-start gap-2 text-sm">
                                        <Clock size={14} className="text-yellow-400 mt-0.5 shrink-0" />
                                        <div>
                                            <span className="text-white/40 text-xs">{item.day}</span>
                                            <p className="text-white/80">{item.time}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contato */}
                        <div>
                            <h4 className="text-yellow-400 font-bold uppercase tracking-widest text-xs mb-5">Fale Conosco</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-sm text-white/60">
                                    <MapPin size={16} className="text-yellow-400 mt-0.5 shrink-0" />
                                    <span>1216 Coors Road SW<br />Albuquerque, NM 87121</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-white/60">
                                    <Phone size={16} className="text-yellow-400 shrink-0" />
                                    <span>(505) 555-0192</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-white/60">
                                    <Mail size={16} className="text-yellow-400 shrink-0" />
                                    <span>contato@lph.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-xs">
                        <p>&copy; 2026 Los Pollos Hermanos. Todos os direitos reservados.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-yellow-400 transition-colors">Política de Privacidade</a>
                            <a href="#" className="hover:text-yellow-400 transition-colors">Termos de Uso</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Back to top */}
            <AnimatePresence>
                {showTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="fixed bottom-8 right-8 z-50 w-11 h-11 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center shadow-xl hover:bg-yellow-300 hover:-translate-y-1 transition-all duration-300"
                    >
                        <ChevronUp size={20} />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};
