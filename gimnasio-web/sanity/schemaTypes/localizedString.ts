import { defineField, defineType } from 'sanity';

export const localizedStringType = defineType({
	name: 'localizedString',
	title: 'Texto por idioma',
	type: 'object',
	fields: [
		defineField({ name: 'ca', title: 'Català', type: 'string' }),
		defineField({ name: 'es', title: 'Español', type: 'string' }),
		defineField({ name: 'en', title: 'English', type: 'string' })
	]
});
