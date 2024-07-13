import { getAllCategories, getInformation, getProjects } from '@/sanity/sanity.utils';
import Image from "next/image";
import styles from "./styles/styles.scss";
import Header from './components/header.component';
import MediaContainer from './components/mediaContainer.component';
export async function generateMetadata(){
  const settings = await getInformation();
  return {
    title: `${settings[0].title}`,
    description: settings[0].seoDescription,
    openGraph: {
      title: `${settings[0].title}`,
      description: settings[0].seoDescription,
      url: 'https://laloronoa.vercel.app/',
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


export default async function Home() {
  const info = await getInformation();
  const projects = await getProjects();
  const categories = await getAllCategories();
  
  return (
    <main>
      <Header set={info} categories={categories} />
      {projects.map((project)=> {
        const  projectImages = project.projectImages
        return (
          <MediaContainer projectImages={projectImages}/>

        )
      })}


    </main>
 
  );
}
