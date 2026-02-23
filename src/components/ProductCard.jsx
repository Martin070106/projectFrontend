import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/allat/${product.slug || product.id}`} className="product-link">
        <div className="card-top">
          <div className="card-media">
            <img src={product.image} alt={product.name} />
          </div>
        </div>
        <div className="card-bottom">
          <h3 className="card-title">{product.name}</h3>
          {product.description && <p className="card-desc">{product.description}</p>}
          <div className="card-meta">
            {typeof product.price !== 'undefined' && <span className="price">{product.price} Ft</span>}
            {typeof product.rating !== 'undefined' && (
              <span className="rating" aria-label={`Értékelés: ${product.rating} / 5`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < product.rating ? 'star filled' : 'star'}>★</span>
                ))}
              </span>
            )}
          </div>
          <button type="button" className="add-btn">Kosárba</button>
        </div>
      </Link>
    </article>
  )
}
