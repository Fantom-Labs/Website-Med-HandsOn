'use client'

import dynamic from 'next/dynamic'

// Importa o componente do Studio dinamicamente e desabilita SSR completamente.
// Isso impede que dependências exclusivas do Studio (como sanity/router ou @sanity/vision)
// sejam processadas pelo build do servidor, o que causa falhas na Netlify.
const Studio = dynamic(() => import('@/components/studio/Studio'), {
  ssr: false,
  loading: () => <div>Carregando Studio...</div>
})

export default function StudioPage() {
  return <Studio />
}
