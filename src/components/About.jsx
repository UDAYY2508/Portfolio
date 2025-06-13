import React from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

function About({ darkMode }) {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
        viewport: { once: true, margin: "-50px" }
    };

    const staggerContainer = {
        initial: { opacity: 0 },
        whileInView: { 
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.3,
                ease: "easeOut"
            }
        },
        viewport: { once: true, margin: "-50px" }
    };

    const skillCardVariants = {
        initial: { opacity: 0, y: 20 },
        whileInView: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        viewport: { once: true, margin: "-30px" }
    };

    const skillItemVariants = {
        initial: { opacity: 0, scale: 0.95 },
        whileInView: { 
            opacity: 1, 
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        whileHover: { 
            scale: 1.05,
            transition: { duration: 0.2, ease: "easeOut" }
        },
        whileTap: { scale: 0.95 }
    };

    const skills = [
        { 
            category: "Frontend",
            items: [
                { name: "React", icon: <img src="/assets/react.svg" alt="React" className='w-10 h-10' /> },
                { name: "JavaScript", icon:<img src="/assets/js.png" alt="JavaScript" className='w-10 h-10' /> },
                { name: "Tailwind", icon: <img src="/assets/tailwind.svg" alt="Tailwind" className='w-10 h-10' /> },
                { name: "Motion.dev", icon: <img src="/assets/motionDev.png" alt="Motion.dev" className='w-10 h-10' /> }
            ]
        },
        { 
            category: "Backend",
            items: [
                { name: "Node.js", icon: <img src="/assets/node-js.svg" className='w-10 h-10' alt="Node.js" /> },
                { name: "MongoDB", icon: <img src="/assets/mongodb-.svg" className='w-10 h-10' alt="MongoDB" /> }
            ]
        },
        { 
            category: "Tools",
            items: [
                { name: "Github", icon: darkMode ? <img src="/assets/github-light.svg" alt="Github" className='w-10 h-10' /> : <img src="/assets/github.svg" alt="Github" className='w-10 h-10' /> },
                { name: "webflow", icon: <img src="/assets/webflow-icon.png" alt="VS Code" className='w-10 h-10' /> },
                { name: "Figma", icon: <img src="/assets/figma.svg" alt="Figma" className='w-10 h-10' /> }
            ]
        }
    ];

    return (
        <AnimatePresence>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                id='about'
                className={`min-h-screen py-16 ${
                    darkMode ? 'bg-neutral-950 bg-grid-dark text-white' : 'bg-white bg-grid text-black'
                }`}
            >
                <motion.div 
                    className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                >
                    <motion.div 
                        className='flex flex-col items-center justify-center mb-20'
                        variants={fadeInUp}
                    >
                        <motion.h1 
                            className={`text-[clamp(2rem,5vw,3rem)] text-4xl tracking-wide font-bold mb-2 bg-clip-text text-transparent font-Anton ${
                                darkMode 
                                    ? 'bg-gradient-to-r from-white via-gray-100 to-gray-300'
                                    : 'bg-gradient-to-r from-gray-700 via-gray-900 to-black'
                            }`}
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        >
                            ABOUT
                        </motion.h1>
                        <motion.div 
                            className={`w-20 h-1 rounded-full mb-12 ${
                                darkMode ? 'bg-neutral-200' : 'bg-gray-600'
                            }`}
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: 80, opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        />
                        
                        <motion.div 
                            className='grid md:grid-cols-2 gap-12 items-center'
                            variants={staggerContainer}
                        >
                            <motion.div 
                                className='space-y-6'
                                variants={fadeInUp}
                            >
                                <motion.p 
                                    className={`text-xl md:text-2xl text-center max-w-2xl px-4  ${
                                        darkMode ? 'text-neutral-300' : 'text-gray-600'
                                    }`}
                                    variants={fadeInUp}
                                >
                                    Hey! I'm a growing web developer and designer.I'm constantly exploring new ways to bring imagination to life—whether it's through smooth animations, or unique user experiences.
                                </motion.p>
                                <motion.p 
                                   className={`text-xl md:text-2xl text-center  max-w-2xl px-4 ${
                                    darkMode ? 'text-neutral-300' : 'text-gray-600'
                                }`}
                                    variants={fadeInUp}
                                >
                                    I believe in learning by doing, growing with every project, and turning fresh ideas into functional and unique realities on the web — and I’m excited to work on meaningful real-world projects.
                                </motion.p>
                            </motion.div>
                            <motion.div 
                                className='relative group'
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <motion.div 
                                    className='rounded-4xl overflow-hidden'
                                    whileHover={{ 
                                        scale: 1.05,
                                        transition: { duration: 0.5, ease: "easeOut" }
                                    }}
                                >
                                    <img 
                                        src="/assets/profile-bg.jpg" 
                                        alt="Profile" 
                                        className='w-[500px] rounded-full object-cover'
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className='mt-32'
                        variants={staggerContainer}
                    >
                        <motion.h2 
                            className={`text-4xl md:text-5xl font-Anton tracking-wider font-bold text-center mb-16 bg-clip-text text-transparent ${
                                darkMode 
                                    ? 'bg-gradient-to-r from-white via-gray-100 to-gray-300'
                                    : 'bg-gradient-to-r from-gray-700 via-gray-900 to-black'
                            }`}
                            variants={fadeInUp}
                        >
                            SKILLS
                            <motion.div 
                           className={`w-20 h-1 rounded-full mx-auto  mt-3 ${
                            darkMode ? 'bg-neutral-200' : 'bg-gray-600'
                        }`}
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: 80, opacity: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        />
                        </motion.h2>
                        <motion.div 
                            className='grid md:grid-cols-3 gap-8'
                            variants={staggerContainer}
                        >
                            {skills.map((skillSet, index) => (
                                <motion.div 
                                    key={index} 
                                    className={`p-6 rounded-xl ${
                                        darkMode ? 'bg-neutral-900/50' : 'bg-gray-50/80'
                                    } backdrop-blur-sm`}
                                    variants={skillCardVariants}
                                    whileHover={{ 
                                        scale: 1.02,
                                        transition: { duration: 0.5, ease: "easeOut" }
                                    }}
                                >
                                    <motion.h3 
                                        className={`text-2xl font-semibold mb-6 bg-clip-text text-transparent ${
                                            darkMode 
                                                ? 'bg-gradient-to-r from-white via-gray-100 to-gray-300'
                                                : 'bg-gradient-to-r from-gray-700 via-gray-900 to-black'
                                        }`}
                                    >
                                        {skillSet.category}
                                    </motion.h3>
                                    <motion.div 
                                        className='grid grid-cols-2 gap-4'
                                        variants={staggerContainer}
                                    >
                                        {skillSet.items.map((skill, skillIndex) => (
                                            <motion.div 
                                                key={skillIndex}
                                                className={`p-4 rounded-lg ${
                                                    darkMode 
                                                        ? 'bg-neutral-800/70 hover:bg-neutral-700/70' 
                                                        : 'bg-white/70 hover:bg-gray-100/70'
                                                } backdrop-blur-sm`}
                                                variants={skillItemVariants}
                                            >
                                                <motion.div 
                                                    className="flex items-center space-x-3"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                                >
                                                    <motion.span 
                                                        className="text-2xl"
                                                        whileHover={{ 
                                                            rotate: 360,
                                                            transition: { duration: 0.8, ease: "easeOut" }
                                                        }}
                                                    >
                                                        {skill.icon}
                                                    </motion.span>
                                                    <motion.span 
                                                        className={`font-medium ${
                                                            darkMode ? 'text-gray-300' : 'text-gray-800'
                                                        }`}
                                                    >
                                                        {skill.name}
                                                    </motion.span>
                                                </motion.div>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default About;