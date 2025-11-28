import { MetadataRoute } from 'next'
import { getAllCourses, getAllPosts } from '@/lib/sanity.queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://medhandson.com.br'

  // Static routes
  const routes = [
    '',
    '/cursos',
    '/noticias',
    '/quem-somos',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic routes - Courses
  const courses = await getAllCourses()
  const courseRoutes = courses.map((course) => ({
    url: `${baseUrl}/cursos/${course.slug}`,
    lastModified: course._updatedAt || new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Dynamic routes - Posts
  const posts = await getAllPosts()
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/noticias/${post.slug}`,
    lastModified: post._updatedAt || new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...courseRoutes, ...postRoutes]
}

