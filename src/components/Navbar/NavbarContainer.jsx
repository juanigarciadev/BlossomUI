import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'

const NavbarContainer = () => {

    const [mobileNavToggle, setMobileNavToggle] = useState(false)
    const [moreDocs, setMoreDocs] = useState(false)

    return (
        <Navbar mobileNavToggle={mobileNavToggle} setMobileNavToggle={setMobileNavToggle} moreDocs={moreDocs} setMoreDocs={setMoreDocs} />
    )
}

export default NavbarContainer