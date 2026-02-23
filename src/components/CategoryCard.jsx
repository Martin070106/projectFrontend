import { Link } from 'react-router-dom'

export default function CategoryCard({ name, slug, animalSlug, imageUrl }) {
  return (
    <Link to={`/allat/${animalSlug}/${slug}`} className="category-link" aria-label={name}>
      <article className="category-card">
        <div className="category-card-top">
          <div className="category-card-media">
            <img src={imageUrl || 'https://via.placeholder.com/200'} alt={name} />
          </div>
        </div>
        <div className="category-card-bottom">
          <div className="category-card-title">{name}</div>
        </div>
      </article>
    </Link>
  )
}
