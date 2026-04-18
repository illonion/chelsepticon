import "dotenv/config"
import express from "express"
import cors from "cors"
import axios from "axios"
import pool from "./db.js"

const app = express()
const port = process.env.PORT || 3001

app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }))
app.use(express.json())

// ──── osu! OAuth ────
app.get("/auth/login", (_req, res) => {
    const params = new URLSearchParams({
        client_id: process.env.OSU_CLIENT_ID,
        redirect_uri: process.env.OSU_REDIRECT_URI,
        response_type: "code",
        scope: "identify public",
    })
    res.redirect(`https://osu.ppy.sh/oauth/authorize?${params}`)
})

app.get("/auth/callback", async (req, res) => {
    const { code } = req.query
    if (!code) return res.status(400).send("Missing code")

    try {
        const { data: token } = await axios.post(
            "https://osu.ppy.sh/oauth/token",
            {
                client_id: Number(process.env.OSU_CLIENT_ID),
                client_secret: process.env.OSU_CLIENT_SECRET,
                code,
                grant_type: "authorization_code",
                redirect_uri: process.env.OSU_REDIRECT_URI,
            }
        )

        res.redirect(
            `${process.env.FRONTEND_URL}/admin?token=${token.access_token}`
        )
    } catch (err) {
        console.error(err.response?.data || err.message)
        res.status(500).send("OAuth failed")
    }
})

app.get("/auth/me", async (req, res) => {
    try {
        const { data } = await axios.get(
            "https://osu.ppy.sh/api/v2/me",
            {
                headers: {
                    Authorization: req.headers.authorization,
                },
            }
        )
        res.json(data)
    } catch {
        res.status(401).json({ error: "Unauthorized" })
    }
})


// Database APIs
app.get("/api/health", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW() AS now")
        res.json({ ok: true, now: result.rows[0].now })
    } catch (err) {
        console.error(err)
        res.status(500).json({ ok: false, error: "Database error" })
    }
})

app.get("/api/items", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM items ORDER BY id DESC"
        )
        res.json(result.rows)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Database error" })
    }
})

app.post("/api/items", async (req, res) => {
    try {
        const { name } = req.body
        if (!name) {
            return res.status(400).json({ error: "name is required" })
        }
        const result = await pool.query(
            "INSERT INTO items (name) VALUES ($1) RETURNING id, name",
            [name]
        )
        res.status(201).json(result.rows[0])
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: "Database error" })
    }
})

async function initDb() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS items (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL
        )
    `)
}

initDb()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`)
        })
    })
    .catch((err) => {
        console.error("Failed to initialize database:", err)
        process.exit(1)
    })