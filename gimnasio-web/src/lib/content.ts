import { createClient } from '@sanity/client';

export interface SiteSettings {
	businessName: string;
	tagline: string;
	eyebrow: string;
	heroTitle: string;
	heroDescription: string;
	primaryCtaLabel: string;
	primaryCtaUrl: string;
	secondaryCtaLabel: string;
	secondaryCtaUrl: string;
	launchLabel: string;
	launchTitle: string;
	launchDescription: string;
	phone: string;
	email: string;
	address: string;
	instagram: string;
	whatsappUrl: string;
}

export interface FeatureItem {
	title: string;
	description: string;
}

export interface ClassOffer {
	title: string;
	description: string;
	audience?: string;
	order?: number;
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
}

export interface HomeContent {
	settings: SiteSettings;
	features: FeatureItem[];
	classes: ClassOffer[];
	schedule: ScheduleEntry[];
	aboutPoints: AboutPoint[];
}

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
const apiVersion = '2026-03-01';

const fallbackContent: HomeContent = {
	settings: {
		businessName: 'Club Taekwondo Warriors',
		tagline: 'Taekwondo olimpico',
		eyebrow: 'Club de taekwondo para todas las edades',
		heroTitle: 'Taekwondo olimpico para competir, crecer y superarte.',
		heroDescription:
			'Formamos campeones en el tatami y grandes personas en la vida con clases infantiles, juveniles y de adultos enfocadas en tecnica, disciplina y valores.',
		primaryCtaLabel: 'Prueba gratis',
		primaryCtaUrl: '#prueba',
		secondaryCtaLabel: 'Conocenos',
		secondaryCtaUrl: '#club',
		launchLabel: 'Ven a entrenar',
		launchTitle: 'Rapido, fuerte, inteligente e inquebrantable',
		launchDescription:
			'Una propuesta moderna para captar alumnos desde el primer vistazo, con una imagen potente y una llamada clara a reservar la primera clase.',
		phone: '+34 600 123 456',
		email: 'hola@clubtaekwndowarriors.com',
		address: 'Calle Warriors 1, tu ciudad',
		instagram: '@clubtaekwndowarriors',
		whatsappUrl: 'https://wa.me/34123456789'
	},
	features: [
		{
			title: 'Taekwondo olimpico',
			description: 'Entrenamos bajo los estandares de World Taekwondo.'
		},
		{
			title: 'Para todas las edades',
			description: 'Desde los 4 anos hasta adultos con grupos adaptados.'
		},
		{
			title: 'Competicion y valores',
			description: 'Tecnica, disciplina, perseverancia y mentalidad de equipo.'
		}
	],
	classes: [
		{
			title: 'Infantil',
			description:
				'Clases dinamicas para ninos y ninas desde los 4 anos, enfocadas en disciplina, confianza y diversion.',
			audience: 'Desde 4 anos',
			order: 1
		},
		{
			title: 'Juvenil',
			description:
				'Entrenamiento tecnico y fisico para jovenes que quieren progresar, competir o ganar seguridad.',
			audience: 'Adolescentes',
			order: 2
		},
		{
			title: 'Adultos',
			description:
				'Sesiones adaptadas a todos los niveles para ponerse en forma, aprender tecnica y desconectar mientras mejoras tu seguridad y coordinacion.',
			audience: 'Todos los niveles',
			order: 3
		},
		{
			title: 'Defensa personal',
			description:
				'Trabajo practico para mejorar reflejos, seguridad y control corporal en situaciones reales.',
			audience: 'Practico',
			order: 4
		}
	],
	schedule: [
		{ group: 'Infantil', days: 'Lunes y miercoles', time: '17:30 - 18:30', order: 1 },
		{ group: 'Cadete / junior', days: 'Lunes y jueves', time: '18:30 - 19:30', order: 2 },
		{ group: 'Adultos', days: 'Lunes, miercoles y viernes', time: '19:30 - 20:30', order: 3 },
		{ group: 'Competicion', days: 'Martes y jueves', time: '20:30 - 22:00', order: 4 }
	],
	aboutPoints: [
		{
			title: 'Valores claros',
			description: 'Respeto, disciplina, autoestima y progresion real.'
		},
		{
			title: 'Instalaciones y ambiente',
			description: 'Tatami, grupos reducidos y ambiente cercano para progresar con seguridad.'
		},
		{
			title: 'Ambicion deportiva',
			description: 'Preparamos a cada alumno para crecer en tecnica, confianza y competicion.'
		}
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
    primaryCtaLabel,
    primaryCtaUrl,
    secondaryCtaLabel,
    secondaryCtaUrl,
    launchLabel,
    launchTitle,
    launchDescription,
    phone,
    email,
    address,
    instagram,
    whatsappUrl
  },
  "features": *[_type == "featureItem"] | order(order asc){
    title,
    description
  },
  "classes": *[_type == "classOffer"] | order(order asc){
    title,
    description,
    audience,
    order
  },
  "schedule": *[_type == "scheduleEntry"] | order(order asc){
    group,
    days,
    time,
    order
  },
  "aboutPoints": *[_type == "aboutPoint"] | order(order asc){
    title,
    description
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
					: fallbackContent.aboutPoints
		};
	} catch (error) {
		console.error('No se pudo cargar el contenido desde Sanity.', error);
		return fallbackContent;
	}
}
