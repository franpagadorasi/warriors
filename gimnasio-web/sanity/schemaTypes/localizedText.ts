import { defineField, defineType } from 'sanity';

export const localizedTextType = defineType({
	name: 'localizedText',
	title: 'Texto largo por idioma',
	type: 'object',
	fields: [
		defineField({ name: 'ca', title: 'Català', type: 'text', rows: 3 }),
		defineField({ name: 'es', title: 'Español', type: 'text', rows: 3 }),
		defineField({ name: 'en', title: 'English', type: 'text', rows: 3 })
	]
});
