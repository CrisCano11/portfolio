import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';
import useDetectLanguage from '../../hooks/useDetectLanguage';

const AboutClients = () => {
	const isSpanish = useDetectLanguage();
	const { clientsData } = useContext(AboutMeContext);
	const clientsHeading = isSpanish ? 'Algunas de las marcas que confían en mí y compañías que he estado laborando' : 'Some of the brands that trust me and companies that I have been working for';
	return (
		<div className="mt-10 sm:mt-20">
			<p className="font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light font-semibold">
				{clientsHeading}
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
				{clientsData.map((client) => (
					<AboutClientSingle
						title={client.title}
						image={client.img}
						key={client.id}
					/>
				))}
			</div>
		</div>
	);
};

export default AboutClients;
