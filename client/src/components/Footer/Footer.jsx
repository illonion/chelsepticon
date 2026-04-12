import "./Footer.css"
import osuLogo from "../../assets/osu-logo.png"
import vgenLogo from "../../assets/vgen-logo.png"

export default function Footer() {
    return (
        <footer>
            <div className="logo-containers">
                <a href="https://osu.ppy.sh/users/13968504" target="_blank"><img src={osuLogo} alt="osu logo" /></a>
                <a href="https://vgen.co/chi" target="_blank"><img src={vgenLogo} alt="vgen logo" /></a>
            </div>
            <div className="footer-texts">
                <p>Conceptual design by Chelsea</p>
                <p>Web development by Chelsea and ill onion</p>
            </div>
        </footer>
    )
}