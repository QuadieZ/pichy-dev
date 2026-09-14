import { groq } from "next-sanity";

export const workPostsQuery = groq`
  *[_type == "workPost"] {
    "id": slug.current,
    title,
    content,
    date,
    startDate,
    "image": images[].asset->url,
    tag,
  }
`;

export const workPostSlugsQuery = groq`
  *[_type == "workPost"] { "id": slug.current }
`;

export const workPostBySlugQuery = groq`
  *[_type == "workPost" && slug.current == $slug][0] {
    "id": slug.current,
    title,
    content,
    date,
    startDate,
    "image": images[].asset->url,
    tag,
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    name,
    review,
    "src": image.asset->url,
  }
`;
