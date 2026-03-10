import ProductCard from '../components/ProductCard'
import { categories } from '../data/catalog'

export default function Home() {
  return (
    <main style={{padding: '2rem'}}>
      <h1 style={{textAlign:'center'}}>Kisállat Webshop</h1>
      <p style={{textAlign:'center', color:'#666'}}>Válaszd ki, milyen állatot szeretnél vásárolni!</p>
      <div className="home-grid">
        {categories.slice(0,6).map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  )
}
