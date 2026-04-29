import { NavLink } from "react-router-dom"

import styles from "./Header.module.css"

export default function HeaderHamburgerContent({webpageList, closeNav}) {
    return (
        <div className={styles["header-hamburger-nav-content"]}>
            <ul>
                {webpageList.map((webpage) => (
                    <li key={webpage}>
                        <NavLink
                            to={webpage === "home" ? "/" : `/${webpage}`}
                            end={webpage === "home"}
                            className={({ isActive }) => isActive ? styles["header-nav-highlight"] : ""}
                            onClick={closeNav}
                        >
                            {webpage.toUpperCase()}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}