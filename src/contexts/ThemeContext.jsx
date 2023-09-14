import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);  // default to dark mode

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
