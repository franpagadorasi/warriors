import { defineField, defineType } from 'sanity';

export const galleryItemType = defineType({
	name: 'galleryItem',
	title: 'Galeria',
	type: 'document',
	fields: [
		defineField({ name: 'title', title: 'Titulo interno', type: 'string', validation: (rule) => rule.required() }),
		defineField({
			name: 'image',
			title: 'Imagen',
			type: 'image',
			options: { hotspot: true },
			validation: (rule) => rule.required()
		}),
		defineField({ name: 'order', title: 'Orden', type: 'number' }),
		defineField({ name: 'featured', title: 'Destacada grande', type: 'boolean', initialValue: false })
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'featured',
			media: 'image'
		},
		prepare(selection) {
			return {
				title: selection.title,
				subtitle: selection.subtitle ? 'Imagen destacada' : 'Imagen normal',
				media: selection.media
			};
		}
	}
});
