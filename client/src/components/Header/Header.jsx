import "./Header.css"
import logoFull from "../../assets/logo.png"
import HeaderNav from "./HeaderNav"
import { Link } from "react-router-dom"
import HeaderHamburger from "./HeaderHamburger"

export default function Header() {
    return (
        <header>
            <div className="header-content">
                <Link to="/">
                    <img
                        className="header-image"
                        src={logoFull}
                        alt="Full Logo"
                    />
                </Link>
                <HeaderNav />
                <HeaderHamburger />
            </div>
        </header>
    )
}