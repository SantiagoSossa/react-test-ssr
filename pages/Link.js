import React from "react";
// import classes from "../css/Link.module.css";
import play from "../assets/playbutton_icon.svg";

export default function Link(props) {
  return (
    <div className="Link">
      <a className=".a" href={props.href} rel="noopener noreferrer" aria-label={props.href} target="_blank">
        {props.name}
      </a>
    </div>
  );
}
