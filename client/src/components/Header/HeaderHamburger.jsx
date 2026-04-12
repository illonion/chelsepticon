export default function HeaderHamburger({ navOpen, toggleNav }) {
    return (
        <button
            type="button"
            onClick={toggleNav}
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