import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaLightbulb, FaMoon,  } from 'react-icons/fa6';

function Navbar({ darkMode, setDarkMode }) {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrolled = currentScrollPos > 50;
            
            setIsVisible((prevIsVisible) => {
                if (currentScrollPos < 50) return true;
                
                const shouldBeVisible = prevScrollPos > currentScrollPos || currentScrollPos < 50;
                return shouldBeVisible;
            });

            setScrolled(isScrolled);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const navAnimation = {
        hidden: { y: -100, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.nav
            variants={navAnimation}
            initial="visible"
            animate={isVisible ? "visible" : "hidden"}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? `${darkMode ? 'bg-neutral-900/70' : 'bg-white/70'} shadow-lg backdrop-blur-lg` 
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <motion.a
                        href="#home"
                        className={`text-2xl md:text-3xl font-bold relative group ${
                            darkMode ? 'text-white' : 'text-gray-900'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 p-10 pr-15"><FaCode /></span>
                        <motion.div 
                            className={`absolute bottom-0 left-0 w-full h-1 ${
                                darkMode ? 'bg-white' : 'bg-gray-900'
                            } origin-left`}
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.a>

                    <div className="hidden md:flex items-center justify-center flex-1 mx-10">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`text-base font-medium relative group px-5 ${
                                    darkMode 
                                        ? 'text-gray-300 hover:text-white' 
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {item.name}
                                <motion.div 
                                    className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                                        darkMode ? 'bg-white' : 'bg-gray-900'
                                    } origin-left`}
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <motion.button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-3 rounded-full flex items-center justify-center ${
                                darkMode 
                                    ? 'bg-white/10 text-white hover:bg-white/20' 
                                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={darkMode ? 'dark' : 'light'}
                                    initial={{ rotate: -180, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 180, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {darkMode ? <FaLightbulb size={18} /> : <FaMoon size={18} />}
                                </motion.div>
                            </AnimatePresence>
                        </motion.button>

                        <motion.button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`md:hidden p-2.5 rounded-lg ${
                                darkMode 
                                    ? 'bg-white/10 text-white hover:bg-white/20' 
                                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                            }`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <div className="w-6 space-y-1.5">
                                <motion.span
                                    animate={{
                                        rotate: isMenuOpen ? 45 : 0,
                                        y: isMenuOpen ? 8 : 0
                                    }}
                                    className={`block w-6 h-0.5 ${
                                        darkMode ? 'bg-white' : 'bg-gray-900'
                                    }`}
                                />
                                <motion.span
                                    animate={{
                                        opacity: isMenuOpen ? 0 : 1
                                    }}
                                    className={`block w-6 h-0.5 ${
                                        darkMode ? 'bg-white' : 'bg-gray-900'
                                    }`}
                                />
                                <motion.span
                                    animate={{
                                        rotate: isMenuOpen ? -45 : 0,
                                        y: isMenuOpen ? -8 : 0
                                    }}
                                    className={`block w-6 h-0.5 ${
                                        darkMode ? 'bg-white' : 'bg-gray-900'
                                    }`}
                                />
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`md:hidden overflow-hidden ${
                            darkMode ? 'bg-neutral-900/95' : 'bg-white/95'
                        } backdrop-blur-lg`}
                    >
                        <div className="px-4 py-4 space-y-3">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`block py-2 text-base font-medium ${
                                        darkMode 
                                            ? 'text-gray-300 hover:text-white' 
                                            : 'text-gray-600 hover:text-gray-900'
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
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