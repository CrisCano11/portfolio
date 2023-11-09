import { useRouteError, Link } from "react-router-dom"
import { FaHome } from 'react-icons/fa';

const NotFound = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className="text-center mt-10">
            <h1 className="mb-4 text-6xl font-semibold text-red-600">404</h1>
            <p className="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
            <div className="animate-bounce">
                <svg className="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
            </div>
            <Link to="/" className="bg-red-600 hover:bg-grey text-white font-bold py-2 px-4 rounded inline-flex items-center"><FaHome /><span> &nbsp;Go to home</span></Link>
        </div>
    )
}

export default NotFound;