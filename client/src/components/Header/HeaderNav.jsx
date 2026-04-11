import { NavLink } from "react-router-dom"

function NavItem({ to, label }) {
    return (
        <NavLink to={to} className="header-nav-highlight">
            {({ isActive }) => (
                <>
                    {isActive && (
                        <>
                            <div className="header-nav-highlight-overlay" />
                            <div className="header-nav-highlight-bottom" />
                        </>
                    )}
                    {label.toUpperCase()}
                </>
            )}
        </NavLink>
    )
}

export default function HeaderNav() {
    const webpageList = ["about", "services", "portfolio", "contact"]

    return (
        <nav className="header-nav">
            <ul>
                {webpageList.map((webpage) => (
                    <li key={webpage}>
                        <NavItem to={`/${webpage}`} label={webpage} />
                    </li>
                ))}
            </ul>
        </nav>
    )
}