import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Posts do Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL amigável)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      description: 'Breve descrição que aparece nos cards',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'coverImage',
      title: 'Imagem de Capa',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: 'Cirurgia Plástica', value: 'Cirurgia Plástica' },
          { title: 'Educação Médica', value: 'Educação Médica' },
          { title: 'Carreira', value: 'Carreira' },
          { title: 'Notícias', value: 'Notícias' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Tempo de Leitura',
      type: 'string',
      placeholder: 'Ex: 5 min de leitura',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Conteúdo',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Citação', value: 'blockquote' },
          ],
          lists: [
            { title: 'Lista com Marcadores', value: 'bullet' },
            { title: 'Lista Numerada', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Negrito', value: 'strong' },
              { title: 'Itálico', value: 'em' },
              { title: 'Sublinhado', value: 'underline' },
            ],
            annotations: [
              {
                title: 'Link',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Texto Alternativo',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Legenda',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Post em Destaque?',
      type: 'boolean',
      initialValue: false,
      description: 'Marcar como post destacado na página inicial',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      subtitle: 'category',
    },
  },
  orderings: [
    {
      title: 'Data de Publicação (Mais recente)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})

