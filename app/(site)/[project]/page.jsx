import { getProject, getInformation } from "@/sanity/sanity.utils";
import { v4 as uuidv4 } from "uuid";
import MediaItemLG from "../components/mediaItemLG.component";
import { PortableText } from "next-sanity";
import CloseButton from '../components/closeButton.component'
import Link from "next/link";
import ReactVideo from "../components/reactvideo.component";

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


export default async function Project({ params }) {
  const slug = params.project;
  const project = await getProject(slug);

  if (!project) {
    return (
      <main key={uuidv4()}>
        <section className="pageMain" key={uuidv4()}>
          <div className="404">Nothing found...</div>
        </section>
      </main>
    );
  }

  return (
    <main key={uuidv4()} className="singleProject">
        <ReactVideo video={project.snippet}/>

      <CloseButton/>
      <section className="projectBody">
      <section className="images">
        {project.projectImages.map((image) => (
          <MediaItemLG image={image} />
        ))}
      </section>
      <section className="description">
        <div className="projDesc">
        <PortableText value={project.projectdescription} />

        </div>

        <section className="tag">
        <Link href={`/category/${project.categorySlug}`}>{project.categoryName}</Link>
      </section>
        
      </section>


      </section>

    



    </main>
  );
}
