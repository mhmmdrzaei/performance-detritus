import { getProjectsByCategory, getAllCategories,getInformation } from '@/sanity/sanity.utils'
import ProjectList from '../../components/projectList.component'
import Header from '../../components/header.component';
export async function generateMetadata(){
  const settings = await getInformation();
  return {
    title: `${settings[0].title}`,
    description: settings[0].seoDescription,
    openGraph: {
      title: `${settings[0].title}`,
      description: settings[0].seoDescription,
      url: 'https://performance-detritus.vercel.app/',
      siteName: `${settings[0].title}`,
      images: [
        {
          url: `${settings[0].seoImageUrl}`,
          width: 1200,
          height: 628,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export default async function CategoryPage({ params }) {
  const { slug } = params
  const {projects} = await getProjectsByCategory(slug)
  const info = await getInformation();
  const categories = await getAllCategories()

  return (
    <>
      <Header set={info} categories={categories} />
      
      <ProjectList projects={projects} />
     
    </>
  )
}