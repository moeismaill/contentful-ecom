import React from "react"
import '../css/header.css'

const Header = () => {
  return (
    <nav className="navigation">
        <a href="/" className="navbar-logo">Jumpstart</a>
        <div className="navbar-link">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
    </nav>
  )
}

export default Header