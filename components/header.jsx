import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

function Header({ darkMode }) {
    return (
        <header id="home" className={`min-h-[100vh] flex flex-col justify-center items-center relative transition-colors duration-500 ${
            darkMode ? 'bg-neutral-950 bg-grid-dark' : 'bg-white bg-grid'
        }`}>
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

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
                className='text-[clamp(4rem,12vw,8rem)] -mt-[clamp(1rem,4vw,5rem)] font-["Anton"] relative -mb-5'
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
                transition={{ duration: 2, delay: 0.2 }}
                className='text-[clamp(4rem,12vw,8rem)] -mt-[clamp(1rem,4vw,5rem)] font-["Anton"] relative -mb-5'
            >
                <span className={`bg-clip-text text-transparent ${
                    darkMode 
                    ? 'bg-gradient-to-r from-white via-gray-100 to-gray-300'
                    : 'bg-gradient-to-r from-gray-700 via-gray-900 to-black'
                }`}>
                    GHORPADE
                </span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.4 }}
                className={`text-xl md:text-2xl text-center max-w-2xl px-4 ${
                    darkMode ? 'text-neutral-400' : 'text-gray-600'
                }`}
            >
                <TypeAnimation
                    sequence={[
                        'i am a full stack developer with a passion for creating ',
                        4000,
                    ]}
                    repeat={Infinity}
                    speed={50}
                    className="font-medium"
                />
            </motion.div>
        </header>
    );
}

export default Header;