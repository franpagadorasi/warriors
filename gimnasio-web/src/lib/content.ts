import { createClient } from '@sanity/client';

export interface SiteSettings {
	businessName: string;
	tagline: string;
	eyebrow: string;
	heroTitle: string;
	heroDescription: string;
	secondaryCtaLabel: string;
	secondaryCtaUrl: string;
	heroImageUrl?: string;
	aboutKicker: string;
	aboutTitle: string;
	aboutDescription: string;
	aboutCtaLabel: string;
	aboutCtaUrl: string;
	aboutImageMainUrl?: string;
	aboutImageSecondaryOneUrl?: string;
	aboutImageSecondaryTwoUrl?: string;
	aboutImageSecondaryThreeUrl?: string;
	classesKicker: string;
	classesTitle: string;
	newsTitle: string;
	newsLinkLabel: string;
	galleryTitle: string;
	galleryLinkLabel: string;
	ctaTitle: string;
	ctaDescription: string;
	ctaButtonLabel: string;
	ctaImageUrl?: string;
	footerDescription: string;
	phone: string;
	email: string;
	address: string;
	instagram: string;
	instagramUrl: string;
	facebookUrl: string;
	tiktokUrl: string;
	whatsappUrl: string;
	mapButtonLabel: string;
}

export interface FeatureItem {
	title: string;
	description: string;
	tone?: 'red' | 'blue';
	order?: number;
}

export interface ClassOffer {
	title: string;
	description: string;
	audience?: string;
	order?: number;
	imageUrl?: string;
}

export interface ScheduleEntry {
	group: string;
	days: string;
	time: string;
	order?: number;
}

export interface AboutPoint {
	title: string;
	description: string;
	order?: number;
}

export interface StatItem {
	value: string;
	label: string;
	tone?: 'red' | 'blue';
	order?: number;
}

export interface NewsItem {
	title: string;
	date: string;
	excerpt?: string;
	imageUrl?: string;
	ctaLabel?: string;
	order?: number;
}

export interface GalleryItem {
	title: string;
	imageUrl?: string;
	featured?: boolean;
	order?: number;
}

export interface HomeContent {
	settings: SiteSettings;
	features: FeatureItem[];
	classes: ClassOffer[];
	schedule: ScheduleEntry[];
	aboutPoints: AboutPoint[];
	stats: StatItem[];
	news: NewsItem[];
	gallery: GalleryItem[];
}

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
const apiVersion = '2026-03-01';

