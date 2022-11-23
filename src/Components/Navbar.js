import React from "react";
import logo from "../images/react-logo.svg";

export default function Main() {
  return (
    <nav className="nav">
      <img src={logo} alt ="logo" className="nav-icon" width={50}/>
      <h1 className="nav-logo_text">ReactFacts</h1>
      <h3 className="nav-title">React Course - project 1</h3>
    </nav>
  );
}
