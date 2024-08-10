// sanity.utils
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config.js";

export async function getInformation() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "siteSettings"]{
      _id,
       title,
       about_text,
               socialInfo[] {
          _key,
          socialName,
          socialURL  
        },
       
       "herovisual": hero_image{
          "heroImgUrl": asset->url,
          attribution,
          
       },
       "bgImgs": backgroundimgs[]{
        "bgImg": asset->url,
        classImg
       },
            "seoDescription": seo.description,
      "seoImageUrl": seo.seo_image.asset->url,
        
        

    }`
  );
}
export async function getProjects(count=11) {
  const allPosts = await createClient(clientConfig).fetch(
    groq`*[_type == "singleProject"] {
      _id,
      title,
      "slug": slug.current,
      projectdescription,
      "snippet": vid_snippet.asset->url,
      projectImages[] {
        _type, 
        _key,
        attribution,
        "url": asset->url,
      }
    }`
  );
  const shuffled = allPosts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count)
}
export async function getProject(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "singleProject"&& slug.current == $slug][0]{
       _id,
        title,
        "snippet": vid_snippet.asset->url,
        "slug": slug.current,
        projectdescription,
                "categoryName": category->name, // Include the category name
        "categorySlug": category->slug.current, 
        projectImages [] {
          _type, 
          _key,
          attribution,
          "url": asset->url,
          
        }
      
  }`,
    {
      slug,
    }
  );
}
export async function getProjectsByCategory(slug) {
  return  createClient(clientConfig).fetch(
    groq`{
      "category": *[_type == "projectCategory" && slug.current == $slug][0] {
        name,
        "slug": slug.current
      },
      "projects": *[_type == "singleProject" && references(*[_type=="projectCategory" && slug.current == $slug]._id)] {
        _id,
        title,
        "slug": slug.current,
        projectImages[] {
          _type, 
          _key,
          attribution,
          "url": asset->url,
      },
            "snippet": vid_snippet.asset->url,
      }
    }`,
    { slug }
  )
}

export async function getAllCategories() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "projectCategory"] {
      "slug": slug.current,
      name
    }`
  )
}
