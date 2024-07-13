import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import CategoriesList from "./categoriesList.component";

export const dynamic = "force-dynamic";



export default function Header({ set,categories  }) {
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
      <CategoriesList categories={categories}/>
    </header>
  );
}