import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';
import useDetectLanguage from '../../hooks/useDetectLanguage';

const AboutCounter = () => {
	const isSpanish = useDetectLanguage();
	useCountUp({ ref: 'experienceCounter', end: 3, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 77, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title={isSpanish ? "Años de experiencia":"Years of experience"}
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title={isSpanish ? "Comentarios positivos" :"Positive feedback"}
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/>

				<CounterItem
					title={isSpanish ? "Proyectos completados":"Projects completed"}
					counter={<span id="projectsCounter" />}
					measurement="%"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
