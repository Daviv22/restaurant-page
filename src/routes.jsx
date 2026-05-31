import Home from "./app/pages/Home";
import Menu from "./app/pages/Menu";
import Contact from "./app/pages/Contact";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./app/components/Layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'menu', element: <Menu /> },
            { path: 'contact', element: <Contact /> },
        ],
    }, {
        basename: "/restaurant-page/"
    }
]);