import Link from "next/link";

export default function CategoriesList({ categories  }) {
  return (
    <section className="CategoriesList">
                <ul>
          {categories.map((category) => (
            <li key={category.slug}>
              <Link href={`/category/${category.slug}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
    </section>
  );
}