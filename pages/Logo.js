import React from 'react'
// import classes from '../css/Logo.module.css'
import Link from 'next/link'

export default function Logo(props) {
    return(
        <div className="Logo">
            <Link href ="/PageTwo" as="/inner-page">
                <h1 className="LogoName">jifcast</h1>
            </Link>
        </div>
    )
}

// style={{ textDecoration: 'none' }}