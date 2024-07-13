import Link from 'next/link'

export default function ProjectList({ projects }) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project._id}>
          <Link href={`/${project.slug}`}>
            <h2>{project.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  )
}