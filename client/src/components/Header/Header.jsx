import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

import HeaderNav from "./HeaderNav"
import HeaderHamburger from "./HeaderHamburger"

import "./Header.css"
import logoFull from "../../assets/logo.png"
import logoMin from "../../assets/logo-min.png"

export default function Header() {
    const webpageList = ["home", "about", "services", "portfolio", "contact"]
    
    // Set Nav Open
    const [navOpen, setNavOpen] = useState(false)
    function toggleNav() {
        setNavOpen(prev => !prev)
    }

    return (
        <header className={navOpen ? "header-open" : ""}>
            <div className="header-content">
                <Link to="/">
                    <img
                        id="header-logo-full"
                        className="header-image"
                        src={logoFull}
                        alt="Full Logo"
                    />
                    <img
                        id="header-logo-mini"
                        className="header-image"
                        src={logoMin}
                        alt="Mini Logo"
                    />
                </Link>
                <HeaderNav webpageList={webpageList} />
                <HeaderHamburger navOpen={navOpen} toggleNav={toggleNav} />
            </div>
            <div className="header-hamburger-nav-content">
                <ul>
                    {webpageList.map((webpage) => (
                        <li key={webpage}>
                            <NavLink to={webpage === "home" ? "/" : `/${webpage}`}>
                                {webpage.toUpperCase()}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}