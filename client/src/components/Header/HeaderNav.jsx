import { NavLink } from "react-router-dom"

import styles from "./Header.module.css"

function NavHighlight() {
    return <>
        <div className={styles["header-nav-highlight-overlay"]} />
        <div className={styles["header-nav-highlight-bottom"]} />
    </>
}

function NavItem({ to, label }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? styles["header-nav-highlight"] : ""}
            end={to === "/"}
        >
            {({ isActive }) => (
                <>
                    {isActive && <NavHighlight />}
                    {label.toUpperCase()}
                </>
            )}
        </NavLink>
    )
}

export default function HeaderNav({ webpageList }) {
    return (
        <nav className={styles["header-nav"]}>
            <ul>
                {webpageList.map((webpage) => (
                    <li key={webpage}>
                        <NavItem 
                            to={webpage === "home" ? "/" : `/${webpage}`} 
                            label={webpage} 
                        />
                    </li>
                ))}
            </ul>
        </nav>
    )
}