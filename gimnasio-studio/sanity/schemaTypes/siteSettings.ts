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
		defineField({ name: 'primaryCtaLabel', title: 'Texto boton principal', type: 'string' }),
		defineField({ name: 'primaryCtaUrl', title: 'Enlace boton principal', type: 'string' }),
		defineField({ name: 'secondaryCtaLabel', title: 'Texto boton secundario', type: 'string' }),
		defineField({ name: 'secondaryCtaUrl', title: 'Enlace boton secundario', type: 'string' }),
		defineField({ name: 'launchLabel', title: 'Etiqueta tarjeta lateral', type: 'string' }),
		defineField({ name: 'launchTitle', title: 'Titulo tarjeta lateral', type: 'string' }),
		defineField({ name: 'launchDescription', title: 'Descripcion tarjeta lateral', type: 'text', rows: 4 }),
		defineField({ name: 'phone', title: 'Telefono', type: 'string' }),
		defineField({ name: 'email', title: 'Email', type: 'string' }),
		defineField({ name: 'address', title: 'Direccion', type: 'string' }),
		defineField({ name: 'instagram', title: 'Instagram', type: 'string' }),
		defineField({ name: 'whatsappUrl', title: 'URL de WhatsApp', type: 'string' })
	],
	preview: {
		select: {
			title: 'businessName',
			subtitle: 'tagline'
		}
	}
});
