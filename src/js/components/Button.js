import React from "react";
import "../../css/Button.css";

export default function Button({ text, className, href, newTab }) {
  return (
    <div className={className}>
      <a class="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}