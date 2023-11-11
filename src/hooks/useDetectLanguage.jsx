import { useEffect, useState } from "react";


const useDetectLanguage = () => {
    const [isSpanish, setIsSpanish] = useState(false);

    useEffect(()=>{
        const detectLanguage = () =>{
            const language = navigator.language;
            setIsSpanish(language.startsWith('es'));
        }

        detectLanguage();
        
        window.addEventListener('languagechange',detectLanguage);

        return ()=> {
            window.removeEventListener('languagechange',detectLanguage);
        }
    })

  return isSpanish;
}

export default useDetectLanguage