import { getProject, } from "@/sanity/sanity.utils";
import { v4 as uuidv4 } from 'uuid';




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
        <main key={uuidv4()}>
            {project.title}

        </main>
        
    );
}
