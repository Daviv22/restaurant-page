import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">Sobre</Link>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p> &copy; 2026 Meu-Restaurante</p>
            </footer>
        </>
    );
};
