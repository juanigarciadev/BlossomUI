import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'

const NavbarContainer = () => {

    const [theme, setTheme] = useState("")
    const [mobileNavToggle, setMobileNavToggle] = useState(false)

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

    return (
        <Navbar theme={theme} setTheme={setTheme} handleChangeTheme={handleChangeTheme} mobileNavToggle={mobileNavToggle} setMobileNavToggle={setMobileNavToggle} />
    )
}

export default NavbarContainer