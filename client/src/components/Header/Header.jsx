import "./Header.css"
import logoFull from "../../assets/logo.png"

export default function Header() {
    return (
        <header>
            <div className="header-content">
                <img className="header-image" src={logoFull} alt="Full Logo" />
                <nav className="header-nav">
                    <ul>
                        <li>
                            <a href="/about">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/services">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="/contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}