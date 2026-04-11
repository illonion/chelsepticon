import Header from "./components/Header/Header"
import { Routes, Route } from "react-router-dom"

function Home() {
    return <h1>Home</h1>
}

function About() {
    return <h1>About</h1>
}

function Services() {
    return <h1>Services</h1>
}

function Portfolio() {
    return <h1>Portfolio</h1>
}

function Contact() {
    return <h1>Contact</h1>
}

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}