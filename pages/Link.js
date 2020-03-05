import React from "react";

export default function Link(props) {
  return (
    <div className="Link">
      <a className=".a" href={props.href} rel="noopener noreferrer" aria-label={props.href} target="_blank">
        {props.name}
      </a>
    </div>
  );
}
