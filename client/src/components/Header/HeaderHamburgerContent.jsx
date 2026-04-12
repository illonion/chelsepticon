import { NavLink } from "react-router-dom"

export default function HeaderHamburgerContent({webpageList, closeNav}) {
    return (
        <div className="header-hamburger-nav-content">
            <ul>
                {webpageList.map((webpage) => (
                    <li key={webpage}>
                        <NavLink
                            to={webpage === "home" ? "/" : `/${webpage}`}
                            end={webpage === "home"}
                            className={({ isActive }) => isActive ? "header-nav-highlight" : ""}
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