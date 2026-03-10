import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('authUser')) || null
    } catch {
      return null
    }
  })

  function register(values) {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    if (users.find(u => u.email === values.email)) {
      throw new Error('A felhasználó már létezik ezzel az email címmel')
    }
    const newUser = { id: Date.now(), name: values.name, email: values.email, password: values.password }
    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    localStorage.setItem('authUser', JSON.stringify({ id: newUser.id, name: newUser.name, email: newUser.email }))
    setUser({ id: newUser.id, name: newUser.name, email: newUser.email })
  }

  function login({ email, password }) {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const found = users.find(u => u.email === email && u.password === password)
    if (!found) throw new Error('Helytelen email vagy jelszó')
    localStorage.setItem('authUser', JSON.stringify({ id: found.id, name: found.name, email: found.email }))
    setUser({ id: found.id, name: found.name, email: found.email })
  }

  function logout() {
    localStorage.removeItem('authUser')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
