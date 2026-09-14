import { defineField, defineType } from 'sanity'

export const workPost = defineType({
  name: 'workPost',
  title: 'Work Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used as the URL segment: /work/<slug>',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      options: {
        list: [
          { title: 'Work', value: 'work' },
          { title: 'Community', value: 'community' },
          { title: 'Personal', value: 'personal' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'Display date as free text, e.g. "17 Apr 2022" or "Present"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start date',
      type: 'string',
      description: 'Optional, for date ranges, e.g. "3 Jun 2024"',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 10,
      description: 'Markdown body',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'tag' },
  },
})
