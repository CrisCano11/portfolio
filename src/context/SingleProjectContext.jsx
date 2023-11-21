import { useState, createContext, useEffect } from 'react';
import { singleProjectData as projectData } from '../data/singleProjectData';
import useDetectLanguage from '../hooks/useDetectLanguage';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ id, children }) => {
	const isSpanish = useDetectLanguage();
	const data = isSpanish ? projectData.spanish[id] : projectData.spanish[id];

	const [singleProjectData, setSingleProjectData] = useState(data);

	useEffect(() => {
		const data = isSpanish ? projectData.spanish[id] : projectData.spanish[id];
		setSingleProjectData(data || {});
	}, [isSpanish, id]);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
