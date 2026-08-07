import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
	name: 'siteSettings',
	title: 'Ajustes generales',
	type: 'document',
	fields: [
		defineField({ name: 'businessName', title: 'Nombre del centro', type: 'string', validation: (rule) => rule.required() }),
		defineField({ name: 'tagline', title: 'Subtitulo de marca', type: 'string' }),
		defineField({ name: 'eyebrow', title: 'Texto pequeno superior', type: 'string' }),
		defineField({ name: 'heroTitle', title: 'Titular principal', type: 'string', validation: (rule) => rule.required() }),
		defineField({ name: 'heroDescription', title: 'Descripcion principal', type: 'text', rows: 4 }),
		defineField({ name: 'secondaryCtaLabel', title: 'Texto boton secundario', type: 'string' }),
		defineField({ name: 'secondaryCtaUrl', title: 'Enlace boton secundario', type: 'string' }),
		defineField({
			name: 'heroImage',
			title: 'Imagen principal del hero',
			type: 'image',
			options: { hotspot: true }
		}),
		defineField({ name: 'aboutKicker', title: 'Etiqueta sobre nosotros', type: 'string' }),
		defineField({ name: 'aboutTitle', title: 'Titulo sobre nosotros', type: 'string' }),
		defineField({ name: 'aboutDescription', title: 'Descripcion sobre nosotros', type: 'text', rows: 4 }),
		defineField({ name: 'aboutCtaLabel', title: 'Texto boton sobre nosotros', type: 'string' }),
		defineField({ name: 'aboutCtaUrl', title: 'Enlace boton sobre nosotros', type: 'string' }),
		defineField({
			name: 'aboutImageMain',
			title: 'Imagen principal sobre nosotros',
			type: 'image',
			options: { hotspot: true }
		}),
		defineField({
			name: 'aboutImageSecondaryOne',
			title: 'Imagen secundaria 1',
			type: 'image',
			options: { hotspot: true }
		}),
		defineField({
			name: 'aboutImageSecondaryTwo',
			title: 'Imagen secundaria 2',
			type: 'image',
			options: { hotspot: true }
		}),
		defineField({
			name: 'aboutImageSecondaryThree',
			title: 'Imagen secundaria 3',
			type: 'image',
			options: { hotspot: true }
		}),
		defineField({ name: 'classesKicker', title: 'Etiqueta modalidades', type: 'string' }),
		defineField({ name: 'classesTitle', title: 'Titulo modalidades', type: 'string' }),
		defineField({ name: 'classesButtonLabel', title: 'Texto boton modalidades', type: 'string' }),
		defineField({ name: 'newsTitle', title: 'Titulo noticias', type: 'string' }),
		defineField({ name: 'newsLinkLabel', title: 'Texto enlace noticias', type: 'string' }),
		defineField({ name: 'galleryTitle', title: 'Titulo galeria', type: 'string' }),
		defineField({ name: 'galleryLinkLabel', title: 'Texto enlace galeria', type: 'string' }),
		defineField({ name: 'ctaTitle', title: 'Titulo bloque final', type: 'string' }),
		defineField({ name: 'ctaDescription', title: 'Descripcion bloque final', type: 'text', rows: 3 }),
		defineField({ name: 'ctaButtonLabel', title: 'Texto boton bloque final', type: 'string' }),
		defineField({
			name: 'ctaImage',
			title: 'Imagen bloque final',
			type: 'image',
			options: { hotspot: true }
		}),
		defineField({ name: 'footerDescription', title: 'Descripcion footer', type: 'text', rows: 3 }),
		defineField({ name: 'phone', title: 'Telefono', type: 'string' }),
		defineField({ name: 'email', title: 'Email', type: 'string' }),
		defineField({ name: 'address', title: 'Direccion', type: 'string' }),
		defineField({ name: 'instagram', title: 'Instagram visible', type: 'string' }),
		defineField({ name: 'instagramUrl', title: 'URL Instagram', type: 'string' }),
		defineField({ name: 'facebookUrl', title: 'URL Facebook', type: 'string' }),
		defineField({ name: 'tiktokUrl', title: 'URL TikTok', type: 'string' }),
		defineField({ name: 'whatsappUrl', title: 'URL de WhatsApp', type: 'string' }),
		defineField({ name: 'mapButtonLabel', title: 'Texto boton mapa', type: 'string' })
	],
	preview: {
		select: {
			title: 'businessName',
			subtitle: 'tagline'
		}
	}
});
