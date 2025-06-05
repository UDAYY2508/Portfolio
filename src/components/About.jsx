import React from 'react';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";

const About = ({ darkMode }) => {
    const skills = [
        "JavaScript", "React.js", "Node.js", "Python",
        "HTML/CSS","MongoDB","Github", "Express.js","Tailwind CSS","Framer Motion"
    ];

    return (
        <section id="about" className={`min-h-screen py-20 relative transition-colors duration-500 ${
            darkMode ?  'bg-neutral-950 bg-grid-dark' : 'bg-white bg-grid'
        }`}>
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            
            <div className="container mx-auto px-4">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`text-4xl font-Anton md:text-5xl text-center mb-16 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                    }`}
                >
                   ABOUT ME
                </motion.h2>

                <div className="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto">
                    <Marquee className="text-4xl font-Anton md:text-5xl text-center mb-16 text-black">
                        hi there  asmcvd adsvfgb afsgdhf fegrdhtf
                    </Marquee>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className={`flex-1 space-y-6 ${
                            darkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                    >
                        <div className={`p-8 rounded-2xl min-h-[254px] backdrop-blur-sm border ${
                            darkMode ? 'border-white/10 bg-white/5' : 'border-black/5 bg-black/5'
                        }`}>
                            <h3 className={`text-2xl font-semibold mb-6 ${
                                darkMode ? 'text-white' : 'text-gray-800'
                            }`}>
                                MY JOURNEY
                            </h3>
                            <p className="text-lg leading-relaxed">
                                Hi there! I'm a passionate Full Stack Developer with a keen eye for creating elegant solutions. 
                                With a strong foundation in both front-end and back-end development, I love bringing ideas to life 
                                through code.
                            </p>
                           
                        </div>
                    </motion.div>
                    
                            
                </div>
            </div>
        </section>
    );
};

export default About; 