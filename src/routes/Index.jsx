import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import NotFound from "../components/shared/NotFound";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Home from "../pages/Home";



export const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        errorElement:<NotFound />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/about',
                element: <AboutMe />,
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/contact',
                element: <Contact />,
            }
        ]
    },
]);