function Copyright() {
    return (
        <div className="font-general-regular flex justify-center items-center text-center">
            <div className="text-lg text-ternary-dark dark:text-ternary.light">
                &copy; {new Date().getFullYear()}
                <a href="https://github.com/CrisCano11/portfolio" target="_blank" rel="noreferrer" className='hover:undeline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500' >Portfolio</a>
                <a href="https://cristhiancano.com/" className="text-secondary-dark dark:text-secondary-light font-medium hover:undeline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500">Cristhian cano</a>
            </div>
        </div>
    )
}

export default Copyright