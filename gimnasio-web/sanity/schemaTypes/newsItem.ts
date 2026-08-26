import { defineField, defineType } from 'sanity';

export const newsItemType = defineType({
	name: 'newsItem',
	title: 'Noticias',
	type: 'document',
	fields: [
		defineField({ name: 'title', title: 'Titulo', type: 'localizedString', validation: (rule) => rule.required() }),
		defineField({ name: 'date', title: 'Fecha', type: 'date', validation: (rule) => rule.required() }),
		defineField({ name: 'excerpt', title: 'Resumen', type: 'localizedText' }),
		defineField({
			name: 'image',
			title: 'Imagen',
			type: 'image',
			options: { hotspot: true }
		}),
		defineField({ name: 'href', title: 'Enlace a Instagram o noticia', type: 'url' }),
		defineField({ name: 'ctaLabel', title: 'Texto enlace', type: 'localizedString' }),
		defineField({ name: 'order', title: 'Orden', type: 'number' })
	],
	preview: {
		select: {
			titleCa: 'title.ca',
			titleEs: 'title.es',
			titleEn: 'title.en',
			subtitle: 'date',
			media: 'image'
		},
		prepare({ titleCa, titleEs, titleEn, subtitle, media }) {
			return {
				title: titleCa || titleEs || titleEn || 'Noticia sin título',
				subtitle,
				media
			};
		}
	}
});
