import { defineField, defineType } from 'sanity';

export const scheduleEntryType = defineType({
	name: 'scheduleEntry',
	title: 'Horarios',
	type: 'document',
	fields: [
		defineField({ name: 'group', title: 'Grupo', type: 'string', validation: (rule) => rule.required() }),
		defineField({ name: 'days', title: 'Dias', type: 'string', validation: (rule) => rule.required() }),
		defineField({ name: 'time', title: 'Horario', type: 'string', validation: (rule) => rule.required() }),
		defineField({ name: 'order', title: 'Orden', type: 'number' })
	],
	preview: {
		select: {
			title: 'group',
			subtitle: 'time'
		}
	}
});
