import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import db from './db.js'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
    const row = db.prepare('SELECT datetime("now") AS now').get()
    res.json({ ok: true, now: row.now })
})

app.get('/api/items', (req, res) => {
    const rows = db.prepare('SELECT * FROM items ORDER BY id DESC').all()
    res.json(rows)
})

app.post('/api/items', (req, res) => {
    const { name } = req.body

    if (!name) {
        return res.status(400).json({ error: 'name is required' })
    }

    const info = db.prepare('INSERT INTO items (name) VALUES (?)').run(name)

    res.status(201).json({
        id: info.lastInsertRowid,
        name,
    })
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const clientDist = path.resolve(__dirname, '../client/dist')

if (fs.existsSync(clientDist)) {
    app.use(express.static(clientDist))

    app.get('*', (req, res) => {
        if (req.path.startsWith('/api')) {
            res.status(404).json({ error: 'Not found' })
            return
        }

        res.sendFile(path.join(clientDist, 'index.html'))
    })
}

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})