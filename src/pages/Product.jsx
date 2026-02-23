import { useParams } from 'react-router-dom'
import { categories } from '../data/catalog'
import { useCart } from '../contexts/CartContext'

export default function Product() {
  const { id } = useParams()
  const { addItem } = useCart()

  // find product across categories
  let product = null
  for (const cat of categories) {
    const found = (cat.items || []).find(i => i.id === id)
    if (found) { product = found; break }
  }

  if (!product) return <main style={{padding:24}}>Termék nem található.</main>

  return (
    <main style={{padding:24,maxWidth:900,margin:'0 auto'}}>
      <div style={{display:'flex',gap:24,alignItems:'flex-start'}}>
        <div style={{flex:'0 0 420px',background:'#fff',padding:20,borderRadius:8}}>
          <img src={product.image} alt={product.name} style={{width:'100%',height:'auto',display:'block',borderRadius:6}} />
        </div>
        <div style={{flex:1}}>
          <h1 style={{marginTop:0}}>{product.name}</h1>
          <p style={{color:'#2a5566',fontWeight:700}}>{product.price} Ft</p>
          <p style={{marginTop:12,color:'#334'}}>{product.description || 'Nincs részletes leírás.'}</p>
          <div style={{marginTop:20}}>
            <button onClick={() => { addItem(product); alert('Hozzáadva a kosárhoz') }}>Hozzáadás a kosárhoz</button>
          </div>
        </div>
      </div>
    </main>
  )
}
