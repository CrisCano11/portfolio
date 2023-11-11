import { AnimatePresence } from 'framer-motion';
//import { lazy, suspend } from 'react';
import Footer from './components/shared/Footer'
import Header from './components/shared/Header';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <AnimatePresence>
      <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
        <Header />
        <Outlet/>
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default App
