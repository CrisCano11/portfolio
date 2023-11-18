import useDetectLanguage from "./useDetectLanguage";

const selectOptionsEn = [
    'Web Application',
    'Progressive Web Application (PWA)',
    'Solar Energy',
    'CCTV'
];

const selectOptionsEs = [
    { value: '', label: 'Todos' },
    { value: 'Aplicación Web', label: 'Aplicación Web' },
    { value: 'Aplicación Web Progresiva (PWA)', label: 'Aplicación Web Progresiva (PWA)' },
    { value: 'Energia Solar', label: 'Energia Solar' },
    { value: 'CCTV', label: 'CCTV' }
];

const useSelectOptions = () => {
    const isSpanish = useDetectLanguage();

    return isSpanish ? selectOptionsEs : selectOptionsEn;
}

export default useSelectOptions