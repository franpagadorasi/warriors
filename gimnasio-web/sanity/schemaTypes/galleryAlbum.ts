import { defineField, defineType } from 'sanity';

export const galleryAlbumType = defineType({
	name: 'galleryAlbum',
	title: 'Álbumes de galería',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Nombre del álbum',
			type: 'localizedString',
			validation: (rule) => rule.required()
		}),
		defineField({
			name: 'parentAlbum',
			title: 'Carpeta principal',
			description: 'Opcional. Úsala para crear subálbumes, por ejemplo: Competiciones > Cataluña 2026.',
			type: 'reference',
			to: [{ type: 'galleryAlbum' }]
		}),
		defineField({ name: 'order', title: 'Orden', type: 'number' })
	],
	preview: {
		select: {
			titleCa: 'title.ca',
			titleEs: 'title.es',
			titleEn: 'title.en',
			parentCa: 'parentAlbum.title.ca',
			parentEs: 'parentAlbum.title.es',
			parentEn: 'parentAlbum.title.en'
		},
		prepare({ titleCa, titleEs, titleEn, parentCa, parentEs, parentEn }) {
			const title = titleCa || titleEs || titleEn || 'Álbum sin nombre';
			const parent = parentCa || parentEs || parentEn;
			return { title, subtitle: parent ? `Dentro de ${parent}` : 'Álbum principal' };
		}
	}
});
