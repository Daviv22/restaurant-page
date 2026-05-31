import Home from "./app/pages/Home";
import Menu from "./app/pages/Menu";
import Contact from "./app/pages/Contact";
import { createHashRouter } from "react-router-dom";
import Layout from "./app/components/Layout";

export const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
                { path: '/', element: <Home /> },
                { path: 'menu', element: <Menu /> },
                { path: 'contact', element: <Contact /> },
            ],
        }
    ],
    {
        basename: "/restaurant-page"
    }

);