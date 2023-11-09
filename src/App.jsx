import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { AnimatePresence } from 'framer-motion';
import { lazy, suspend } from 'react';
import Footer from './components/shared/Footer'


function App() {
  return (
    <AnimatePresence>
      <div className="bg-secondary-light dark:bg-primaryu-dark transition duration-300">
      <Footer/>
      </div>
    </AnimatePresence>
  );
}

export default App
