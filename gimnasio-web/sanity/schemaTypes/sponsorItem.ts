import { defineField, defineType } from 'sanity';

export const sponsorItemType = defineType({
	name: 'sponsorItem',
	title: 'Patrocinadores y colaboradores',
	type: 'document',
	fields: [
		defineField({ name: 'name', title: 'Nombre', type: 'string', validation: (rule) => rule.required() }),
		defineField({
			name: 'category',
			title: 'Tipo',
			type: 'string',
			options: {
				list: [
					{ title: 'Patrocinador', value: 'sponsor' },
					{ title: 'Colaborador', value: 'partner' }
				]
			},
			initialValue: 'sponsor'
		}),
		defineField({ name: 'website', title: 'Enlace', type: 'url' }),
		defineField({
			name: 'logo',
			title: 'Logo',
			type: 'image',
			options: { hotspot: true },
			validation: (rule) => rule.required()
		}),
		defineField({ name: 'order', title: 'Orden', type: 'number' })
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'category',
			media: 'logo'
		}
	}
});
