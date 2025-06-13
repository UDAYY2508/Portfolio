import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaCheck, FaTimes } from 'react-icons/fa';

function Contact({ darkMode }) {
    const [result, setResult] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [popupType, setPopupType] = useState("success");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "19991512-6113-48ec-9677-0f00ef1626d3");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setPopupType("success");
                setResult("Submitted Successfully");
                event.target.reset();
            } else {
                setPopupType("error");
                setResult(data.message);
            }
            setShowPopup(true);
            
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
        } catch (error) {
            setPopupType("error");
            setResult("Something went wrong. Please try again.");
            setShowPopup(true);
            
            setTimeout(() => {
                setShowPopup(false);
            }, 3000);
        }
    };

    const contactLinks = [
        {
            icon: <FaGithub className="text-lg" />,
            text: "GitHub",
            link: "https://github.com/UDAYY2508"
        },
        {
            icon: <FaLinkedin className="text-lg" />,
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/uday-ghorpade-a0a0ab21a/"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const popupVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.3 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        exit: { 
            opacity: 0, 
            y: 50, 
            scale: 0.3,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            }
        }
    };

    return ( 
        <div 
        id='contact'
        className={`min-h-screen py-24 relative transition-colors duration-500 ${
            darkMode ? 'bg-neutral-950 bg-grid-dark' : 'bg-white bg-grid'
        }`}>
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        variants={popupVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg flex items-center gap-3 z-50 ${
                            popupType === "success" 
                                ? darkMode 
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                                    : 'bg-green-100 text-green-600 border border-green-200'
                                : darkMode 
                                    ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                                    : 'bg-red-100 text-red-600 border border-red-200'
                        }`}
                    >
                        {popupType === "success" ? (
                            <FaCheck className="text-xl" />
                        ) : (
                            <FaTimes className="text-xl" />
                        )}
                        <p className="font-medium">{result}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className='w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 z-10'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`text-4xl tracking-wider mb-3 sm:text-5xl text-center font-Anton font-bold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                >
                    CONTACT
                    <motion.div 
                    className={`w-16 h-1 mx-auto rounded-full mt-3 mb-16 ${
                        darkMode ? 'bg-white' : 'bg-gray-900'
                    }`}
                    initial={{ width: 0, opacity: 0 }}
                    whileInView={{ width: 64, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "5rem" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={`h-px mx-auto ${
                            darkMode ? 'bg-neutral-700' : 'bg-gray-200'
                        }`} 
                    />
                </motion.div>
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-16"
                >
                    <motion.div variants={itemVariants}>
                        <motion.form onSubmit={onSubmit} className='space-y-4'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type='text'
                                    placeholder='Name'
                                    name='name'
                                    required
                                    className={`w-full p-3 rounded-lg border ${
                                        darkMode 
                                            ? 'bg-transparent border-white/50 text-white placeholder-white/30' 
                                            : 'bg-transparent border-neutral-800 text-neutral-700 placeholder-gray-600'
                                    } focus:outline-none focus:border-neutral-900 transition-colors duration-300`}
                                />
                                <motion.input
                                    whileFocus={{ scale: 1.02 }}
                                    type='email'
                                    name='email'
                                    required
                                    placeholder='Email'
                                    className={`w-full p-3 rounded-lg border ${
                                        darkMode 
                                            ? 'bg-transparent border-white/50 text-white placeholder-white/30' 
                                            : 'bg-transparent border-neutral-800 text-neutral-700 placeholder-neutral-600'
                                    } focus:outline-none focus:border-neutral-900 transition-colors duration-300`}
                                />
                            </div>
                            <motion.textarea
                                whileFocus={{ scale: 1.02 }}
                                placeholder='Message'
                                name='message'
                                required
                                rows="5"
                                className={`w-full h-60 p-3 rounded-lg border ${
                                    darkMode 
                                        ? 'bg-transparent border-white/50 text-white placeholder-white/30' 
                                        : 'bg-transparent border-neutral-800 text-neutral-700 placeholder-gray-600'
                                } focus:outline-none focus:border-neutral-900 transition-colors duration-300`}
                            />
                            <motion.button
                                type='submit'
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full p-3 rounded-lg font-medium transition-all duration-300 ${
                                    darkMode
                                        ? 'bg-white/10 hover:bg-white/20 text-white'
                                        : 'bg-neutral-900 hover:bg-neutral-800 text-white'
                                }`}
                            >
                                {result === "Sending...." ? "Sending..." : "Send Message"}
                            </motion.button>
                        </motion.form>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants}
                        className="flex justify-center items-center gap-25 font-sans text-lg font-bold"
                    >
                        {contactLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-3 rounded-lg transition-all duration-300 text-lg${
                                    darkMode 
                                        ? 'hover:bg-white/5 text-neutral-300' 
                                        : 'hover:bg-gray-50 text-neutral-900'
                                }`}
                                whileHover={{ y: -5, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div 
                                    className={`rounded-lg ${
                                        darkMode ? 'bg-white/5' : 'bg-gray-50'
                                    }`}
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {link.icon}
                                </motion.div>
                                <div>
                                    <p className="font-medium">{link.text}</p>
                                    <p className={`text-sm ${
                                        darkMode ? 'text-neutral-400' : 'text-neutral-600'
                                    }`}>
                                        {link.value}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Contact;