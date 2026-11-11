import { useEffect, useState, createContext } from "react";

export const ThemeContext = createContext()

const STORAGE_KEY = "blossomui-theme"

const getInitialTheme = () => {
    try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored === "dark" || stored === "light") return stored === "dark" ? "dark" : ""
    } catch { /* storage unavailable */ }
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : ""
}

const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState(getInitialTheme)

    useEffect(() => {
        const root = document.documentElement
        root.classList.toggle('dark', theme === "dark")
        // The head script painted the background before the stylesheet arrived: from here on the stylesheet decides.
        root.style.backgroundColor = ''
        root.style.colorScheme = theme === "dark" ? 'dark' : 'light'
        try {
            localStorage.setItem(STORAGE_KEY, theme === "dark" ? "dark" : "light")
        } catch { /* storage unavailable */ }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "" ? "dark" : ""))
    }

    const data = {
        theme,
        setTheme,
        handleChangeTheme,
    }

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider
