import { groq } from 'next-sanity'
import { client } from './sanity.client'

// Query para buscar todos os posts
export async function getAllPosts() {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      coverImage,
      category,
      readTime,
      publishedAt,
      featured
    }`
  )
}

// Query para buscar um post específico pelo slug
export async function getPostBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      coverImage,
      category,
      readTime,
      publishedAt,
      content,
      featured
    }`,
    { slug }
  )
}

// Query para buscar slugs de todos os posts (para generateStaticParams)
export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(
    groq`*[_type == "post"]{ "slug": slug.current }`
  )
}

