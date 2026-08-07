import { defineField, defineType } from 'sanity';

export const featureItemType = defineType({
	name: 'featureItem',
	title: 'Ventajas destacadas',
	type: 'document',
	fields: [
		defineField({ name: 'title', title: 'Titulo', type: 'string', validation: (rule) => rule.required() }),
		defineField({ name: 'description', title: 'Descripcion', type: 'text', rows: 3 }),
		defineField({ name: 'order', title: 'Orden', type: 'number' })
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'description'
		}
	}
});
