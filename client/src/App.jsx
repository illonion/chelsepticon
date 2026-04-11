import { useEffect, useState } from 'react'

export default function App() {
    const [message, setMessage] = useState('Loading...')

    useEffect(() => {
        fetch('/api/health')
            .then((res) => res.json())
            .then((data) => setMessage(JSON.stringify(data, null, 2)))
            .catch((err) => setMessage(String(err)))
    }, [])

    return (
        <div style={{ padding: 24 }}>
            <h1>My App</h1>
            <pre>{message}</pre>
        </div>
    )
}