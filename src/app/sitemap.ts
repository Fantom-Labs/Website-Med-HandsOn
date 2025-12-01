import { MetadataRoute } from 'next'
import { getAllCourses, getAllPosts } from '@/lib/sanity.queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://medhandson.com.br'

  // Static routes
  const routes = [
    { route: '', priority: 1, changeFrequency: 'weekly' as const },
    { route: '/cursos', priority: 0.9, changeFrequency: 'weekly' as const },
    { route: '/noticias', priority: 0.9, changeFrequency: 'daily' as const },
    { route: '/quem-somos', priority: 0.8, changeFrequency: 'monthly' as const },
    { route: '/termos', priority: 0.5, changeFrequency: 'yearly' as const },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority,
  }))

  // Dynamic routes - Courses
  const courses = await getAllCourses()
  const courseRoutes = courses.map((course) => ({
    url: `${baseUrl}/cursos/${course.slug}`,
    lastModified: course._updatedAt || new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Dynamic routes - Posts (posts em destaque têm prioridade maior)
  const posts = await getAllPosts()
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/noticias/${post.slug}`,
    lastModified: post._updatedAt || post.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: post.featured ? 0.85 : 0.7,
  }))

  return [...routes, ...courseRoutes, ...postRoutes]
}

