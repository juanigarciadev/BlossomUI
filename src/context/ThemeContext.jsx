import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState("")

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])


    const handleChangeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "" ? "dark" : ""))
    }

    let data = {
        theme,
        setTheme,
        handleChangeTheme,

    }

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider