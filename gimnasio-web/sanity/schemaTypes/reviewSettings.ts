import { defineField, defineType } from 'sanity';

export const reviewSettingsType = defineType({
	name: 'reviewSettings',
	title: 'Reseñas de Google',
	type: 'document',
	fields: [
		defineField({
			name: 'ratingValue',
			title: 'Nota media',
			type: 'number',
			validation: (rule) => rule.min(0).max(5)
		}),
		defineField({
			name: 'reviewsCount',
			title: 'Número de reseñas',
			type: 'number',
			validation: (rule) => rule.min(0)
		}),
		defineField({ name: 'googleReviewsUrl', title: 'URL de Google Reviews', type: 'url' })
	],
	preview: {
		select: {
			ratingValue: 'ratingValue',
			reviewsCount: 'reviewsCount'
		},
		prepare({ ratingValue, reviewsCount }) {
			return {
				title: 'Google Reviews',
				subtitle: `${ratingValue ?? '-'} · ${reviewsCount ?? 0} reseñas`
			};
		}
	}
});
