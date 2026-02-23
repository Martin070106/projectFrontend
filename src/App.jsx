import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Category from './pages/Category'
import AnimalCategories from './pages/AnimalCategories'
import Product from './pages/Product'
import Subcategory from './pages/Subcategory'

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/animals/:animalSlug" element={<AnimalCategories />} />
            <Route path="/allat/:animalSlug" element={<AnimalCategories />} />
            <Route path="/allat/:animalSlug/:subcategorySlug" element={<Subcategory />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/termek/:id" element={<Product />} />
          </Routes>
          <Footer />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
