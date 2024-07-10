// sanity.utils
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config.js";

export async function getInformation() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "siteSettings"]{
        _id,
        title,
        
        
    }`
  );
}
export async function getProjects() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "singleProject"]{
        _id,
        title,

    }`
  );
}

