import {
  getAllCategories,
  getInformation,
  getProjects,
} from "@/sanity/sanity.utils";
import styles from "./styles/styles.scss";
import Header from "./components/header.component";
import MediaContainer from "./components/mediaContainer.component";
import Link from "next/link";
import HomeContainer from "./components/homeContainer.component";
export async function generateMetadata() {
  const settings = await getInformation();
  return {
    title: `${settings[0].title}`,
    description: settings[0].seoDescription,
    openGraph: {
      title: `${settings[0].title}`,
      description: settings[0].seoDescription,
      url: "https://performance-detritus.vercel.app/",
      siteName: `${settings[0].title}`,
      images: [
        {
          url: `${settings[0].seoImageUrl}`,
          width: 1200,
          height: 628,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function Home() {
  const info = await getInformation();
  const projects = await getProjects();
  const categories = await getAllCategories();
  
  return (
    <>
      <Header set={info} categories={categories} />
      <section className='main homepageMain'>
        <HomeContainer projects={projects} />
      </section>
    </>
  );
}

  

