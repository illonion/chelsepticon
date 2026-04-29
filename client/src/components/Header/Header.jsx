import { useState } from "react"
import { Link } from "react-router-dom"

import HeaderNav from "./HeaderNav"
import HeaderHamburger from "./HeaderHamburger"
import HeaderHamburgerContent from "./HeaderHamburgerContent"

import styles from "./Header.module.css"
import logoFull from "../../assets/logo.png"
import logoMin from "../../assets/logo-min.png"

export default function Header() {
    const webpageList = ["home", "about", "services", "portfolio", "contact"]
    
    const [navOpen, setNavOpen] = useState(false)
    function toggleNav() {
        setNavOpen(prev => !prev)
    }

    function closeNav() {
        setNavOpen(false)
    }

    return (
        <header className={navOpen ? `${styles.header} ${styles["header-open"]}` : styles.header}>
            <div className={styles["header-content"]}>
                <Link to="/" onClick={closeNav}>
                    <img id="header-logo-full" className={styles["header-image"]} src={logoFull} alt="Full Logo" />
                    <img id="header-logo-mini" className={styles["header-image"]} src={logoMin} alt="Mini Logo" />
                </Link>
                <HeaderNav webpageList={webpageList} />
                <HeaderHamburger navOpen={navOpen} toggleNav={toggleNav} />
            </div>
            <HeaderHamburgerContent webpageList={webpageList} closeNav={closeNav} />
        </header>
    )
}