import { createClient } from 'next-sanity'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-11-27',
  useCdn: true, // `false` se você quer garantir dados fresh
})

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createImageUrlBuilder } = require('@sanity/image-url')
const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

