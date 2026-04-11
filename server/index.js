import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import pool from './db.js'

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

async function initDb() {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS items (
            id SERIAL PRIMARY KEY,
            name TEXT NOT NULL
        )
    `)
}

app.get('/api/health', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW() AS now')
        res.json({
            ok: true,
            now: result.rows[0].now,
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({
            ok: false,
            error: 'Database error',
        })
    }
})

app.get('/api/items', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM items ORDER BY id DESC'
        )
        res.json(result.rows)
    } catch (err) {
        console.error(err)
        res.status(500).json({
            error: 'Database error',
        })
    }
})

app.post('/api/items', async (req, res) => {
    try {
        const { name } = req.body

        if (!name) {
            return res.status(400).json({
                error: 'name is required',
            })
        }

        const result = await pool.query(
            'INSERT INTO items (name) VALUES ($1) RETURNING id, name',
            [name]
        )

        res.status(201).json(result.rows[0])
    } catch (err) {
        console.error(err)
        res.status(500).json({
            error: 'Database error',
        })
    }
})

initDb()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`)
        })
    })
    .catch((err) => {
        console.error('Failed to initialize database:', err)
        process.exit(1)
    })