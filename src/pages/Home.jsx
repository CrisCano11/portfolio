import Banner from "../components/shared/Banner"
import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";
import Button from "../components/reusable/Button";
import { NavLink } from "react-router-dom";
import useDetectLanguage from "../hooks/useDetectLanguage";

const Home = () => {
    const isSpanish = useDetectLanguage();
    return (
        <div className="container mx-auto">
            <Banner />
            <ProjectsProvider>
                <ProjectsGrid></ProjectsGrid>
            </ProjectsProvider>

            <div className="mt-8 sm:mt-10 flex justify-center">
                <NavLink
                    to="/projects"
                    className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
                    aria-label="More Projects"
                >
                    <Button title={isSpanish ? "Más proyectos ":"More Projects" }/>
                </NavLink>
            </div>
        </div>
    );
}

export default Home