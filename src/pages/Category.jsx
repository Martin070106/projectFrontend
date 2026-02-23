import { useParams } from 'react-router-dom'
import { getCategoryById } from '../data/catalog'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom'

export default function Category() {
  const { id } = useParams()
  const category = getCategoryById(id)
  const { addItem } = useCart()

  if (!category) return <main style={{padding:24}}>Ismeretlen kategória.</main>

  return (
    <main className="category-page">
      <div className="category-hero">
        <h2>{category.name}</h2>
        <p>Válassz a(z) {category.name} részére ajánlott termékek közül.</p>
      </div>

      <div className="category-grid">
        {category.items.map(item => (
          <Link key={item.id} to={`/termek/${item.id}`} className="category-card-link" style={{textDecoration:'none',color:'inherit'}}>
            <article className="category-card">
              <div className="category-card-top">
                <div className="category-card-media">
                  <img src={item.image} alt={item.name} />
                </div>
              </div>
              <div className="category-card-bottom">
                <div className="category-card-title">{item.name}</div>
              </div>
              <div className="category-card-actions">
                <strong className="price">{item.price} Ft</strong>
                <button onClick={(e) => { e.preventDefault(); addItem(item) }}>Hozzáadás</button>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  )
}
