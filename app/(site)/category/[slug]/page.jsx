import { getProjectsByCategory, getAllCategories } from '@/sanity/sanity.utils'
import ProjectList from '../../components/projectList.component'

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export default async function CategoryPage({ params }) {
  const { slug } = params
  const projects = await getProjectsByCategory(slug)

  return (
    <div>
      <h1>Projects in category: {slug}</h1>
      <ProjectList projects={projects} />
    </div>
  )
}