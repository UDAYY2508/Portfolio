import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

function Projects({ darkMode }) {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            title: "GAMENEXT",
            description: "A game recommendation system to find your next go to game",
            tech: "JavaScript • CSS • API",
            github: "",
            live: "",
            image: "assets/sample-pic.jpg",
            video: "assets/game-nxt-vid.mp4"
        },
        {
            title: "Invoice Generator",
            description: "A simple invoice generator to create invoices for your clients",
            tech: "React • Node.js • Express",
            github: "https://github.com/UDAYY2508/invoice-app",
            live: "https://ezy-invoice.netlify.app",
            image: "assets/sample-pic.jpg",
            video: "assets/invoice-vid.mp4"
        },
        {
            title: "XDRIVE",
            description: "A file management system to store and share files with authentication",
            tech: "React • Node.js • MongoDB",
            github: "",
            live: "",
            image: "assets/sample-pic.jpg",
            video: "assets/xdrive.mp4"
        }
    ];

    return (
        <div id='projects' className={`min-h-screen py-24 flex flex-col items-center relative transition-colors duration-500 ${
            darkMode ? 'bg-neutral-950 bg-grid-dark' : 'bg-white bg-grid'
            
        }`}>
            <div className='absolute inset-0 bg-grid-pattern opacity-5' />
            
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <motion.h2
                    className={`text-4xl tracking-wide sm:text-5xl text-center font-Anton font-bold mb-2.5 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    PROJECTS
                </motion.h2>

                <motion.div 
                    className={`w-16 h-1 mx-auto rounded-full mb-3 ${
                        darkMode ? 'bg-white' : 'bg-gray-900'
                    }`}
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: 64, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredProject(project)}
                            onMouseLeave={() => setHoveredProject(null)}
                            className={`group p-6 rounded-xl transition-all duration-300 relative ${
                                darkMode 
                                    ? 'hover:bg-neutral-900/50' 
                                    : 'hover:bg-gray-50'
                            }`}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className={`text-xl font-medium mb-1 group-hover:translate-x-2 transition-transform duration-300 ${
                                        darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        {project.title}
                                    </h3>
                                    <p className={`text-sm mb-2 ${
                                        darkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {project.description}
                                    </p>
                                    <p className={`text-xs font-mono ${
                                        darkMode ? 'text-gray-500' : 'text-gray-500'
                                    }`}>
                                        {project.tech}
                                    </p>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`p-2 rounded-full ${
                                            darkMode 
                                                ? 'bg-white/10 hover:bg-white/20 text-white' 
                                                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                                        }`}
                                    >
                                        <FaGithub size={18} />
                                    </motion.a>
                                    <motion.a
                                        href={project.live}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`p-2 rounded-full ${
                                            darkMode 
                                                ? 'bg-white/10 hover:bg-white/20 text-white' 
                                                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                                        }`}
                                    >
                                        <FaArrowRight size={18} />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Video Preview */}
            <AnimatePresence>
                {hoveredProject && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-8 right-8 z-50 rounded-xl overflow-hidden shadow-2xl bg-black"
                        style={{ width: '390px', height: '250px' }}
                    >
                        <video
                            key={hoveredProject.video}
                            src={hoveredProject.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Projects;