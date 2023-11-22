const AboutClientSingle = ({ title, image }) => {
	return (
		<>
			<img
				src={image}
				className="w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer filter grayscale hover:filter-none hover:scale-125 ease-in duration-300"
				alt={title}
			/>
		</>
	);
};

export default AboutClientSingle;
