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

