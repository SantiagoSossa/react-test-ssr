import React from 'react'
import NavItems from './NavItems'
import Logo from './Logo'

export default function NavBar(props) {
    return(
        <div className="NavBar">
            <Logo></Logo>
            <NavItems></NavItems>
        </div>
    )
}