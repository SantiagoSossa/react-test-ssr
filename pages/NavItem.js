import React from 'react'
// import classes from '../css/NavItem.module.css'

export default function NavItem(props) {
    return(
        <div className="NavItem">
            <img src={props.icon} alt="prueba"></img>
            <h1 className="Title">{props.name}</h1>
        </div>
    )
}