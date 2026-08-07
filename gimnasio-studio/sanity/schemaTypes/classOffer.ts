import { defineField, defineType } from 'sanity';

export const classOfferType = defineType({
	name: 'classOffer',
	title: 'Clases',
	type: 'document',
	fields: [
		defineField({ name: 'title', title: 'Nombre de la clase', type: 'string', validation: (rule) => rule.required() }),
		defineField({ name: 'audience', title: 'Publico o nivel', type: 'string' }),
		defineField({ name: 'description', title: 'Descripcion', type: 'text', rows: 4 }),
		defineField({ name: 'order', title: 'Orden', type: 'number' }),
		defineField({
			name: 'image',
			title: 'Imagen',
			type: 'image',
			options: { hotspot: true }
		})
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'audience',
			media: 'image'
		}
	}
});
