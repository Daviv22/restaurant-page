import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="grid grid-rows-3 gap-4 min-h-screen w-full bg-cover bg-no-repeat bg-[url('src/assets/background_image.jpg')]">
            <header className="grid place-items-center h-36 gap-5 p-4 border-b border-black bg-white/75">
                <h1 className="text-4xl">Los Pollos Hermanos</h1>
                <nav className="grid place-items-center h-auto grid-cols-3 gap-12 text-2xl">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">Contato</Link>
                </nav>
            </header>

            <main className="p-4">
                <Outlet />
            </main>

            <footer className="p-4">
                <p> &copy; 2026 Meu-Restaurante</p>
            </footer>
        </div>
    );
};
