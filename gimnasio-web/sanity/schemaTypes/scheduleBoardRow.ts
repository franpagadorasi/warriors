import { defineField, defineType } from 'sanity';

export const scheduleBoardRowType = defineType({
	name: 'scheduleBoardRow',
	title: 'Horario',
	type: 'document',
	fields: [
		defineField({ name: 'time', title: 'Franja horaria', type: 'string', validation: (rule) => rule.required() }),
		defineField({
			name: 'tone',
			title: 'Color del grupo',
			type: 'string',
			options: {
				list: [
					{ title: 'Dorado', value: 'gold' },
					{ title: 'Azul', value: 'blue' },
					{ title: 'Rojo', value: 'red' }
				]
			},
			initialValue: 'gold',
			validation: (rule) => rule.required()
		}),
		defineField({ name: 'monday', title: 'Lunes', type: 'string' }),
		defineField({ name: 'tuesday', title: 'Martes', type: 'string' }),
		defineField({ name: 'wednesday', title: 'Miércoles', type: 'string' }),
		defineField({ name: 'thursday', title: 'Jueves', type: 'string' }),
		defineField({ name: 'order', title: 'Orden', type: 'number' })
	],
	preview: {
		select: {
			title: 'time',
			subtitle: 'monday'
		}
	}
});
