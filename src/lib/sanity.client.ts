import { createClient } from 'next-sanity'

// Tipo para imagem do Sanity (pode ser vários formatos)
type SanityImageSource = any

// eslint-disable-next-line @typescript-eslint/no-var-requires
const sanityImage = require('@sanity/image-url')

// Helper robusto para lidar com diferentes tipos de exportação (CJS/ESM/Turbopack)
const imageUrlBuilder = 
  typeof sanityImage === 'function' ? sanityImage : 
  sanityImage.default && typeof sanityImage.default === 'function' ? sanityImage.default :
  sanityImage.createImageUrlBuilder && typeof sanityImage.createImageUrlBuilder === 'function' ? sanityImage.createImageUrlBuilder :
  null;

if (!imageUrlBuilder) {
  console.error('❌ Erro crítico: Não foi possível carregar o builder de imagens do Sanity.', sanityImage)
}

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-11-27',
  useCdn: true, // `false` se você quer garantir dados fresh
})

const builder = imageUrlBuilder ? imageUrlBuilder(client) : null

export function urlFor(source: SanityImageSource) {
  return builder ? builder.image(source) : null
}

