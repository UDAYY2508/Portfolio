import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import './index.css';

function App() {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Header darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Projects darkMode={darkMode} />
        </>
    );
}

export default App;