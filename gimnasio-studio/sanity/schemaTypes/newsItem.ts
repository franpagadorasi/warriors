import { defineField, defineType } from 'sanity';

export const newsItemType = defineType({
	name: 'newsItem',
	title: 'Noticias',
	type: 'document',
	fields: [
		defineField({ name: 'title', title: 'Titulo', type: 'string', validation: (rule) => rule.required() }),
		defineField({ name: 'date', title: 'Fecha', type: 'date', validation: (rule) => rule.required() }),
		defineField({ name: 'excerpt', title: 'Resumen', type: 'text', rows: 3 }),
		defineField({
			name: 'image',
			title: 'Imagen',
			type: 'image',
			options: { hotspot: true }
		}),
		defineField({ name: 'ctaLabel', title: 'Texto enlace', type: 'string', initialValue: 'Leer mas' }),
		defineField({ name: 'order', title: 'Orden', type: 'number' })
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'date',
			media: 'image'
		}
	}
});
