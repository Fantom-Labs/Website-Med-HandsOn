import { PortableTextBlock } from '@portabletext/types'

export interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt: string
  coverImage: any // Sanity image object
  category: string
  readTime: string
  publishedAt: string
  content: PortableTextBlock[]
  featured?: boolean
}

export interface CourseModule {
  title: string
  topics: string[]
}

export interface CourseInstructor {
  name: string
  role: string
  bio: string
  image: any
}

export interface Course {
  _id: string
  title: string
  slug: string
  mainImage: any
  cardImage?: any // Nova imagem específica para o card
  shortDescription: string
  fullDescription: PortableTextBlock[]
  startDate?: string
  duration?: string
  location?: string
  price?: number
  installments?: string
  enrollmentLink?: string
  instructor?: CourseInstructor
  features?: string[]
  modules?: CourseModule[]
}
