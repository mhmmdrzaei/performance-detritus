"use client"
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import CategoriesList from "./categoriesList.component";
import RefreshButton from "./refreshButton.component";
import { usePathname } from 'next/navigation';

export const dynamic = "force-dynamic";



export default function Header({ set,categories  }) {
  const pathname = usePathname();
  
  // Extract the current category from the pathname
  const currentCategorySlug = pathname.startsWith('/category/') 
    ? pathname.split('/')[2] 
    : null;
  
  const currentCategory = categories.find(cat => cat.slug === currentCategorySlug)

  return (
    <header>
      {set.map((setting) => (
        <>
          <h1 className="siteTitle">
            <Link href={"/"}>{setting.title}</Link>
          </h1>
          <h1 className="aboutLink">
            <Link href={"/about"}>About</Link>
          </h1>
        
        </>
      ))}
      <CategoriesList categories={categories} currentCategory={currentCategory} />
      <RefreshButton />

      
    </header>
  );
}