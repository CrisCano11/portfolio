import React, { useState, useEffect, createContext } from 'react';
import { projectsData } from '../data/projects';
import useDetectLanguage from '../hooks/useDetectLanguage';

export const ProjectsContext = createContext();

export const ProjectsProvider = (props) => {
    const [projects, setProjects] = useState(projectsData.english);
    const [searchProject, setSearchProject] = useState('');
    const [selectProject, setSelectProject] = useState('');
    const isSpanish = useDetectLanguage();

   
    useEffect(() => {
        const data = isSpanish ? projectsData.spanish : projectsData.english;
        setProjects(data);
    }, [isSpanish]);

    const searchProjectsByTitle = projects.filter((item) => {
        const result =
            item.title.toLowerCase().includes(searchProject.toLowerCase()) ||
            searchProject === '';
        return result;
    });

    const selectProjectsByCategory = projects.filter((item) => {
        let category =
            item.category.charAt(0).toUpperCase() + item.category.slice(1);
        return category.includes(selectProject);
    });

    return (
        <ProjectsContext.Provider
            value={{
                projects,
                setProjects,
                searchProject,
                setSearchProject,
                searchProjectsByTitle,
                selectProject,
                setSelectProject,
                selectProjectsByCategory,
            }}
        >
            {props.children}
        </ProjectsContext.Provider>
    );
};
