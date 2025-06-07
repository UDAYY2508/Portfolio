import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLightbulb, FaMoon } from 'react-icons/fa6';

function Navbar({ darkMode, setDarkMode }) {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const navAnimation = {
        hidden: { 
            y: -100, 
            opacity: 0 
        },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const linkAnimation = {
        hidden: { 
            y: -20, 
            opacity: 0 
        },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const menuAnimation = {
        hidden: { 
            height: 0, 
            opacity: 0 
        },
        visible: { 
            height: "auto", 
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        exit: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const springTransition = {
        type: "spring",
        stiffness: 300,
        damping: 20
    };

    return (
        <motion.nav
            variants={navAnimation}
            initial="hidden"
            animate="visible"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled 
                ? `${
                    darkMode 
                    ? 'bg-neutral-900/70 border-b border-white/10' 
                    : 'bg-white/70 border-b border-black/5'
                } backdrop-blur-xl` 
                : 'bg-transparent'
            }`}
        >
            <div className={`absolute inset-0 transition-opacity duration-500 ${
                scrolled ? 'opacity-100' : 'opacity-0'
            } ${
                darkMode 
                ? 'bg-gradient-to-b from-neutral-900/50 to-neutral-900/30' 
                : 'bg-gradient-to-b from-white/50 to-white/30'
            } backdrop-blur-xl pointer-events-none`} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex items-center justify-between h-16">
                    <motion.a
                        href="#"
                        className={`text-2xl font-bold relative group ${
                            darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={springTransition}
                    >
                        <span className="relative z-10">uday</span>
                        <div className={`absolute inset-0 -m-2 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${
                            darkMode ? 'bg-white/10' : 'bg-black/5'
                        } backdrop-blur-sm`} />
                    </motion.a>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                variants={linkAnimation}
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                whileHover={{ y: -2 }}
                                transition={springTransition}
                                className={`text-sm font-medium relative group ${
                                    darkMode 
                                    ? 'text-gray-300 hover:text-white' 
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {item.name}
                                <div className={`absolute -bottom-1 left-0 right-0 h-px transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                                    darkMode ? 'bg-white/50' : 'bg-black/30'
                                }`} />
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <motion.button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-full relative overflow-hidden ${
                                darkMode 
                                ? 'bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50' 
                                : 'bg-gray-100/50 text-gray-800 hover:bg-gray-200/50'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={springTransition}
                        >
                            <div className={`absolute inset-0 ${
                                darkMode ? 'bg-white/5' : 'bg-black/5'
                            } backdrop-blur-sm`} />
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={darkMode ? 'dark' : 'light'}
                                    initial={{ rotate: -180, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 180, opacity: 0 }}
                                    transition={{ 
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }}
                                    className="relative z-10"
                                >
                                    {darkMode ? <FaLightbulb size={20} /> : <FaMoon size={20} />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>

                        <motion.button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`md:hidden p-2 rounded-md relative ${
                                darkMode ? 'bg-neutral-800/50' : 'bg-gray-100/50'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={springTransition}
                        >
                            <div className={`absolute inset-0 ${
                                darkMode ? 'bg-white/5' : 'bg-black/5'
                            } backdrop-blur-sm rounded-md`} />
                            <div className="relative z-10">
                                <div className={`w-6 h-0.5 transition-all duration-300 ${
                                    darkMode ? 'bg-white' : 'bg-gray-900'
                                } ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`} />
                                <div className={`w-6 h-0.5 my-1.5 transition-all duration-300 ${
                                    darkMode ? 'bg-white' : 'bg-gray-900'
                                } ${isMenuOpen ? 'opacity-0' : ''}`} />
                                <div className={`w-6 h-0.5 transition-all duration-300 ${
                                    darkMode ? 'bg-white' : 'bg-gray-900'
                                } ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`} />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        variants={menuAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`md:hidden overflow-hidden relative ${
                            darkMode 
                            ? 'bg-neutral-900/70 border-t border-white/10' 
                            : 'bg-white/70 border-t border-black/5'
                        }`}
                    >
                        <div className={`absolute inset-0 ${
                            darkMode 
                            ? 'bg-gradient-to-b from-neutral-900/50 to-neutral-900/30' 
                            : 'bg-gradient-to-b from-white/50 to-white/30'
                        } backdrop-blur-xl`} />
                        <div className="px-4 py-3 relative z-10">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    className={`block py-2 text-sm font-medium relative group ${
                                        darkMode 
                                        ? 'text-gray-300 hover:text-white' 
                                        : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                    whileHover={{ x: 10 }}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ 
                                        x: 0, 
                                        opacity: 1,
                                        transition: { 
                                            delay: index * 0.1,
                                            duration: 0.3,
                                            ease: "easeOut"
                                        }
                                    }}
                                >
                                    {item.name}
                                    <div className={`absolute -bottom-1 left-0 right-0 h-px transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                                        darkMode ? 'bg-white/50' : 'bg-black/30'
                                    }`} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

export default Navbar;