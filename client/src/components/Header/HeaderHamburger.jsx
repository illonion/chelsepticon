import styles from "./Header.module.css"

export default function HeaderHamburger({ navOpen, toggleNav }) {
    return (
        <button
            type="button"
            onClick={toggleNav}
            className={`${styles["menu-btn"]} ${navOpen ? styles.open : ""}`}
            aria-label="Toggle menu"
            aria-expanded={navOpen}
        >
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}