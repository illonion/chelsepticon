import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const API = import.meta.env.VITE_API_URL || "http://localhost:3001"
const ALLOWED_USERS = (import.meta.env.VITE_ALLOWED_USERS || "").split(",").map(Number)

export default function Admin() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const tokenFromUrl = params.get("token")

        if (tokenFromUrl) {
            localStorage.setItem("osu_token", tokenFromUrl)
            window.history.replaceState({}, "", "/admin")
        }

        const token = tokenFromUrl || localStorage.getItem("osu_token")

        if (!token) {
            window.location.href = `${API}/auth/login`
            return
        }

        fetch(`${API}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((r) => {
                if (!r.ok) throw new Error("Unauthorized")
                return r.json()
            })
            .then((data) => {
                if (!ALLOWED_USERS.includes(data.id)) {
                    localStorage.removeItem("osu_token")
                    navigate("/")
                    return
                }
                setUser(data)
            })
            .catch(() => {
                localStorage.removeItem("osu_token")
                navigate("/")
            })
    }, [navigate])

    if (!user) return <p>Loading...</p>

    return (
        <div>
            <h1>Welcome, {user.username}</h1>
            <img src={user.avatar_url} alt="" width={80} />
            <button
                onClick={() => {
                    localStorage.removeItem("osu_token")
                    navigate("/")
                }}
            >
                Logout
            </button>
        </div>
    )
}