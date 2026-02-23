import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const { login } = useAuth()
  const nav = useNavigate()

  async function handle(e) {
    e.preventDefault()
    setError(null)
    try {
      await login({ email, password })
      nav('/')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <main className="auth-page" style={{padding:24}}>
      <div className="auth-card">
        <div className="auth-form-wrap">
          <h2>Bejelentkezés</h2>
          <form onSubmit={handle} className="auth-form">
            <div className="input-with-icon">
              <i className="bi bi-envelope" />
              <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>

            <div className="input-with-icon">
              <i className="bi bi-lock" />
              <input type="password" placeholder="Jelszó" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>

            {error && <div className="form-error">{error}</div>}
            <div className="form-actions">
              <button type="submit" className="btn">Bejelentkezés</button>
              <div className="auth-switch">Nem regisztráltál még? <Link to="/register">Regisztráció</Link></div>
            </div>
          </form>
        </div>
        <div className="auth-illustration">
          <img src="/images/macska/jatek/j1.jpg" alt="Illusztráció" />
        </div>
      </div>
    </main>
  )
}
