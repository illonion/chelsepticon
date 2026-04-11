import Header from "./components/Header/Header"
import { Routes, Route } from "react-router-dom"

function Home() {
    return
}

function About() {
    return
}

function Services() {
    return
}

function Portfolio() {
    return
}

function Contact() {
    return
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