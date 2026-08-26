import { defineField, defineType } from 'sanity';

export const statItemType = defineType({
	name: 'statItem',
	title: 'Estadisticas',
	type: 'document',
	fields: [
		defineField({ name: 'value', title: 'Valor', type: 'string', validation: (rule) => rule.required() }),
		defineField({ name: 'label', title: 'Etiqueta', type: 'localizedString', validation: (rule) => rule.required() }),
		defineField({
			name: 'tone',
			title: 'Color',
			type: 'string',
			options: {
				list: [
					{ title: 'Rojo', value: 'red' },
					{ title: 'Azul', value: 'blue' }
				]
			},
			initialValue: 'red'
		}),
		defineField({ name: 'order', title: 'Orden', type: 'number' })
	],
	preview: {
		select: {
			title: 'value',
			subtitleCa: 'label.ca',
			subtitleEs: 'label.es',
			subtitleEn: 'label.en'
		},
		prepare({ title, subtitleCa, subtitleEs, subtitleEn }) {
			return {
				title,
				subtitle: subtitleCa || subtitleEs || subtitleEn || 'Estadística'
			};
		}
	}
});
