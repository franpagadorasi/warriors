import { defineField, defineType } from 'sanity';

export const localizedUrlType = defineType({
	name: 'localizedUrl',
	title: 'URL por idioma',
	type: 'object',
	fields: [
		defineField({ name: 'ca', title: 'URL Català', type: 'url' }),
		defineField({ name: 'es', title: 'URL Español', type: 'url' }),
		defineField({ name: 'en', title: 'URL English', type: 'url' })
	]
});
