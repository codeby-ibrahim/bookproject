import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    // ❗ Default LIGHT mode
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.className = darkMode
            ? "bg-gray-900 text-white"
            : "bg-white text-gray-900";
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
 