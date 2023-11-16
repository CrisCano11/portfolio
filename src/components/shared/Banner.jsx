import useDetectLanguage from "../../hooks/useDetectLanguage"
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import developerLight from '../../images/developer.svg';
import developerDark from '../../images/developer-dark.svg';
import { motion } from "framer-motion"
import { FiArrowDownCircle } from "react-icons/fi"
import { PiHandWavingFill } from "react-icons/pi";

const Banner = () => {
    const isSpanish = useDetectLanguage();
    const { activeTheme } = useThemeSwitcher();

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
            className="flex flex-col sm:justify:between items-center sm:flex-row mt-12 md:mt-2"
        >
            <div className="w-full md:w-1/3 text-left">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.1 }}
                    className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase flex items-center"
                >
                   <PiHandWavingFill className="lg:text-8xl xl:text-9xl mr-2 sm:text-2xl md:text-4xl xs:text-xl" /> {isSpanish ? " Hola, Soy Cristhian Cano":"Hi, I am Cristhian Cano"}
                </motion.h1>
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.1 }}
                    className="font-general-semibold mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
                >
                   {isSpanish ? "Ingeniero de Sistemas y Desarrollador Web Full Stack":"A Systems Engineer & Full-Stack Developer"}
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 0.9,
                        delay: 0.3,
                    }}
                    className="flex justify-center sm:block"
                >
                    {isSpanish ? (
                        <a
                            download="CV_Cristhian_Cano.pdf"
                            href="/files/CV_Cristhian_Cano.pdf"
                            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                            aria-label="Descargar CV"
                        >
                            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                            <span className="text-sm sm:text-lg font-general-medium duration-100">
                                Descargar CV
                            </span>
                        </a>

                    ) : (
                        <a
                            download="CV_Cristhian_Cano_en.pdf"
                            href="/files/CV_Cristhian_Cano_en.pdf"
                            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                            aria-label="Download Resume"
                        >
                            <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
                            <span className="text-sm sm:text-lg font-general-medium duration-100">
                                Download CV
                            </span>
                        </a>
                    )}
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
                className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
            >

                <img
                    src={
                        activeTheme === 'light' ? developerLight : developerDark
                    }
                    alt="Developer"
                />
            </motion.div>

        </motion.section>
    )
}

export default Banner;