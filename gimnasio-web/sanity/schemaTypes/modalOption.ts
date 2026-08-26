import { defineField, defineType } from 'sanity';

export const modalOptionType = defineType({
	name: 'modalOption',
	title: 'Modal de reserva',
	type: 'document',
	fields: [
		defineField({
			name: 'tone',
			title: 'Estilo visual',
			type: 'string',
			options: {
				list: [
					{ title: 'Kids', value: 'kids' },
					{ title: 'Junior', value: 'junior' },
					{ title: 'Elite', value: 'elite' },
					{ title: 'Defense', value: 'defense' }
				]
			},
			initialValue: 'kids',
			validation: (rule) => rule.required()
		}),
		defineField({ name: 'title', title: 'Nombre del grupo', type: 'localizedString', validation: (rule) => rule.required() }),
		defineField({ name: 'subtitle', title: 'Subtítulo', type: 'localizedString' }),
		defineField({ name: 'formUrl', title: 'Formulario por idioma', type: 'localizedUrl', validation: (rule) => rule.required() }),
		defineField({
			name: 'image',
			title: 'Logo o imagen',
			type: 'image',
			options: { hotspot: true }
		}),
		defineField({ name: 'order', title: 'Orden', type: 'number' })
	],
	preview: {
		select: {
			titleCa: 'title.ca',
			titleEs: 'title.es',
			titleEn: 'title.en',
			subtitleCa: 'subtitle.ca',
			subtitleEs: 'subtitle.es',
			subtitleEn: 'subtitle.en',
			media: 'image'
		},
		prepare({ titleCa, titleEs, titleEn, subtitleCa, subtitleEs, subtitleEn, media }) {
			return {
				title: titleCa || titleEs || titleEn || 'Grupo sin nombre',
				subtitle: subtitleCa || subtitleEs || subtitleEn || 'Opción de modal',
				media
			};
		}
	}
});
