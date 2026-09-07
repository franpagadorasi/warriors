import { defineField, defineType } from 'sanity';

export const pricingSettingsType = defineType({
	name: 'pricingSettings',
	title: 'Tarifas',
	type: 'document',
	initialValue: {
		goldPrice: 25,
		bluePrice: 45,
		redPrice: 55
	},
	fields: [
		defineField({
			name: 'goldPrice',
			title: 'Cuota amarilla',
			description: 'Importe mensual en euros.',
			type: 'number',
			validation: (rule) => rule.min(0).precision(2)
		}),
		defineField({
			name: 'bluePrice',
			title: 'Cuota azul',
			description: 'Importe mensual en euros.',
			type: 'number',
			validation: (rule) => rule.min(0).precision(2)
		}),
		defineField({
			name: 'redPrice',
			title: 'Cuota roja',
			description: 'Importe mensual en euros.',
			type: 'number',
			validation: (rule) => rule.min(0).precision(2)
		})
	],
	preview: {
		prepare() {
			return { title: 'Tarifas mensuales' };
		}
	}
});
