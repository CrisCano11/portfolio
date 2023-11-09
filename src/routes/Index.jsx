import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import NotFound from "../components/shared/NotFound";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement:<NotFound/>,
    },
    {
        path: '/about',
        element: <AboutMe/>,
        errorElement:<NotFound/>,
    },
    {
        path: '/projects',
        element: <Projects/>,
        errorElement:<NotFound/>,
    },
    {
        path: '/contact',
        element: <Contact/>,
        errorElement:<NotFound/>,
    }
]);