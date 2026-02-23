import { useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import { categories } from '../data/catalog'
import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom'

export default function Subcategory() {
  const { animalSlug, subcategorySlug } = useParams()
  const { addItem } = useCart()

  const animal = categories.find(a => a.slug === animalSlug)
  const sub = animal?.subcategories?.find(s => s.slug === subcategorySlug)

  if (!animal) return <PageLayout><div style={{padding:24}}>Állat nem található</div></PageLayout>
  if (!sub) return <PageLayout><div style={{padding:24}}>Kategória nem található</div></PageLayout>

  return (
    <PageLayout>
      <nav style={{marginBottom:12}}>
        <Link to="/">🏠</Link> {' › '} <Link to={`/allat/${animal.slug}`}>{animal.name}</Link> {' › '} {sub.name}
      </nav>
      <h1 style={{textAlign:'center',marginBottom:24}}>{sub.name}</h1>
      <div className="product-card-grid" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
        {sub.items.map(item => (
          <div key={item.id} className="product-card-vertical">
            <div className="product-card-media-large"><img src={item.image} alt={item.name} /></div>
            <div className="product-card-body">
              <h3>{item.name}</h3>
              <div className="price">{item.price} Ft</div>
              <button onClick={() => addItem(item)} className="add-btn">🛒 Kosárba</button>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}
