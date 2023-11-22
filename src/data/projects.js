// Import images
import IDM from '../images/idm_3.webp';
import Cerdos from '../images/cerdos_3.webp';
import Bosque from '../images/bosque_1.webp';
import Pwa from '../images/pwa_1.webp';

export const projectsData =
{
    english: [
        {
            id: 1,
            title: 'Field Visit and Data Management System',
            category: 'Web Application',
            img: IDM,
        },
        {
            id: 2,
            title: 'POS System',
            category: 'Web Application',
            img: Cerdos,
            ProjectHeader: {
                title: 'Project Management UI - From Context',
                publishDate: 'Apr 20, 2023',
                tags: 'Administration / Backend',
            },
        },
        {
            id: 3,
            title: 'POS System for Restaurant',
            category: 'Web Application',
            img: Bosque,
            ProjectHeader: {
                title: 'Project Management UI - From Context',
                publishDate: 'Jul 2, 2022',
                tags: 'Administration / Backend',
            },
        },
        {
            id: 4,
            title: 'Login for Platform',
            category: 'Progressive Web Application (PWA)',
            img: Pwa,
            ProjectHeader: {
                title: 'Project Management UI - From Context',
                publishDate: 'May 3, 2023',
                tags: 'UI / Frontend',
            },
        }
    ],
    spanish: [
        {
            id: 1,
            title: 'Sistema de gestión de datos y visita de campo',
            category: 'Aplicación Web/Proyecto de Grado',
            img: IDM,
        },
        {
            id: 2,
            title: 'Sistema POS',
            category: 'Aplicación Web',
            img: Cerdos,
            ProjectHeader: {
                title: 'UI de gestión de proyectos - Desde el contexto',
                publishDate: 'Abr 20, 2023',
                tags: 'Administración / Backend',
            },
        },
        {
            id: 3,
            title: 'Sistema POS para Restaurante',
            category: 'Aplicación Web',
            img: Bosque,
            ProjectHeader: {
                title: 'UI de gestión de proyectos - Desde el contexto',
                publishDate: 'Jul 2, 2022',
                tags: 'Administración / Backend',
            },
        },
        {
            id: 4,
            title: 'Inicio  de sesión para plataforma',
            category: 'Aplicación Web Progresiva (PWA)',
            img: Pwa,
            ProjectHeader: {
                title: 'UI de gestión de proyectos - Desde el contexto',
                publishDate: 'May 3, 2023',
                tags: 'UI / Frontend',
            },
        }
    ]
};

