import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaChevronDown, FaFileDownload, FaMoon } from 'react-icons/fa';
import { FaLightbulb } from 'react-icons/fa6';
import { TypeAnimation } from 'react-type-animation';
import img from '../src/assets/img.jpg';

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, []);

    return ( 
        <header className={`min-h-[100vh] flex flex-col justify-center items-center relative transition-colors duration-500 ${
            darkMode   ? 'bg-neutral-950 bg-grid-dark' 
  : 'bg-white bg-grid'
          
        }`}>
            
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            
            <motion.button
                onClick={() => setDarkMode(!darkMode)}
                className={`absolute top-8 right-8 p-3 rounded-full transition-all duration-300 ${
                    darkMode 
                    ? 'bg-neutral-800 text-neutral-400 hover:bg-neutral-700 hover:text-neutral-300' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {darkMode ? <FaLightbulb size={24} /> : <FaMoon size={24} />}
            </motion.button>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className={`text-[clamp(2rem,10vw,5rem)] font-Hurricane relative ${
                    darkMode ? 'text-gray-200' : 'text-gray-600'
                }`}
            >
                hey I'm
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.2 }}
                className='text-[clamp(4rem,12vw,8rem)] -mt-[clamp(1rem,4vw,5rem)] font-["Anton"] relative'
            >
                <span className={`bg-clip-text text-transparent ${
                    darkMode 
                    ? 'bg-gradient-to-r from-white via-gray-100 to-gray-300'
                    : 'bg-gradient-to-r from-gray-700 via-gray-900 to-black'
                }`}>
                    UDAY
                </span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.4 }}
                className={`text-xl md:text-2xl mt-4 text-center max-w-2xl px-4 ${
                    darkMode ? 'text-neutral-400' : 'text-gray-600'
                }`}
            >
                <TypeAnimation
                    sequence={[
                        'Full Stack Developer & Creative Coder',
                        2000,
                        'Crafting Digital Experiences with Passion',
                        2000,
                        'Turning Complex Problems into Elegant Solutions',
                        2000,
                    ]}
                    repeat={Infinity}
                    speed={50}
                    className="font-medium"
                />
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.6 }}
                className='flex gap-4 mt-12'
            >
                <motion.a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-all duration-300 ${
                        darkMode 
                        ? 'bg-neutral-800 text-white hover:bg-neutral-700 hover:text-gray-200' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaGithub size={24} />
                </motion.a>
                <motion.a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-all duration-300 ${
                        darkMode 
                        ? 'bg-neutral-800 text-white hover:bg-neutral-700 hover:text-gray-200' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaLinkedin size={24} />
                </motion.a>
                <motion.a
                    href="/your-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                        darkMode 
                        ? 'bg-neutral-800 text-white hover:bg-neutral-700 hover:text-gray-200' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaFileDownload size={24} />
                    <span className="hidden sm:inline">Download CV</span>
                </motion.a>
            </motion.div>

            <motion.div 
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${
                    darkMode ? 'text-neutral-400' : 'text-gray-400'
                }`}
                animate={{ 
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <FaChevronDown size={24} />
            </motion.div>
        </header>
    );
}

export default Header;