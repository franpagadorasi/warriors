import { createClient } from '@sanity/client';

import type { Locale } from './site-copy';

export interface LocalizedValue {
	ca?: string;
	es?: string;
	en?: string;
}

export interface ScheduleBoardRowContent {
	time: string;
	tone?: 'gold' | 'blue' | 'red';
	monday?: string;
	tuesday?: string;
	wednesday?: string;
	thursday?: string;
	order?: number;
}

export interface StatItemContent {
	value: string;
	label?: LocalizedValue;
	tone?: 'red' | 'blue';
	order?: number;
}

export interface NewsItemContent {
	title?: LocalizedValue;
	date: string;
	excerpt?: LocalizedValue;
	imageUrl?: string;
	href?: string;
	ctaLabel?: LocalizedValue;
	order?: number;
}

export interface ModalOptionContent {
	tone?: 'kids' | 'junior' | 'elite' | 'defense';
	title?: LocalizedValue;
	subtitle?: LocalizedValue;
	formUrl?: LocalizedValue;
	imageUrl?: string;
	order?: number;
}

export interface SponsorItemContent {
	name: string;
	category?: 'sponsor' | 'partner';
	website?: string;
	logoUrl?: string;
	order?: number;
}

export interface ReviewSettingsContent {
	ratingValue?: number;
	reviewsCount?: number;
	googleReviewsUrl?: string;
}

export interface HomeContent {
	scheduleBoard: ScheduleBoardRowContent[];
	stats: StatItemContent[];
	news: NewsItemContent[];
	modalOptions: ModalOptionContent[];
	sponsors: SponsorItemContent[];
	reviewSettings: ReviewSettingsContent | null;
}

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'fldv0kmw';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';
const apiVersion = '2026-03-01';

const fallbackContent: HomeContent = {
	scheduleBoard: [],
	stats: [],
	news: [],
	modalOptions: [],
	sponsors: [],
	reviewSettings: null
};

const contentClient =
	projectId && dataset
		? createClient({
				projectId,
				dataset,
				apiVersion,
				useCdn: false
			})
		: null;

const homeQuery = `
{
  "scheduleBoard": *[_type == "scheduleBoardRow"] | order(order asc){
    time,
    tone,
    monday,
    tuesday,
    wednesday,
    thursday,
    order
  },
  "stats": *[_type == "statItem"] | order(order asc){
    value,
    label,
    tone,
    order
  },
  "news": *[_type == "newsItem"] | order(order asc){
    title,
    date,
    excerpt,
    href,
    ctaLabel,
    order,
    "imageUrl": image.asset->url
  },
  "modalOptions": *[_type == "modalOption"] | order(order asc){
    tone,
    title,
    subtitle,
    formUrl,
    order,
    "imageUrl": image.asset->url
  },
  "sponsors": *[_type == "sponsorItem"] | order(order asc){
    name,
    category,
    website,
    order,
    "logoUrl": logo.asset->url
  },
  "reviewSettings": *[_type == "reviewSettings"][0]{
    ratingValue,
    reviewsCount,
    googleReviewsUrl
  }
}
`;

export function isSanityConfigured() {
	return Boolean(contentClient);
}

export function getLocalizedFieldValue(
	value: LocalizedValue | null | undefined,
	locale: Locale,
	fallback = ''
) {
	if (!value) return fallback;
	return value[locale] || value.ca || value.es || value.en || fallback;
}

export function formatReviewRatingLabel(locale: Locale, ratingValue?: number | null, fallback = '') {
	if (typeof ratingValue !== 'number' || Number.isNaN(ratingValue)) return fallback;
	const fixed = ratingValue.toFixed(1);
	const localizedValue = locale === 'en' ? fixed : fixed.replace('.', ',');

	if (locale === 'ca') return `${localizedValue} a Google`;
	if (locale === 'es') return `${localizedValue} en Google`;
	return `${localizedValue} on Google`;
}

export function formatReviewsCountLabel(locale: Locale, reviewsCount?: number | null, fallback = '') {
	if (typeof reviewsCount !== 'number' || Number.isNaN(reviewsCount)) return fallback;
	if (locale === 'ca') return `${reviewsCount} ressenyes`;
	if (locale === 'es') return `${reviewsCount} reseñas`;
	return `${reviewsCount} reviews`;
}

export async function getHomeContent(): Promise<HomeContent> {
	if (!contentClient) {
		return fallbackContent;
	}

	try {
		const content = await contentClient.fetch<Partial<HomeContent>>(homeQuery);
		return {
			scheduleBoard:
				content.scheduleBoard && content.scheduleBoard.length > 0
					? content.scheduleBoard
					: fallbackContent.scheduleBoard,
			stats: content.stats && content.stats.length > 0 ? content.stats : fallbackContent.stats,
			news: content.news && content.news.length > 0 ? content.news : fallbackContent.news,
			modalOptions:
				content.modalOptions && content.modalOptions.length > 0
					? content.modalOptions
					: fallbackContent.modalOptions,
			sponsors:
				content.sponsors && content.sponsors.length > 0
					? content.sponsors
					: fallbackContent.sponsors,
			reviewSettings: content.reviewSettings ?? fallbackContent.reviewSettings
		};
	} catch (error) {
		console.error('No se pudo cargar el contenido desde Sanity.', error);
		return fallbackContent;
	}
}
