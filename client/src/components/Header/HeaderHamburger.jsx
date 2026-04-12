import { useState } from "react"

export default function HeaderHamburger() {
    const [navOpen, setNavOpen] = useState(false)

    function handleNavOpenClick() {
        setNavOpen((open) => !open)
    }

    return (
        <button
            type="button"
            onClick={handleNavOpenClick}
            className={`menu-btn ${navOpen ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={navOpen}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}