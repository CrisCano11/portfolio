import Select from "react-select";
import useSelectOptions from "../../hooks/useSelectOptions";
import useDetectLanguage from "../../hooks/useDetectLanguage";



const ProjectsFilter = ({ setSelectProject }) => {
	const selectOptions = useSelectOptions();
	const isSpanish = useDetectLanguage();
	return (
		<Select
			options={selectOptions}
			isSearchable
			placeholder={isSpanish ? "Categoria del proyecto" : "Project Category"}
			className="font-general-medium 
                px-4
                sm:px-6
                py-2
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
			onChange={(e) => {
				setSelectProject(e.value);
			}}
		/>
	);
};

export default ProjectsFilter;
