
const SubmitButton = ({isSpanish,isSubmitting, onClose}) => {
    return (
        <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
            <button
                title={isSpanish ? "Enviar mensaje" : "Send Message"}
                type="submit"
                aria-label={isSpanish ? "Enviar mensaje" : "Send Message"}
                disabled={isSubmitting}
                className={`relative inline-flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-wait' : ''}`}
            >
                {isSubmitting ? (
                    <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-center mt-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {isSpanish ? 'Enviando ....' : 'Sending...'}
                    </div>
                ) : (isSpanish ? "Enviar mensaje" : "Send Message")}
            </button>
        </div>
    )
}

export default SubmitButton;