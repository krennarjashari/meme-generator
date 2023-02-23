import React from "react";
import logo from "../images/laugh.png"

export default function Header() {
    return (
        <header className="header">
            <img src={logo} className="header--image" />
            <h2 className="header--title">Header component</h2>
        </header>
    )
}