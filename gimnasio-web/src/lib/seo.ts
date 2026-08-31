import type { Locale } from './site-copy';

export const SITE_NAME = 'Club Taekwondo Warriors';
export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://clubtaekwondowarriors.cat';
export const DEFAULT_OG_IMAGE = '/images/optimized/cabecera.jpg';

export const OG_LOCALE_BY_LANG: Record<Locale, string> = {
	ca: 'ca_ES',
	es: 'es_ES',
	en: 'en_GB'
};

export const BUSINESS_SAME_AS = ['https://www.instagram.com/club_taekwondo_warriors'];

export function toAbsoluteUrl(path: string) {
	return new URL(path, SITE_URL).toString();
}

export function buildSportsClubSchema({
	locale,
	description,
	canonicalPath,
	imagePath = DEFAULT_OG_IMAGE
}: {
	locale: Locale;
	description: string;
	canonicalPath: string;
	imagePath?: string;
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'SportsClub',
		name: SITE_NAME,
		url: toAbsoluteUrl(canonicalPath),
		description,
		sport: 'Taekwondo',
		image: toAbsoluteUrl(imagePath),
		logo: toAbsoluteUrl('/images/logo-warriors.png'),
		telephone: '+34 644 193 620',
		email: 'clubtaekwondowarriors@gmail.com',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Carrer Mossèn Jacint Verdaguer 274',
			addressLocality: 'Sant Vicenç dels Horts',
			addressRegion: 'Barcelona',
			addressCountry: 'ES'
		},
		areaServed: [
			{
				'@type': 'City',
				name: 'Sant Vicenç dels Horts'
			},
			{
				'@type': 'AdministrativeArea',
				name: 'Baix Llobregat'
			}
		],
		openingHoursSpecification: [
			{
				'@type': 'OpeningHoursSpecification',
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
				opens: '17:30',
				closes: '20:30'
			}
		],
		availableLanguage: ['ca', 'es', 'en'],
		sameAs: BUSINESS_SAME_AS
	};
}
