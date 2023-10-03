import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'

const NavbarContainer = () => {

    const [mobileNavToggle, setMobileNavToggle] = useState(false)

    return (
        <Navbar mobileNavToggle={mobileNavToggle} setMobileNavToggle={setMobileNavToggle} />
    )
}

export default NavbarContainer