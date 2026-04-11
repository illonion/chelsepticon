import { NavLink } from "react-router-dom"

export default function HeaderNav() {
    const webpageList = ["about", "services", "portfolio", "contact"]

    return (
        <nav className="header-nav">
            <ul>
                {webpageList.map((webpage) => (
                    <li key={webpage}>
                        <NavLink
                            to={`/${webpage}`}
                            className={({ isActive }) =>
                                `header-nav-highlight ${
                                    isActive ? "active" : ""
                                }`
                            }
                        >
                            <div className="header-nav-highlight-overlay" />
                            <div className="header-nav-highlight-bottom" />
                            {webpage.toUpperCase()}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}