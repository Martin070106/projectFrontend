import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import CategoryCard from '../components/CategoryCard'
import Breadcrumb from '../components/Breadcrumb'
import { categories as catalog } from '../data/catalog'

const AnimalCategories = () => {
  const { animalSlug } = useParams()
  const [categories, setCategories] = useState([])
  const [animal, setAnimal] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    // find animal by slug
    const found = catalog.find(c => c.slug === animalSlug)
    if (found) {
      setAnimal({ id: found.id, name: found.name, slug: found.slug })
      // use subcategories for animals
      setCategories(found.subcategories || [])
    } else {
      setAnimal(null)
      setCategories([])
    }
    setLoading(false)
  }, [animalSlug])

  if (loading) return <PageLayout><div className="text-center py-12">Betöltés...</div></PageLayout>
  if (!animal) return <PageLayout><div className="text-center py-12">Állat nem található</div></PageLayout>

  return (
    <PageLayout>
      <Breadcrumb items={[{ label: animal.name }]} />
      <h1 style={{textAlign:'center',fontSize:32,marginBottom:12}}>{animal.name} - Kategóriák</h1>
      <div className="category-grid" style={{marginTop:20}}>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            slug={category.slug}
            animalSlug={animal.slug}
            imageUrl={category.image}
          />
        ))}
      </div>
    </PageLayout>
  )
}

export default AnimalCategories
