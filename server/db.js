import Database from 'better-sqlite3'
import fs from 'node:fs'
import path from 'node:path'

const dataDir = path.resolve('data')
fs.mkdirSync(dataDir, { recursive: true })

const db = new Database(path.join(dataDir, 'app.db'))

db.exec(`
    CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    )
`)

export default db