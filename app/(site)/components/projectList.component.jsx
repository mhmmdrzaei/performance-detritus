import Link from 'next/link'
import MediaItemMD from './mediaItemMD.component'

export default function ProjectList({ projects }) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project._id}>

          <Link href={`/${project.slug}`}>
          
            <MediaItemMD image={project.projectImages[0]}snippet={project.snippet}/>
          </Link>
        </li>
      ))}
    </ul>
  )
}