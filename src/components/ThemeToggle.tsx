import { useState, useEffect } from 'react'
import { themeChange } from 'theme-change'

const ThemeToggle = () => {

    const DARK = "aqua";
    const LIGHT = "light";

    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved)
            return saved;

        // Validate if the user has a preference for dark mode
        // If so, set the theme to "aqua" (dark mode)
        // Otherwise, set it to "light" (default mode)
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? DARK : LIGHT;
    });

    useEffect(() => {
        // Set the theme attribute on the document element whenever the theme changes [theme]
        document.documentElement.setAttribute("data-theme", theme);
        // Save the theme to localStorage so it persists across page reloads
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

    const toggleTheme = () => {
        setTheme(prev => {
            return prev === LIGHT ? DARK : LIGHT
        });
    };

    return (<>
        <label className="flex items-center gap-1">
        🌞
        <input
          type="checkbox"
          className="toggle"
          checked={theme === DARK}
          onChange={toggleTheme}
        />
        🌚
        </label>
    </>)

}

export default ThemeToggle;