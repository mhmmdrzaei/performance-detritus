import {
  getAllCategories,
  getInformation,
  getProjects,
} from "@/sanity/sanity.utils";
import { PortableText } from "next-sanity";
import Header from "../components/header.component";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Image from "next/image";
export async function generateMetadata() {
  const settings = await getInformation();
  return {
    title: `${settings[0].title}`,
    description: settings[0].seoDescription,
    openGraph: {
      title: `${settings[0].title}`,
      description: settings[0].seoDescription,
      url: "https://laloronoa.vercel.app/",
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
  const categories = await getAllCategories();

  return (

    <main className="aboutPage">

      <Header set={info} categories={categories} />
      {info.map((about) => (
          <>
        <div
          className="aboutBG"
          key={uuidv4()}
          style={{ backgroundImage: `url(${about.bgImgs[0].bgImg})` }}
        ></div>
          <figure className="aboutImg">
            <Image
              src={about.herovisual.heroImgUrl}
              width={400}
              height={400}
              alt={about.herovisual.attribution}
            />
          </figure>
          <section className="aboutText">
            <PortableText value={about.about_text} />
            <section className="socials">
            {about.socialInfo.map((social) => (
              <Link href={social.socialURL} key={social._key} target="_blank">
                {social.socialName}
              </Link>
            ))}
          </section>
          </section>
          </>
        
      ))}
          </main>
  );
}
