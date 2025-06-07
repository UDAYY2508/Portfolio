import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

function Header({ darkMode }) {
    const containerVariants = {
        initial: { opacity: 0 },
        animate: { 
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
                duration: 0.3
            }
        }
    };

    const itemVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <AnimatePresence>
            <header id="home" className={`min-h-[100vh] flex flex-col justify-center items-center relative transition-colors duration-500 ${
                darkMode ? 'bg-neutral-950 bg-grid-dark' : 'bg-white bg-grid'
            }`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />

                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className="flex flex-col items-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className={`text-[clamp(2rem,10vw,5rem)] font-Hurricane relative ${
                            darkMode ? 'text-gray-200' : 'text-gray-600'
                        }`}
                    >
                        hey I'm
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className='text-[clamp(4rem,12vw,8rem)] -mt-[clamp(1rem,4vw,5rem)] font-["Anton"] relative -mb-5'
                    >
                        <span className={`bg-clip-text text-transparent ${
                            darkMode 
                            ? 'bg-gradient-to-r from-white via-gray-100 to-gray-300'
                            : 'bg-gradient-to-r from-gray-700 via-gray-900 to-black'
                        }`}>
                            <span>U</span>
                            <span>D</span>
                            <span>A</span>
                            <span>Y</span>
                        </span>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
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
                        variants={itemVariants}
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
                </motion.div>
            </header>
        </AnimatePresence>
    );
}

export default Header;