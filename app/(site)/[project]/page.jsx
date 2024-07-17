import { getProject } from "@/sanity/sanity.utils";
import { v4 as uuidv4 } from "uuid";
import MediaItemLG from "../components/mediaItemLG.component";
import { PortableText } from "next-sanity";
import CloseButton from '../components/closeButton.component'
import Link from "next/link";

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
      <CloseButton/>

      <section className="images">
        {project.projectImages.map((image) => (
          <MediaItemLG image={image} />
        ))}
      </section>

      <section className="description">
        <PortableText value={project.projectdescription} />
        
      </section>
      <section className="tag">
        <Link href={`/category/${project.categorySlug}`}>{project.categoryName}</Link>
      </section>
    </main>
  );
}
