import React from 'react'

export default function NavItem(props) {
    return(
        <div className="NavItem">
            <img src={props.icon} alt="prueba"></img>
            <h1 className="Title">{props.name}</h1>
        </div>
    )
}