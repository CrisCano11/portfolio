import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import useDetectLanguage from '../../hooks/useDetectLanguage';

const contacts = [
	{
		id: 1,
		name: 'Armenia / Quindío',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'contact@cristhian-cano.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+57 322 660 1318',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	const isSpanish = useDetectLanguage();
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					{isSpanish ? "Datos de contacto" : "Contact details"}
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
								{contact.icon}
							</i>
							<span className="text-lg mb-4 text-ternary-dark dark:text-ternary-light">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;
