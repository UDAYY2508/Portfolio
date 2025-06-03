import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/header';
import About from '../components/about';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            setDarkMode(true);
        }
    }, []);

    return (
        <>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Header darkMode={darkMode} />
            <About darkMode={darkMode} />
        </>
    );
}

export default App;