const fallbackContent: HomeContent = {
	settings: {
		businessName: 'Club Taekwondo Warriors',
		tagline: 'Taekwondo olímpico',
		eyebrow: "Escuela d'arts marcials",
		heroTitle: 'Más que un deporte. Una forma de vida.',
		heroDescription:
			'Formamos personas dentro y fuera del tatami. Disciplina, respeto, superación y pasión en cada entrenamiento.',
		secondaryCtaLabel: 'Conócenos',
		secondaryCtaUrl: '#club',
		heroImageUrl: '/images/hero-taekwondo.jpeg',
		aboutKicker: 'Sobre nosotros',
		aboutTitle: 'Formamos guerreros dentro y fuera del tatami.',
		aboutDescription:
			'En Club Taekwondo Warriors ayudamos a crecer a cada alumno a través del taekwondo olímpico, con una metodología cercana, técnica y exigente.',
		aboutCtaLabel: 'Conoce nuestra historia',
		aboutCtaUrl: '#contacto',
		aboutImageMainUrl: '/images/dojo-interior.png',
		aboutImageSecondaryOneUrl: '/images/kids-taekwondo.png',
		aboutImageSecondaryTwoUrl: '/images/modalidad-exhibicion.png',
		aboutImageSecondaryThreeUrl: '/images/modalidad-combate.png',
		classesKicker: 'Nuestras modalidades',
		classesTitle: 'Nuestras modalidades',
		newsTitle: 'Últimas noticias',
		newsLinkLabel: 'Ver todas',
		galleryTitle: 'Galería',
		galleryLinkLabel: 'Ver galería completa',
		ctaTitle: '¿Listo para empezar tu camino?',
		ctaDescription: 'Descubre el club, conoce el ambiente y reserva una primera toma de contacto.',
		ctaButtonLabel: 'Reserva tu plaza',
		ctaImageUrl: '/images/modalidad-poomsae.png',
		footerDescription:
			'Más que un club, una familia. Formando guerreros desde el respeto, la disciplina y la constancia.',
		phone: '644 193 620',
		email: 'clubtaekwondowarriors@gmail.com',
		address: 'Calle Warriors 1, tu ciudad',
		instagram: '@club_taekwondo_warriors',
		instagramUrl: 'https://www.instagram.com/club_taekwondo_warriors',
		facebookUrl: '#',
		tiktokUrl: '#',
		whatsappUrl: 'https://wa.me/34644193620',
		mapButtonLabel: 'Cómo llegar'
	},
	features: [
		{
			title: 'Taekwondo olímpico',
			description: 'Entrenamiento de alto nivel para todas las edades.',
			tone: 'red',
			order: 1
		},
		{
			title: 'Escuela infantil',
			description: 'Desarrollamos habilidades, valores y confianza.',
			tone: 'blue',
			order: 2
		},
		{
			title: 'Club de competición',
			description: 'Competimos, aprendemos y alcanzamos metas.',
			tone: 'red',
			order: 3
		},
		{
			title: 'Todos los niveles',
			description: 'Desde principiantes hasta atletas avanzados.',
			tone: 'blue',
			order: 4
		}
	],
	classes: [
		{
			title: 'Infantil',
			description:
				'Clases dinámicas para niños y niñas desde los 4 años, enfocadas en disciplina, confianza y diversión.',
			audience: 'Desde 4 años',
			order: 1,
			imageUrl: '/images/modalidad-combate.png'
		},
		{
			title: 'Juvenil',
			description:
				'Entrenamiento técnico y físico para jóvenes que quieren progresar, competir o ganar seguridad.',
			audience: 'Adolescentes',
			order: 2,
			imageUrl: '/images/modalidad-poomsae.png'
		},
		{
			title: 'Adultos',
			description:
				'Sesiones adaptadas a todos los niveles para ponerse en forma, aprender técnica y desconectar mientras mejoras tu seguridad y coordinación.',
			audience: 'Todos los niveles',
			order: 3,
			imageUrl: '/images/modalidad-exhibicion.png'
		},
		{
			title: 'Defensa personal',
			description:
				'Trabajo práctico para mejorar reflejos, seguridad y control corporal en situaciones reales.',
			audience: 'Práctico',
			order: 4,
			imageUrl: '/images/modalidad-defensa.png'
		}
	],
	schedule: [
		{ group: 'Infantil', days: 'Lunes y miércoles', time: '17:30 - 18:30', order: 1 },
		{ group: 'Cadete / junior', days: 'Lunes y jueves', time: '18:30 - 19:30', order: 2 },
		{ group: 'Adultos', days: 'Lunes, miércoles y viernes', time: '19:30 - 20:30', order: 3 },
		{ group: 'Competición', days: 'Martes y jueves', time: '20:30 - 22:00', order: 4 }
	],
	aboutPoints: [
		{
			title: 'Valores claros',
			description: 'Respeto, disciplina, autoestima y progresión real.',
			order: 1
		}
	],
	stats: [
		{ value: '+350', label: 'Alumnos activos', tone: 'red', order: 1 },
		{ value: '+120', label: 'Medallas obtenidas', tone: 'blue', order: 2 },
		{ value: '+25', label: 'Años de experiencia', tone: 'red', order: 3 },
		{ value: '+15', label: 'Cinturones negros', tone: 'blue', order: 4 }
	],
	news: [
		{
			title: 'Gran actuación en el campeonato de primavera',
			date: '2026-05-10',
			imageUrl: '/images/modalidad-combate.png',
			ctaLabel: 'Leer más',
			order: 1
		},
		{
			title: 'Examen de cinturones con nuevos aprobados',
			date: '2026-05-02',
			imageUrl: '/images/kids-taekwondo.png',
			ctaLabel: 'Leer más',
			order: 2
		},
		{
			title: 'Campus intensivo y jornadas especiales de técnica',
			date: '2026-04-18',
			imageUrl: '/images/dojo-interior.png',
			ctaLabel: 'Leer más',
			order: 3
		}
	],
	gallery: [
		{ title: 'Galería 1', imageUrl: '/images/kids-taekwondo.png', featured: true, order: 1 },
		{ title: 'Galería 2', imageUrl: '/images/modalidad-combate.png', featured: false, order: 2 },
		{ title: 'Galería 3', imageUrl: '/images/dojo-interior.png', featured: false, order: 3 }
	]
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
  "settings": *[_type == "siteSettings"][0]{
    businessName,
    tagline,
    eyebrow,
    heroTitle,
    heroDescription,
    secondaryCtaLabel,
    secondaryCtaUrl,
    "heroImageUrl": heroImage.asset->url,
    aboutKicker,
    aboutTitle,
    aboutDescription,
    aboutCtaLabel,
    aboutCtaUrl,
    "aboutImageMainUrl": aboutImageMain.asset->url,
    "aboutImageSecondaryOneUrl": aboutImageSecondaryOne.asset->url,
    "aboutImageSecondaryTwoUrl": aboutImageSecondaryTwo.asset->url,
    "aboutImageSecondaryThreeUrl": aboutImageSecondaryThree.asset->url,
    classesKicker,
    classesTitle,
    newsTitle,
    newsLinkLabel,
    galleryTitle,
    galleryLinkLabel,
    ctaTitle,
    ctaDescription,
    ctaButtonLabel,
    "ctaImageUrl": ctaImage.asset->url,
    footerDescription,
    phone,
    email,
    address,
    instagram,
    instagramUrl,
    facebookUrl,
    tiktokUrl,
    whatsappUrl,
    mapButtonLabel
  },
  "features": *[_type == "featureItem"] | order(order asc){
    title,
    description,
    tone,
    order
  },
  "classes": *[_type == "classOffer"] | order(order asc){
    title,
    description,
    audience,
    order,
    "imageUrl": image.asset->url
  },
  "schedule": *[_type == "scheduleEntry"] | order(order asc){
    group,
    days,
    time,
    order
  },
  "aboutPoints": *[_type == "aboutPoint"] | order(order asc){
    title,
    description,
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
    ctaLabel,
    order,
    "imageUrl": image.asset->url
  },
  "gallery": *[_type == "galleryItem"] | order(order asc){
    title,
    featured,
    order,
    "imageUrl": image.asset->url
  }
}
`;

export function isSanityConfigured() {
	return Boolean(contentClient);
}

export async function getHomeContent(): Promise<HomeContent> {
	if (!contentClient) {
		return fallbackContent;
	}

	try {
		const content = await contentClient.fetch<Partial<HomeContent>>(homeQuery);
		return {
			settings: {
				...fallbackContent.settings,
				...(content.settings ?? {})
			},
			features:
				content.features && content.features.length > 0 ? content.features : fallbackContent.features,
			classes:
				content.classes && content.classes.length > 0 ? content.classes : fallbackContent.classes,
			schedule:
				content.schedule && content.schedule.length > 0 ? content.schedule : fallbackContent.schedule,
			aboutPoints:
				content.aboutPoints && content.aboutPoints.length > 0
					? content.aboutPoints
					: fallbackContent.aboutPoints,
			stats: content.stats && content.stats.length > 0 ? content.stats : fallbackContent.stats,
			news: content.news && content.news.length > 0 ? content.news : fallbackContent.news,
			gallery: content.gallery && content.gallery.length > 0 ? content.gallery : fallbackContent.gallery
		};
	} catch (error) {
		console.error('No se pudo cargar el contenido desde Sanity.', error);
		return fallbackContent;
	}
}
