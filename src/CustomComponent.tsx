import React from 'react';
import { useTheme } from './ThemeContext';
import './styles.css';

const ToggleThemeButton: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    const handleClick = () => {
        toggleTheme();
    };

    return (
        <div className={`${theme} wrapper`}>
            <button onClick={handleClick}>
                Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
            </button>
        </div>
    );
};

export default ToggleThemeButton;