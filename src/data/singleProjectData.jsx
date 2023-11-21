import idm_1 from '../images/idm_1.webp';
import idm_2 from '../images/idm_2.webp';
import idm_3 from '../images/idm_3.webp';
import cerdos_1 from '../images/cerdos_1.webp';
import cerdos_2 from '../images/cerdos_2.webp';
import cerdos_3 from '../images/cerdos_3.webp';
import bosque_1 from '../images/bosque_1.webp';
import bosque_2 from '../images/bosque_2.webp';
import bosque_3 from '../images/bosque_3.webp';

import {
	FiLinkedin,
} from 'react-icons/fi';

export const singleProjectData =
{
	english: {
		// 1: {
		// 	ProjectHeader: {
		// 		title: 'Project Management UI',
		// 		publishDate: 'Jul 26, 2021',
		// 		tags: 'UI / Frontend',
		// 	},
		// 	ProjectImages: [
		// 		{
		// 			id: 1,
		// 			title: 'Kabul Project Management UI',
		// 			img: Image1,
		// 		},
		// 		{
		// 			id: 2,
		// 			title: 'Kabul Project Management UI',
		// 			img: Image2,
		// 		},
		// 		{
		// 			id: 3,
		// 			title: 'Kabul Project Management UI',
		// 			img: Image3,
		// 		},
		// 	],
		// 	ProjectInfo: {
		// 		ClientHeading: 'About Client',
		// 		CompanyInfo: [
		// 			{
		// 				id: 1,
		// 				title: 'Name',
		// 				details: 'Company Ltd',
		// 			},
		// 			{
		// 				id: 2,
		// 				title: 'Services',
		// 				details: 'UI Design & Frontend Development',
		// 			},
		// 			{
		// 				id: 3,
		// 				title: 'Website',
		// 				details: 'https://company.com',
		// 			},
		// 			{
		// 				id: 4,
		// 				title: 'Phone',
		// 				details: '555 8888 888',
		// 			},
		// 		],
		// 		ObjectivesHeading: 'Objective',
		// 		ObjectivesDetails:
		// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		// 		Technologies: [
		// 			{
		// 				title: 'Tools & Technologies',
		// 				techs: [
		// 					'HTML',
		// 					'CSS',
		// 					'JavaScript',
		// 					'Vue.js',
		// 					'TailwindCSS',
		// 					'AdobeXD',
		// 				],
		// 			},
		// 		],
		// 		ProjectDetailsHeading: 'Challenge',
		// 		ProjectDetails: [
		// 			{
		// 				id: 1,
		// 				details:
		// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
		// 			},
		// 			{
		// 				id: 2,
		// 				details:
		// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
		// 			},
		// 			{
		// 				id: 3,
		// 				details:
		// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
		// 			},
		// 			{
		// 				id: 4,
		// 				details:
		// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
		// 			},
		// 		],
		// 		SocialSharingHeading: 'Share This',
		// 		SocialSharing: [
		// 			{
		// 				id: 1,
		// 				name: 'Twitter',
		// 				icon: <FiTwitter />,
		// 				url: 'https://twitter.com/realstoman',
		// 			},
		// 			{
		// 				id: 2,
		// 				name: 'Instagram',
		// 				icon: <FiInstagram />,
		// 				url: 'https://instagram.com/realstoman',
		// 			},
		// 			{
		// 				id: 3,
		// 				name: 'Facebook',
		// 				icon: <FiFacebook />,
		// 				url: 'https://facebook.com/',
		// 			},
		// 			{
		// 				id: 4,
		// 				name: 'LinkedIn',
		// 				icon: <FiLinkedin />,
		// 				url: 'https://linkedin.com/',
		// 			},
		// 			{
		// 				id: 5,
		// 				name: 'Youtube',
		// 				icon: <FiYoutube />,
		// 				url: 'https://www.youtube.com/c/StomanStudio',
		// 			},
		// 		],
		// 	},
		// 	RelatedProject: {
		// 		title: 'Related Projects',
		// 		Projects: [
		// 			{
		// 				id: 1,
		// 				title: 'Mobile UI',
		// 				img: Image4,
		// 			},
		// 			{
		// 				id: 2,
		// 				title: 'Web Application',
		// 				img: Image5,
		// 			},
		// 			{
		// 				id: 3,
		// 				title: 'UI Design',
		// 				img: Image6,
		// 			},
		// 			{
		// 				id: 4,
		// 				title: 'Kabul Mobile App UI',
		// 				img: Image3,
		// 			},
		// 		],
		// 	},
		// },
		// 2: {
		// 	ProjectHeader: {
		// 		title: 'Project Management UI',
		// 		publishDate: 'Jul 26, 2021',
		// 		tags: 'UI / Frontend',
		// 	},
		// 	ProjectImages: [
		// 		{
		// 			id: 1,
		// 			title: 'Kabul Project Management UI',
		// 			img: Image1,
		// 		},
		// 		{
		// 			id: 2,
		// 			title: 'Kabul Project Management UI',
		// 			img: Image2,
		// 		},
		// 		{
		// 			id: 3,
		// 			title: 'Kabul Project Management UI',
		// 			img: Image3,
		// 		},
		// 	],
		// 	ProjectInfo: {
		// 		ClientHeading: 'About Client',
		// 		CompanyInfo: [
		// 			{
		// 				id: 1,
		// 				title: 'Name',
		// 				details: 'Company Ltd',
		// 			},
		// 			{
		// 				id: 2,
		// 				title: 'Services',
		// 				details: 'UI Design & Frontend Development',
		// 			},
		// 			{
		// 				id: 3,
		// 				title: 'Website',
		// 				details: 'https://company.com',
		// 			},
		// 			{
		// 				id: 4,
		// 				title: 'Phone',
		// 				details: '555 8888 888',
		// 			},
		// 		],
		// 		ObjectivesHeading: 'Objective',
		// 		ObjectivesDetails:
		// 			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
		// 		Technologies: [
		// 			{
		// 				title: 'Tools & Technologies',
		// 				techs: [
		// 					'HTML',
		// 					'CSS',
		// 					'JavaScript',
		// 					'Vue.js',
		// 					'TailwindCSS',
		// 					'AdobeXD',
		// 				],
		// 			},
		// 		],
		// 		ProjectDetailsHeading: 'Challenge',
		// 		ProjectDetails: [
		// 			{
		// 				id: 1,
		// 				details:
		// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
		// 			},
		// 			{
		// 				id: 2,
		// 				details:
		// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
		// 			},
		// 			{
		// 				id: 3,
		// 				details:
		// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
		// 			},
		// 			{
		// 				id: 4,
		// 				details:
		// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
		// 			},
		// 		],
		// 		SocialSharingHeading: 'Share This',
		// 		SocialSharing: [
		// 			{
		// 				id: 1,
		// 				name: 'Twitter',
		// 				icon: <FiTwitter />,
		// 				url: 'https://twitter.com/realstoman',
		// 			},
		// 			{
		// 				id: 2,
		// 				name: 'Instagram',
		// 				icon: <FiInstagram />,
		// 				url: 'https://instagram.com/realstoman',
		// 			},
		// 			{
		// 				id: 3,
		// 				name: 'Facebook',
		// 				icon: <FiFacebook />,
		// 				url: 'https://facebook.com/',
		// 			},
		// 			{
		// 				id: 4,
		// 				name: 'LinkedIn',
		// 				icon: <FiLinkedin />,
		// 				url: 'https://linkedin.com/',
		// 			},
		// 			{
		// 				id: 5,
		// 				name: 'Youtube',
		// 				icon: <FiYoutube />,
		// 				url: 'https://www.youtube.com/c/StomanStudio',
		// 			},
		// 		],
		// 	},
		// 	RelatedProject: {
		// 		title: 'Related Projects',
		// 		Projects: [
		// 			{
		// 				id: 1,
		// 				title: 'Mobile UI',
		// 				img: Image4,
		// 			},
		// 			{
		// 				id: 2,
		// 				title: 'Web Application',
		// 				img: Image5,
		// 			},
		// 			{
		// 				id: 3,
		// 				title: 'UI Design',
		// 				img: Image6,
		// 			},
		// 			{
		// 				id: 4,
		// 				title: 'Kabul Mobile App UI',
		// 				img: Image3,
		// 			},
		// 		],
		// 	},
		// }
	},
	spanish: {
		1: {
			ProjectHeader: {
				title: 'Sistema de gestión de datos y visita de campo',
				publishDate: 'Abr 22, 2022',
				tags: 'Aplicación Web/Proyecto de grado',
			},
			ProjectImages: [
				{
					id: 1,
					title: 'Inicio de sesion',
					img: idm_1,
				},
				{
					id: 2,
					title: 'Pagina inicial',
					img: idm_2,
				},
				{
					id: 3,
					title: 'Reportes',
					img: idm_3,
				},
			],
			ProjectInfo: {
				ClientHeading: 'Cliente',
				CompanyInfo: [
					{
						id: 1,
						title: 'Nombre',
						details: 'Instituto de Desarrollo Municipal de Dosquebradas (IDM)',
					}
				],
				ObjectivesHeading: 'Objetivo',
				ObjectivesDetails:
					'Desarrollar un aplicativo web para gestionar la información de las viviendas VIP y VIS de forma integral en el IDM',
				Technologies: [
					{
						title: 'Herramientas y Tecnologias',
						techs: [
							'HTML',
							'CSS',
							'JavaScript',
							'JQuery',
							'Bootstrap',
							'PHP',
							'Codeigniter',
							'MySQL',
						],
					},
				],
				ProjectDetailsHeading: 'Desafio',
				ProjectDetails: [
					{
						id: 1,
						details:
							'Uno de estos procesos tiene que ver con mejorar la gestión de los proyectos de vivienda VIP y VIS en todo el territorio nacional logrando dar respuesta de forma ágil y eficiente a nuevos requerimientos en cuanto a urbanismo de los proyectos y mejoras en las viviendas. Esto incluye al Instituto de Desarrollo Municipal de Dosquebradas (IDM) que es una entidad del orden territorial pero regida bajo lineamientos nacionales, que requiere hacer frente a las estrategias y propuestas que presenta el gobierno nacional para lo cual es indispensable un manejo adecuado de toda la información que	se tiene y gestiona de estos proyectos, para que la toma de decisiones sea lo más ágil y acertada posible en cuanto al proceso de gestión de las viviendas.',
					},
					{
						id: 2,
						details:
							'Para contribuir a la solución de estos requerimientos y necesidades se planteó la posibilidad de desarrollar una herramienta de software que garantice una mejora en la calidad de	captura de la información, disponibilidad, protección y mayor gestión. Para esto se realizó una		reunión inicial con los directivos, administradores y personal de campo, para conocer de manera	más clara los requerimientos y necesidades en las diferentes etapas del proyecto ya que son las	personas encargadas de toda la gestión de información que gira en torno a las viviendas VIP y VIS, debido a los requerimiento planteados por los directos implicados se optó por realizar el desarrollo en un entorno web , soportado con la metodología ágil Extreme Programming (XP) la cual permite realizar buenos desarrollos en equipos de trabajo y la posibilidad de adaptarse a los	cambio que surjan durante la realización del proyecto logrando así de manera ágil y oportuna la	recolección de información y la visualización de reportes de los puntos más importantes para la	toma de decisiones.',
					},
				],
				SocialSharingHeading: 'Comparte esto',
				SocialSharing: [
					{
						id: 1,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: 'https://linkedin.com/cristhian-cano',
					}
				],
			},
			RelatedProject: {
				title: 'Projectos relacionados',
				Projects: [
				],
			},
		},
		2: {
			ProjectHeader: {
				title: 'Sistema POS',
				publishDate: 'Abr 23, 2023',
				tags: 'Aplicación Web',
			},
			ProjectImages: [
				{
					id: 1,
					title: 'Inventario',
					img: cerdos_1,
				},
				{
					id: 2,
					title: 'Registro de ventas',
					img: cerdos_2,
				},
				{
					id: 3,
					title: 'Reportes',
					img: cerdos_3,
				},
			],
			ProjectInfo: {
				ClientHeading: 'Cliente',
				CompanyInfo: [
					{
						id: 1,
						title: 'Nombre',
						details: 'Cerdos del Eje',
					},
					{
						id: 2,
						title: 'Servicios',
						details: 'Carniceria',
					},
					{
						id: 3,
						title: 'Ubicacion',
						details: 'Armenia / Quindío',
					},
				],
				ObjectivesHeading: 'Objetivo',
				ObjectivesDetails:
					'Facilitar y agilizar el proceso de venta al tiempo que proporciona información en tiempo real sobre inventarios y ventas para optimizar la gestión y la toma de decisiones en el negocio',
				Technologies: [
					{
						title: 'Herramientas y Tecnologias',
						techs: [
							'HTML',
							'CSS',
							'JavaScript',
							'JQuery',
							'Bootstrap',
							'PHP',
							'Codeigniter',
							'MySQL',
						],
					},
				],
				ProjectDetailsHeading: 'Desafio',
				ProjectDetails: [
					{
						id: 1,
						details:
							'Manejo de Inventarios Específicos: La gestión de productos frescos y perecederos, como la carne, requiere un sistema que pueda realizar un seguimiento preciso de los niveles de inventario, fechas de caducidad y rotación de productos.',
					},
					{
						id: 2,
						details:
							'Variedad de Cortes y Productos: Las carnicerías ofrecen una amplia variedad de cortes de carne y productos relacionados. El sistema debe ser lo suficientemente flexible para manejar diferentes tipos de productos, precios por peso y opciones de empaque.',
					},
					{
						id: 3,
						details:
							'Interfaz de Usuario Amigable: Dado que las carnicerías pueden tener un alto volumen de transacciones, la interfaz de usuario debe ser intuitiva y fácil de usar para acelerar el proceso de venta y minimizar errores.',
					},
					{
						id: 4,
						details:
							'Seguridad y Cumplimiento: Garantizar la seguridad de los datos del cliente y cumplir con las regulaciones de protección de datos es fundamental. El sistema debe implementar medidas de seguridad robustas y estar en conformidad con las normativas aplicables.',
					},
				],
				SocialSharingHeading: 'Share This',
				SocialSharing: [
					{
						id: 1,
						name: 'LinkedIn',
						icon: <FiLinkedin />,
						url: 'https://linkedin.com/cristhian-cano',
					}
				],
			},
			RelatedProject: {
				title: 'Proyectos Relacionados',
				Projects: [
					{
						id: 1,
						title: 'Aplicación Web',
						name:'Sistema de gestión de datos y visita de campo',
						img: bosque_1,
					}
				],
			},
		}
	}
};
