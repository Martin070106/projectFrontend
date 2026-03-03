import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import NavLink from './NavLink'
import { useAuth } from '../contexts/AuthContext'
import { useCart } from '../contexts/CartContext'

export default function Header() {
  const { user, logout } = useAuth()
  const { totalItems } = useCart()
  const nav = useNavigate()
  const [open, setOpen] = useState(false)

  function doLogout() {
    logout()
    nav('/')
  }

  return (
    <header className="site-header">
      <div className="site-brand">
        <NavLink to="/" className="site-brand-link">Kisállat Webshop</NavLink>
      </div>
      <button
        className={`hamburger ${open ? 'is-open' : ''}`}
        aria-label="Menü"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span className="hamburger-box"><span className="hamburger-inner" /></span>
      </button>
      <nav className={`site-nav ${open ? 'open' : ''}`}>
        <NavLink to="/" className="nav-btn" activeClassName="nav-btn--active" onClick={() => setOpen(false)}>Kezdőlap</NavLink>
        <NavLink to="/register" className="nav-btn" activeClassName="nav-btn--active" onClick={() => setOpen(false)}>Regisztráció</NavLink>
        <NavLink to="/login" className="nav-btn" activeClassName="nav-btn--active" onClick={() => setOpen(false)}>Bejelentkezés</NavLink>
        <NavLink to="/cart" className="nav-btn nav-cart" activeClassName="nav-btn--active" onClick={() => setOpen(false)}>
          <i className="bi bi-cart" aria-hidden="true" />
          <span className="cart-badge">{totalItems}</span>
        </NavLink>
        <NavLink to="/about" className="nav-btn" activeClassName="nav-btn--active" onClick={() => setOpen(false)}>Rólunk</NavLink>
        {user && <button onClick={() => { doLogout(); setOpen(false) }} className="nav-btn">Kijelentkezés</button>}
      </nav>
    </header>
  )
}
