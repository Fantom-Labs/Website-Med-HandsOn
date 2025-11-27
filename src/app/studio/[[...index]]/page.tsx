'use client'

import config from '../../../../sanity/sanity.config'
import dynamic from 'next/dynamic'

// Carrega o Studio apenas no cliente (SSR: false) para evitar erros de build
// como "Module not found: Can't resolve 'sanity/router'"
const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
)

export default function StudioPage() {
  return <NextStudio config={config} />
}
