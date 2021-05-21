import React, { useState, useEffect } from 'react';
import '../styles/colors.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

function DarkModeToggle(props) {

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('DARK_MODE')));
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('DARK_MODE')) === true) {
            document.body.classList.add('dark-mode');
        }
    }, []);

    function handleModeChange() {
        if (!darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        setDarkMode(!darkMode);
        localStorage.setItem('DARK_MODE', !darkMode);
    }
    return (
        <button onClick={handleModeChange} className="dark-mode-btn"><FontAwesomeIcon icon={faMoon} /></button>
    );
};

export default DarkModeToggle;