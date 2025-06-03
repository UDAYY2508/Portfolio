import React from 'react';
import { motion } from 'framer-motion';

function About({ darkMode }) {
    return (
        <section 
            id="about" 
            className={`min-h-[100vh] flex flex-col justify-center items-center relative py-20 transition-colors duration-500 ${
                darkMode ? 'bg-neutral-950 bg-grid-dark' : 'bg-white bg-grid'
            }`}
        >
            <div className="container mx-auto px-4">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`text-5xl font-bold text-center mb-16 font-Bebas tracking-wider ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                >
                    About Me
                </motion.h1>
                

             
                                
            
            </div>
        </section>
    );
}

export default About;