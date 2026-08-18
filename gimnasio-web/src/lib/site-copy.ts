export type Locale = 'ca' | 'es' | 'en';

type Tone = 'red' | 'blue' | 'gold';

export interface SiteCopy {
	lang: Locale;
	seoTitle: string;
	seoDescription: string;
	nav: {
		home: string;
		about: string;
		classes: string;
		pricing: string;
		schedule: string;
		news: string;
		gallery: string;
		contact: string;
	};
	hero: {
		eyebrow: string;
		titleMain: string;
		titleAccent: string;
		values: string;
		chant: string;
		description: string;
		primaryCta: string;
		secondaryCta: string;
		trialWhatsappMessage: string;
		sideWords: string[];
		imageAlt: string;
	};
	features: Array<{ title: string; description: string; highlight?: string; tone: 'red' | 'blue' }>;
	about: {
		kicker: string;
		title: string;
		description: string;
		cta: string;
		imagesAlt: string[];
	};
	classes: {
		title: string;
		moreInfo: string;
		items: Array<{ title: string; description: string; audience: string; imageUrl: string }>;
	};
	pricing: {
		title: string;
		cardLabel: string;
		recommended: string;
		plans: Array<{
			tone: Tone;
			name: string;
			subtitle: string;
			price: string;
			frequency: string;
			badge?: string;
			items: Array<{ icon: string; text: string }>;
		}>;
		reasonsTitle: string;
		reasons: Array<{ icon: string; text: string }>;
	};
	schedule: {
		title: string;
		headerTime: string;
		days: string[];
		rows: Array<{ time: string; tone: Tone; classes: string[] }>;
		ages: Array<{ tone: Tone; label: string; range: string; description: string }>;
		values: Array<{ label: string; tone: Tone; icon: string }>;
	};
	stats: Array<{ value: string; label: string; tone: 'red' | 'blue' }>;
	news: {
		title: string;
		linkLabel: string;
		readMore: string;
		items: Array<{ title: string; date: string; excerpt: string; imageUrl: string; href?: string }>;
	};
	gallery: {
		title: string;
		linkLabel: string;
		items: Array<{ title: string; imageUrl: string; featured?: boolean }>;
	};
	cta: {
		title: string;
		description: string;
		button: string;
		imageAlt: string;
		imageUrl: string;
	};
	modal: {
		kicker: string;
		title: string;
		description: string;
		options: Array<{ tone: 'kids' | 'junior' | 'elite'; title: string; subtitle: string; url: string }>;
	};
	footer: {
		description: string;
		contactTitle: string;
		reviewsTitle: string;
		reviewsSubtitle: string;
		reviewsRatingLabel: string;
		reviewsCountLabel: string;
		reviewsButton: string;
		mapTitle: string;
		mapSubtitle: string;
		hours: string;
		mapButton: string;
		address: string;
		phone: string;
		email: string;
		instagramLabel: string;
		instagramUrl: string;
		facebookUrl: string;
		whatsappUrl: string;
		legal: string;
		galleryAlts: string[];
	};
}

const shared = {
	modalUrls: {
		kids: 'https://forms.gle/2wfg4yf1ycwVXgep8',
		junior: 'https://forms.gle/Z9Z36BKQYSVFNbzJ8',
		elite: 'https://forms.gle/tRghWETwyQiUTExY6'
	},
	images: {
		hero: '/images/hero-taekwondo.jpeg',
		dojo: '/images/dojo-interior.png',
		kids: '/images/kids-taekwondo.png',
		exhibition: '/images/modalidad-exhibicion.png',
		combat: '/images/modalidad-combate.png',
		defense: '/images/modalidad-defensa.png',
		poomsae: '/images/modalidad-poomsae.png',
		ctaDiana: '/images/cta-diana-kick-right.png'
	},
	stats: [
		{ value: '+89', tone: 'red' as const },
		{ value: '+108', tone: 'blue' as const },
		{ value: '+20', tone: 'red' as const },
		{ value: '+5', tone: 'blue' as const }
	]
};

export const siteCopy: Record<Locale, SiteCopy> = {
	ca: {
		lang: 'ca',
		seoTitle: 'Club Taekwondo Warriors | Taekwondo ol\u00edmpic',
		seoDescription:
			'Web informativa del Club Taekwondo Warriors amb inscripci\u00f3 a classes, contacte directe i informaci\u00f3 del centre.',
		nav: {
			home: 'Inici',
			about: 'Sobre nosaltres',
			classes: 'Modalitats',
			pricing: 'Quotes',
			schedule: 'Horaris',
			news: 'Not\u00edcies',
			gallery: 'Galeria',
			contact: 'Contacte'
		},
		hero: {
			eyebrow: "Escola d'arts marcials",
			titleMain: 'Taekwondo',
			titleAccent: 'Ol\u00edmpic',
			values: 'Disciplina. Respecte. Superaci\u00f3.',
			chant: 'Som Warriors!',
			description:
				'Formem persones dins i fora del tatami. Disciplina, respecte, superaci\u00f3 i passi\u00f3 a cada entrenament.',
			primaryCta: 'Prova gratis',
			secondaryCta: "Coneix-nos",
			trialWhatsappMessage:
				"Hola! M'agradaria demanar informaci\u00f3 sobre una classe de prova a Club Taekwondo Warriors.%0A%0ANom:%0AEdat:%0AModalitat d'inter\u00e8s:",
			sideWords: ['\u00c0gil', 'Fort', 'Prec\u00eds', 'Inquebrantable'],
			imageAlt: 'Combat de taekwondo ol\u00edmpic'
		},
		features: [
			{ title: 'Taekwondo ol\u00edmpic', description: 'Art marcial i esport de combat reglamentat.', tone: 'red' },
			{ title: 'Formaci\u00f3', description: 'Des de la iniciaci\u00f3 fins a la competici\u00f3.', tone: 'blue' },
			{ title: 'Totes les edats', description: 'Nens, joves i adults.', highlight: 'Per a tots els nivells.', tone: 'blue' },
			{ title: 'Equip de competici\u00f3', description: 'Entrenament per a alt rendiment.', tone: 'red' }
		],
		about: {
			kicker: 'Sobre nosaltres',
			title: 'Formem guerrers dins i fora del tatami.',
			description:
				'Al Club Taekwondo Warriors ajudem a cr\u00e9ixer cada alumne a trav\u00e9s del taekwondo ol\u00edmpic, amb una metodologia propera, t\u00e8cnica i exigent.',
			cta: 'Coneix la nostra hist\u00f2ria',
			imagesAlt: ['Entrenament amb Diana', 'Canvi de cintur\u00f3', 'Treball t\u00e8cnic del grup', 'Treball postural en grup', 'Explicaci\u00f3 amb els alumnes']
		},
		classes: {
			title: 'Modalitats que treballem',
			moreInfo: 'M\u00e9s informaci\u00f3',
			items: [
				{
					title: 'T\u00e8cnica i poomsae',
					description: 'Seq\u00fc\u00e8ncies de moviments t\u00e8cnics executats de manera ordenada per perfeccionar la t\u00e8cnica, l\u2019equilibri i la concentraci\u00f3.',
					audience: 'Precisi\u00f3 i control',
					imageUrl: shared.images.poomsae
				},
				{
					title: 'Combat',
					description: 'Una disciplina que combina superaci\u00f3, confian\u00e7a i esperit de lluita, ajudant els nostres alumnes a cr\u00e9ixer, respectar i superar-se en cada repte.',
					audience: 'Esperit de lluita',
					imageUrl: shared.images.combat
				},
				{
					title: 'Exhibici\u00f3',
					description:
						'Un moment per compartir, gaudir i demostrar tot el que els nostres alumnes han aconseguit amb esfor\u00e7, const\u00e0ncia i passi\u00f3.',
					audience: 'Expressi\u00f3 i passi\u00f3',
					imageUrl: shared.images.exhibition
				},
				{
					title: 'Defensa personal',
					description: 'Una formaci\u00f3 que ajuda els nostres alumnes a afrontar situacions de risc amb seguretat, confian\u00e7a i capacitat de reacci\u00f3.',
					audience: 'Seguretat real',
					imageUrl: shared.images.defense
				}
			]
		},
		pricing: {
			title: "Quotes d'entrenament",
			cardLabel: 'Quota',
			recommended: 'Recomanada',
			plans: [
				{
					tone: 'gold',
					name: 'Quota groga',
					subtitle: 'Iniciaci\u00f3',
					price: '25',
					frequency: '/mes',
					items: [
						{ icon: 'calendar', text: '1 dia per setmana' },
						{ icon: 'user', text: 'Ideal per comen\u00e7ar i descobrir el taekwondo' },
						{ icon: 'target', text: 'Aprenentatge de t\u00e8cniques b\u00e0siques' },
						{ icon: 'shield', text: 'Desenvolupament de coordinaci\u00f3, disciplina i valors' }
					]
				},
				{
					tone: 'blue',
					name: 'Quota blava elite',
					subtitle: 'Progressi\u00f3',
					price: '45',
					frequency: '/mes',
					badge: 'Recomanada',
					items: [
						{ icon: 'calendar', text: '2 dies per setmana' },
						{ icon: 'growth', text: 'M\u00e9s continu\u00eftat i evoluci\u00f3 t\u00e8cnica' },
						{ icon: 'cap', text: 'Preparaci\u00f3 per a ex\u00e0mens de grau' },
						{ icon: 'arm', text: 'Millora f\u00edsica i esportiva' }
					]
				},
				{
					tone: 'red',
					name: 'Quota vermella elite',
					subtitle: 'Competici\u00f3',
					price: '55',
					frequency: '/mes',
					items: [
						{ icon: 'calendar', text: '3 dies per setmana' },
						{ icon: 'trophy', text: "Per a nens que s'inicien en la competici\u00f3" },
						{ icon: 'kick', text: 'Perfeccionament t\u00e8cnic i t\u00e0ctic' },
						{ icon: 'barbell', text: 'Millora f\u00edsica i rendiment' }
					]
				}
			],
			reasonsTitle: 'Per qu\u00e8 entrenar a Warriors?',
			reasons: [
				{ icon: 'rings', text: 'Taekwondo ol\u00edmpic' },
				{ icon: 'teacher', text: 'Professors titulats' },
				{ icon: 'belt', text: 'Ex\u00e0mens de grau' },
				{ icon: 'kick', text: 'Participaci\u00f3 en exhibicions' },
				{ icon: 'podium', text: 'Equip de competici\u00f3' },
				{ icon: 'group', text: 'Ambient familiar i educatiu' }
			]
		},
		schedule: {
			title: 'Horari setmanal',
			headerTime: 'Horari',
			days: ['Dilluns', 'Dimarts', 'Dimecres', 'Dijous'],
			rows: [
				{ time: '17:30 - 18:30', tone: 'gold', classes: ['Warriors Kids', 'Warriors Kids', 'Warriors Kids', 'Warriors Kids'] },
				{ time: '18:30 - 19:30', tone: 'blue', classes: ['Warriors Junior', 'Warriors Junior', 'Warriors Junior', 'Warriors Junior'] },
				{ time: '19:30 - 20:30', tone: 'red', classes: ['Warriors Elite', '', 'Warriors Elite', 'Warriors Elite'] }
			],
			ages: [
				{
					tone: 'gold',
					label: 'Warriors Kids',
					range: 'de 3 a 9 anys',
					description: "Per a nens i nenes que s'inicien en el taekwondo. Diversi\u00f3, aprenentatge i valors."
				},
				{
					tone: 'blue',
					label: 'Warriors Junior',
					range: 'de 10 a 15 anys',
					description: 'Per a nens i joves que volen continuar creixent, millorar i superar-se cada dia.'
				},
				{
					tone: 'red',
					label: 'Warriors Elite',
					range: 'm\u00e9s de 16 anys',
					description: "Per a qui busca el m\u00e0xim rendiment i la competici\u00f3. Comprom\u00eds, esfor\u00e7 i excel\u00b7l\u00e8ncia."
				}
			],
			values: [
				{ label: 'CORTESIA', tone: 'blue', icon: 'handshake' },
				{ label: 'PERSEVERAN\u00c7A', tone: 'red', icon: 'flag' },
				{ label: 'AUTOCONTROL', tone: 'gold', icon: 'lotus' },
				{ label: 'HUMILITAT', tone: 'blue', icon: 'dobok' }
			]
		},
		stats: [
			{ ...shared.stats[0], label: 'Alumnes actius' },
			{ ...shared.stats[1], label: 'Medalles obtingudes' },
			{ ...shared.stats[2], label: "Anys d'experi\u00e8ncia" },
			{ ...shared.stats[3], label: 'Cinturons negres' }
		],
		news: {
			title: 'Not\u00edcies',
			linkLabel: 'Veure totes',
			readMore: 'Llegir m\u00e9s',
			items: [
				{
					title: 'Campionat de Catalunya infantil',
					date: '2025-11-02',
					excerpt:
						"Els tres Warriors que han competit han aconseguit medalla: Daniel Aliaga s'ha tornat a proclamar campi\u00f3, Nara Zald\u00edvar ha quedat tercera i Gerard Moya ha pujat al podi en la seva primera competici\u00f3.",
					imageUrl: '/images/noticia-catalunya-infantil-1.png',
					href: 'https://www.instagram.com/club_taekwondo_warriors/p/DQjfwSsCP1m/'
				},
				{
					title: 'Jornada t\u00e8cnica i preparaci\u00f3 de grau',
					date: '2026-10-18',
					excerpt: 'Sessi\u00f3 especial per refor\u00e7ar poomsae, t\u00e8cnica i continguts previs als pr\u00f2xims ex\u00e0mens de cintur\u00f3.',
					imageUrl: shared.images.poomsae
				},
				{
					title: 'Exhibicions i moments del club',
					date: '2026-11-07',
					excerpt: "Compartim activitats, exhibicions i el dia a dia de Warriors perqu\u00e8 les fam\u00edlies segueixin l'evoluci\u00f3 dels alumnes.",
					imageUrl: shared.images.exhibition
				}
			]
		},
		gallery: {
			title: 'Galeria',
			linkLabel: 'Veure galeria completa',
			items: [
				{ title: 'Entrenament Warriors 1', imageUrl: '/images/sobre-10.jpeg', featured: true },
				{ title: 'Entrenament Warriors 2', imageUrl: '/images/sobre-11.jpeg' },
				{ title: 'Entrenament Warriors 3', imageUrl: '/images/sobre-17.jpeg' },
				{ title: 'Entrenament Warriors 4', imageUrl: '/images/sobre-18.jpeg' },
				{ title: 'Entrenament Warriors 5', imageUrl: '/images/sobre-22.jpeg' },
				{ title: 'Mestra Diana', imageUrl: '/images/about-diana.jpeg' },
				{ title: 'Mestra Laia', imageUrl: '/images/about-laia.jpeg' }
			]
		},
		cta: {
			title: 'Preparat per comen\u00e7ar<br />el teu cam\u00ed?',
			description: "Descobreix el club, coneix l'ambient i reserva una primera presa de contacte.",
			button: 'Reserva la teva pla\u00e7a',
			imageAlt: 'Pr\u00e0ctica de taekwondo',
			imageUrl: shared.images.ctaDiana
		},
		modal: {
			kicker: 'Reserva la teva pla\u00e7a',
			title: 'Tria una modalitat',
			description: 'Selecciona el grup que millor encaixa amb tu i et portem al formulari corresponent.',
			options: [
				{ tone: 'kids', title: 'Warriors Kids', subtitle: 'De 3 a 9 anys', url: shared.modalUrls.kids },
				{ tone: 'junior', title: 'Warriors Junior', subtitle: 'De 10 a 15 anys', url: shared.modalUrls.junior },
				{ tone: 'elite', title: 'Warriors Elite', subtitle: 'M\u00e9s de 16 anys', url: shared.modalUrls.elite }
			]
		},
		footer: {
			description: 'M\u00e9s que un club, una fam\u00edlia. Formant guerrers des del respecte, la disciplina i la const\u00e0ncia.',
			contactTitle: 'Contacte',
			reviewsTitle: 'Ressenyes de Google',
			reviewsSubtitle: "El que diuen les fam\u00edlies del club",
			reviewsRatingLabel: '5,0 a Google',
			reviewsCountLabel: '55 ressenyes',
			reviewsButton: 'Veure ressenyes a Google',
			mapTitle: 'Com arribar',
			mapSubtitle: 'Troba el club i vine a con\u00e8ixer-nos',
			hours: 'Dl-V: 17:30 - 20:30',
			mapButton: 'Com arribar',
			address: 'Calle Moss\u00e8n Jacint Verdaguer 274',
			phone: '644 193 620',
			email: 'clubtaekwondowarriors@gmail.com',
			instagramLabel: '@club_taekwondo_warriors',
			instagramUrl: 'https://www.instagram.com/club_taekwondo_warriors',
			facebookUrl: '#',
			whatsappUrl: 'https://wa.me/34644193620',
			legal: 'Tots els drets reservats.',
			galleryAlts: ['Classe infantil', 'Combat ol\u00edmpic', 'Instal\u00b7lacions del dojo']
		}
	},
	es: {
		lang: 'es',
		seoTitle: 'Club Taekwondo Warriors | Taekwondo ol\u00edmpico',
		seoDescription:
			'Web informativa del Club Taekwondo Warriors con inscripci\u00f3n a clases, contacto directo e informaci\u00f3n del centro.',
		nav: {
			home: 'Inicio',
			about: 'Sobre nosotros',
			classes: 'Modalidades',
			pricing: 'Cuotas',
			schedule: 'Horarios',
			news: 'Noticias',
			gallery: 'Galer\u00eda',
			contact: 'Contacto'
		},
		hero: {
			eyebrow: 'Escuela de artes marciales',
			titleMain: 'Taekwondo',
			titleAccent: 'Ol\u00edmpico',
			values: 'Disciplina. Respeto. Superaci\u00f3n.',
			chant: '\u00a1Somos Warriors!',
			description:
				'Formamos personas dentro y fuera del tatami. Disciplina, respeto, superaci\u00f3n y pasi\u00f3n en cada entrenamiento.',
			primaryCta: 'Prueba gratis',
			secondaryCta: 'Con\u00f3cenos',
			trialWhatsappMessage:
				'Hola, me gustar\u00eda pedir informaci\u00f3n sobre una clase de prueba en Club Taekwondo Warriors.%0A%0ANombre:%0AEdad:%0AModalidad de inter\u00e9s:',
			sideWords: ['\u00c1gil', 'Fuerte', 'Preciso', 'Inquebrantable'],
			imageAlt: 'Combate de taekwondo ol\u00edmpico'
		},
		features: [
			{ title: 'Taekwondo ol\u00edmpico', description: 'Arte marcial y deporte de combate reglado.', tone: 'red' },
			{ title: 'Formaci\u00f3n', description: 'Desde iniciaci\u00f3n hasta competici\u00f3n.', tone: 'blue' },
			{ title: 'Todas las edades', description: 'Ni\u00f1os, j\u00f3venes y adultos.', highlight: 'Para todos los niveles.', tone: 'blue' },
			{ title: 'Equipo de competici\u00f3n', description: 'Entrenamiento para alto rendimiento.', tone: 'red' }
		],
		about: {
			kicker: 'Sobre nosotros',
			title: 'Formamos guerreros dentro y fuera del tatami.',
			description:
				'En Club Taekwondo Warriors ayudamos a crecer a cada alumno a trav\u00e9s del taekwondo ol\u00edmpico, con una metodolog\u00eda cercana, t\u00e9cnica y exigente.',
			cta: 'Conoce nuestra historia',
			imagesAlt: ['Entrenamiento con Diana', 'Cambio de cintur\u00f3n', 'Trabajo t\u00e9cnico del grupo', 'Trabajo postural en grupo', 'Explicaci\u00f3n con los alumnos']
		},
		classes: {
			title: 'Modalidades que trabajamos',
			moreInfo: 'M\u00e1s informaci\u00f3n',
			items: [
				{
					title: 'T\u00e9cnica y poomsae',
					description: 'Secuencias de movimientos t\u00e9cnicos ejecutados de forma ordenada para perfeccionar la t\u00e9cnica, el equilibrio y la concentraci\u00f3n.',
					audience: 'Precisi\u00f3n y control',
					imageUrl: shared.images.poomsae
				},
				{
					title: 'Combate',
					description: 'Una disciplina que combina superaci\u00f3n, confianza y esp\u00edritu de lucha, ayudando a nuestros alumnos a crecer, respetar y superarse en cada reto.',
					audience: 'Esp\u00edritu de lucha',
					imageUrl: shared.images.combat
				},
				{
					title: 'Exhibici\u00f3n',
					description:
						'Un momento para compartir, disfrutar y demostrar todo lo que nuestros alumnos han conseguido con esfuerzo, constancia y pasi\u00f3n.',
					audience: 'Expresi\u00f3n y pasi\u00f3n',
					imageUrl: shared.images.exhibition
				},
				{
					title: 'Defensa personal',
					description: 'Una formaci\u00f3n que ayuda a nuestros alumnos a afrontar situaciones de riesgo con seguridad, confianza y capacidad de reacci\u00f3n.',
					audience: 'Seguridad real',
					imageUrl: shared.images.defense
				}
			]
		},
		pricing: {
			title: 'Cuotas de entrenamiento',
			cardLabel: 'Cuota',
			recommended: 'Recomendada',
			plans: [
				{
					tone: 'gold',
					name: 'Cuota amarilla',
					subtitle: 'Iniciaci\u00f3n',
					price: '25',
					frequency: '/mes',
					items: [
						{ icon: 'calendar', text: '1 d\u00eda por semana' },
						{ icon: 'user', text: 'Ideal para empezar y descubrir el taekwondo' },
						{ icon: 'target', text: 'Aprendizaje de t\u00e9cnicas b\u00e1sicas' },
						{ icon: 'shield', text: 'Desarrollo de coordinaci\u00f3n, disciplina y valores' }
					]
				},
				{
					tone: 'blue',
					name: 'Cuota azul elite',
					subtitle: 'Progresi\u00f3n',
					price: '45',
					frequency: '/mes',
					badge: 'Recomendada',
					items: [
						{ icon: 'calendar', text: '2 d\u00edas por semana' },
						{ icon: 'growth', text: 'Mayor continuidad y evoluci\u00f3n t\u00e9cnica' },
						{ icon: 'cap', text: 'Preparaci\u00f3n para ex\u00e1menes de grado' },
						{ icon: 'arm', text: 'Mejora f\u00edsica y deportiva' }
					]
				},
				{
					tone: 'red',
					name: 'Cuota roja elite',
					subtitle: 'Competici\u00f3n',
					price: '55',
					frequency: '/mes',
					items: [
						{ icon: 'calendar', text: '3 d\u00edas por semana' },
						{ icon: 'trophy', text: 'Para ni\u00f1os que se inician en la competici\u00f3n' },
						{ icon: 'kick', text: 'Perfeccionamiento t\u00e9cnico y t\u00e1ctico' },
						{ icon: 'barbell', text: 'Mejora f\u00edsica y rendimiento' }
					]
				}
			],
			reasonsTitle: '\u00bfPor qu\u00e9 entrenar en Warriors?',
			reasons: [
				{ icon: 'rings', text: 'Taekwondo ol\u00edmpico' },
				{ icon: 'teacher', text: 'Profesores titulados' },
				{ icon: 'belt', text: 'Ex\u00e1menes de grado' },
				{ icon: 'kick', text: 'Participaci\u00f3n en exhibiciones' },
				{ icon: 'podium', text: 'Equipo de competici\u00f3n' },
				{ icon: 'group', text: 'Ambiente familiar y educativo' }
			]
		},
		schedule: {
			title: 'Horario semanal',
			headerTime: 'Horario',
			days: ['Lunes', 'Martes', 'Mi\u00e9rcoles', 'Jueves'],
			rows: [
				{ time: '17:30 - 18:30', tone: 'gold', classes: ['Warriors Kids', 'Warriors Kids', 'Warriors Kids', 'Warriors Kids'] },
				{ time: '18:30 - 19:30', tone: 'blue', classes: ['Warriors Junior', 'Warriors Junior', 'Warriors Junior', 'Warriors Junior'] },
				{ time: '19:30 - 20:30', tone: 'red', classes: ['Warriors Elite', '', 'Warriors Elite', 'Warriors Elite'] }
			],
			ages: [
				{
					tone: 'gold',
					label: 'Warriors Kids',
					range: 'de 3 a 9 a\u00f1os',
					description: 'Para ni\u00f1os y ni\u00f1as que se inician en el taekwondo. Diversi\u00f3n, aprendizaje y valores.'
				},
				{
					tone: 'blue',
					label: 'Warriors Junior',
					range: 'de 10 a 15 a\u00f1os',
					description: 'Para ni\u00f1os y j\u00f3venes que quieren seguir creciendo, mejorar y superarse cada d\u00eda.'
				},
				{
					tone: 'red',
					label: 'Warriors Elite',
					range: 'm\u00e1s de 16 a\u00f1os',
					description: 'Para quienes buscan el m\u00e1ximo rendimiento y competici\u00f3n. Compromiso, esfuerzo y excelencia.'
				}
			],
			values: [
				{ label: 'CORTES\u00cdA', tone: 'blue', icon: 'handshake' },
				{ label: 'PERSEVERANCIA', tone: 'red', icon: 'flag' },
				{ label: 'AUTOCONTROL', tone: 'gold', icon: 'lotus' },
				{ label: 'HUMILDAD', tone: 'blue', icon: 'dobok' }
			]
		},
		stats: [
			{ ...shared.stats[0], label: 'Alumnos activos' },
			{ ...shared.stats[1], label: 'Medallas obtenidas' },
			{ ...shared.stats[2], label: 'A\u00f1os de experiencia' },
			{ ...shared.stats[3], label: 'Cinturones negros' }
		],
		news: {
			title: 'Noticias',
			linkLabel: 'Ver todas',
			readMore: 'Leer m\u00e1s',
			items: [
				{
					title: 'Campeonato de Catalu\u00f1a infantil',
					date: '2025-11-02',
					excerpt:
						'Los tres Warriors que compitieron lograron medalla: Daniel Aliaga volvi\u00f3 a proclamarse campe\u00f3n, Nara Zald\u00edvar repiti\u00f3 tercer puesto y Gerard Moya subi\u00f3 al podio en su primera competici\u00f3n.',
					imageUrl: '/images/noticia-catalunya-infantil-1.png',
					href: 'https://www.instagram.com/club_taekwondo_warriors/p/DQjfwSsCP1m/'
				},
				{
					title: 'Jornada t\u00e9cnica y preparaci\u00f3n de grado',
					date: '2026-10-18',
					excerpt: 'Sesi\u00f3n especial para reforzar poomsae, t\u00e9cnica y contenidos previos a los pr\u00f3ximos ex\u00e1menes de cintur\u00f3n.',
					imageUrl: shared.images.poomsae
				},
				{
					title: 'Exhibiciones y vida del club',
					date: '2026-11-07',
					excerpt: 'Compartimos actividades, exhibiciones y el d\u00eda a d\u00eda de Warriors para que las familias sigan la evoluci\u00f3n del club.',
					imageUrl: shared.images.exhibition
				}
			]
		},
		gallery: {
			title: 'Galer\u00eda',
			linkLabel: 'Ver galer\u00eda completa',
			items: [
				{ title: 'Entrenamiento Warriors 1', imageUrl: '/images/sobre-10.jpeg', featured: true },
				{ title: 'Entrenamiento Warriors 2', imageUrl: '/images/sobre-11.jpeg' },
				{ title: 'Entrenamiento Warriors 3', imageUrl: '/images/sobre-17.jpeg' },
				{ title: 'Entrenamiento Warriors 4', imageUrl: '/images/sobre-18.jpeg' },
				{ title: 'Entrenamiento Warriors 5', imageUrl: '/images/sobre-22.jpeg' },
				{ title: 'Maestra Diana', imageUrl: '/images/about-diana.jpeg' },
				{ title: 'Maestra Laia', imageUrl: '/images/about-laia.jpeg' }
			]
		},
		cta: {
			title: '\u00bfListo para empezar<br />tu camino?',
			description: 'Descubre el club, conoce el ambiente y reserva una primera toma de contacto.',
			button: 'Reserva tu plaza',
			imageAlt: 'Pr\u00e1ctica de taekwondo',
			imageUrl: shared.images.ctaDiana
		},
		modal: {
			kicker: 'Reserva tu plaza',
			title: 'Elige una modalidad',
			description: 'Selecciona el grupo que mejor encaja contigo y te llevamos al formulario correspondiente.',
			options: [
				{ tone: 'kids', title: 'Warriors Kids', subtitle: 'De 3 a 9 a\u00f1os', url: shared.modalUrls.kids },
				{ tone: 'junior', title: 'Warriors Junior', subtitle: 'De 10 a 15 a\u00f1os', url: shared.modalUrls.junior },
				{ tone: 'elite', title: 'Warriors Elite', subtitle: 'M\u00e1s de 16 a\u00f1os', url: shared.modalUrls.elite }
			]
		},
		footer: {
			description: 'M\u00e1s que un club, una familia. Formando guerreros desde el respeto, la disciplina y la constancia.',
			contactTitle: 'Contacto',
			reviewsTitle: 'Rese\u00f1as de Google',
			reviewsSubtitle: 'Lo que dicen las familias del club',
			reviewsRatingLabel: '5,0 en Google',
			reviewsCountLabel: '55 rese\u00f1as',
			reviewsButton: 'Ver rese\u00f1as en Google',
			mapTitle: 'C\u00f3mo llegar',
			mapSubtitle: 'Encuentra el club y ven a conocernos',
			hours: 'L-V: 17:30 - 20:30',
			mapButton: 'C\u00f3mo llegar',
			address: 'Calle Moss\u00e8n Jacint Verdaguer 274',
			phone: '644 193 620',
			email: 'clubtaekwondowarriors@gmail.com',
			instagramLabel: '@club_taekwondo_warriors',
			instagramUrl: 'https://www.instagram.com/club_taekwondo_warriors',
			facebookUrl: '#',
			whatsappUrl: 'https://wa.me/34644193620',
			legal: 'Todos los derechos reservados.',
			galleryAlts: ['Clase infantil', 'Combate ol\u00edmpico', 'Instalaciones del dojo']
		}
	},
	en: {
		lang: 'en',
		seoTitle: 'Club Taekwondo Warriors | Olympic Taekwondo',
		seoDescription:
			'Official website of Club Taekwondo Warriors with class registration, direct contact, and club information.',
		nav: {
			home: 'Home',
			about: 'About us',
			classes: 'Programs',
			pricing: 'Fees',
			schedule: 'Schedule',
			news: 'News',
			gallery: 'Gallery',
			contact: 'Contact'
		},
		hero: {
			eyebrow: 'Martial arts school',
			titleMain: 'Taekwondo',
			titleAccent: 'Olympic',
			values: 'Discipline. Respect. Improvement.',
			chant: 'We are Warriors!',
			description:
				'We shape people on and off the mat. Discipline, respect, improvement, and passion in every training session.',
			primaryCta: 'Free trial',
			secondaryCta: 'Meet us',
			trialWhatsappMessage:
				"Hi! I'd like to get information about a trial class at Club Taekwondo Warriors.%0A%0AName:%0AAge:%0AProgram of interest:",
			sideWords: ['Agile', 'Strong', 'Precise', 'Unbreakable'],
			imageAlt: 'Olympic taekwondo sparring'
		},
		features: [
			{ title: 'Olympic taekwondo', description: 'Martial art and regulated combat sport.', tone: 'red' },
			{ title: 'Training', description: 'From beginner level to competition.', tone: 'blue' },
			{ title: 'All ages', description: 'Children, teens, and adults.', highlight: 'For all levels.', tone: 'blue' },
			{ title: 'Competition team', description: 'Training for high performance.', tone: 'red' }
		],
		about: {
			kicker: 'About us',
			title: 'We build warriors on and off the mat.',
			description:
				'At Club Taekwondo Warriors we help every student grow through Olympic taekwondo, with a close, technical, and demanding methodology.',
			cta: 'Discover our story',
			imagesAlt: ['Training session with Diana', 'Belt ceremony', 'Technical group practice', 'Group posture practice', 'Coach briefing with students']
		},
		classes: {
			title: 'Programs we work on',
			moreInfo: 'More info',
			items: [
				{
					title: 'Technique and poomsae',
					description: 'Sequences of technical movements performed in an organized way to improve technique, balance, and concentration.',
					audience: 'Precision and control',
					imageUrl: shared.images.poomsae
				},
				{
					title: 'Sparring',
					description: 'A discipline that combines self-improvement, confidence, and fighting spirit, helping our students grow, respect others, and push themselves in every challenge.',
					audience: 'Fighting spirit',
					imageUrl: shared.images.combat
				},
				{
					title: 'Exhibition',
					description:
						'A moment to share, enjoy, and show everything our students have achieved through effort, consistency, and passion.',
					audience: 'Expression and passion',
					imageUrl: shared.images.exhibition
				},
				{
					title: 'Self-defense',
					description: 'Training that helps our students face risky situations with safety, confidence, and the ability to react.',
					audience: 'Real-world safety',
					imageUrl: shared.images.defense
				}
			]
		},
		pricing: {
			title: 'Training fees',
			cardLabel: 'Plan',
			recommended: 'Recommended',
			plans: [
				{
					tone: 'gold',
					name: 'Yellow plan',
					subtitle: 'Getting started',
					price: '25',
					frequency: '/month',
					items: [
						{ icon: 'calendar', text: '1 day per week' },
						{ icon: 'user', text: 'Ideal to get started and discover taekwondo' },
						{ icon: 'target', text: 'Learning basic techniques' },
						{ icon: 'shield', text: 'Development of coordination, discipline, and values' }
					]
				},
				{
					tone: 'blue',
					name: 'Blue elite plan',
					subtitle: 'Progression',
					price: '45',
					frequency: '/month',
					badge: 'Recommended',
					items: [
						{ icon: 'calendar', text: '2 days per week' },
						{ icon: 'growth', text: 'More consistency and technical progress' },
						{ icon: 'cap', text: 'Preparation for belt examinations' },
						{ icon: 'arm', text: 'Physical and sports improvement' }
					]
				},
				{
					tone: 'red',
					name: 'Red elite plan',
					subtitle: 'Competition',
					price: '55',
					frequency: '/month',
					items: [
						{ icon: 'calendar', text: '3 days per week' },
						{ icon: 'trophy', text: 'For kids starting out in competition' },
						{ icon: 'kick', text: 'Technical and tactical refinement' },
						{ icon: 'barbell', text: 'Better fitness and performance' }
					]
				}
			],
			reasonsTitle: 'Why train at Warriors?',
			reasons: [
				{ icon: 'rings', text: 'Olympic taekwondo' },
				{ icon: 'teacher', text: 'Certified coaches' },
				{ icon: 'belt', text: 'Belt examinations' },
				{ icon: 'kick', text: 'Participation in exhibitions' },
				{ icon: 'podium', text: 'Competition team' },
				{ icon: 'group', text: 'Family-friendly environment' }
			]
		},
		schedule: {
			title: 'Weekly schedule',
			headerTime: 'Time',
			days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
			rows: [
				{ time: '17:30 - 18:30', tone: 'gold', classes: ['Warriors Kids', 'Warriors Kids', 'Warriors Kids', 'Warriors Kids'] },
				{ time: '18:30 - 19:30', tone: 'blue', classes: ['Warriors Junior', 'Warriors Junior', 'Warriors Junior', 'Warriors Junior'] },
				{ time: '19:30 - 20:30', tone: 'red', classes: ['Warriors Elite', '', 'Warriors Elite', 'Warriors Elite'] }
			],
			ages: [
				{
					tone: 'gold',
					label: 'Warriors Kids',
					range: 'Ages 3 to 9',
					description: 'For boys and girls starting in taekwondo. Fun, learning, and values.'
				},
				{
					tone: 'blue',
					label: 'Warriors Junior',
					range: 'Ages 10 to 15',
					description: 'For kids and teens who want to keep growing, improving, and pushing themselves every day.'
				},
				{
					tone: 'red',
					label: 'Warriors Elite',
					range: '16+',
					description: 'For those seeking top performance and competition. Commitment, effort, and excellence.'
				}
			],
			values: [
				{ label: 'COURTESY', tone: 'blue', icon: 'handshake' },
				{ label: 'PERSEVERANCE', tone: 'red', icon: 'flag' },
				{ label: 'SELF-CONTROL', tone: 'gold', icon: 'lotus' },
				{ label: 'HUMILITY', tone: 'blue', icon: 'dobok' }
			]
		},
		stats: [
			{ ...shared.stats[0], label: 'Active students' },
			{ ...shared.stats[1], label: 'Medals earned' },
			{ ...shared.stats[2], label: 'Years of experience' },
			{ ...shared.stats[3], label: 'Black belts' }
		],
		news: {
			title: 'News',
			linkLabel: 'View all',
			readMore: 'Read more',
			items: [
				{
					title: "Catalonia children's championship",
					date: '2025-11-02',
					excerpt:
						'All three Warriors who competed won a medal: Daniel Aliaga became champion again, Nara Zald\u00edvar took third place again, and Gerard Moya claimed third in his first competition.',
					imageUrl: '/images/noticia-catalunya-infantil-1.png',
					href: 'https://www.instagram.com/club_taekwondo_warriors/p/DQjfwSsCP1m/'
				},
				{
					title: 'Technical day and belt exam preparation',
					date: '2026-10-18',
					excerpt: 'A special session focused on poomsae, technique, and preparation for upcoming belt exams.',
					imageUrl: shared.images.poomsae
				},
				{
					title: 'Exhibitions and club highlights',
					date: '2026-11-07',
					excerpt: 'We share activities, exhibitions, and day-to-day highlights so families can follow the Warriors journey.',
					imageUrl: shared.images.exhibition
				}
			]
		},
		gallery: {
			title: 'Gallery',
			linkLabel: 'View full gallery',
			items: [
				{ title: 'Warriors Training 1', imageUrl: '/images/sobre-10.jpeg', featured: true },
				{ title: 'Warriors Training 2', imageUrl: '/images/sobre-11.jpeg' },
				{ title: 'Warriors Training 3', imageUrl: '/images/sobre-17.jpeg' },
				{ title: 'Warriors Training 4', imageUrl: '/images/sobre-18.jpeg' },
				{ title: 'Warriors Training 5', imageUrl: '/images/sobre-22.jpeg' },
				{ title: 'Coach Diana', imageUrl: '/images/about-diana.jpeg' },
				{ title: 'Coach Laia', imageUrl: '/images/about-laia.jpeg' }
			]
		},
		cta: {
			title: 'Ready to start<br />your journey?',
			description: 'Discover the club, get to know the atmosphere, and book your first contact session.',
			button: 'Book your spot',
			imageAlt: 'Taekwondo practice',
			imageUrl: shared.images.ctaDiana
		},
		modal: {
			kicker: 'Book your spot',
			title: 'Choose a program',
			description: 'Select the group that fits you best and we will take you to the right registration form.',
			options: [
				{ tone: 'kids', title: 'Warriors Kids', subtitle: 'Ages 3 to 9', url: shared.modalUrls.kids },
				{ tone: 'junior', title: 'Warriors Junior', subtitle: 'Ages 10 to 15', url: shared.modalUrls.junior },
				{ tone: 'elite', title: 'Warriors Elite', subtitle: 'Ages 16+', url: shared.modalUrls.elite }
			]
		},
		footer: {
			description: 'More than a club, a family. Building warriors through respect, discipline, and consistency.',
			contactTitle: 'Contact',
			reviewsTitle: 'Google Reviews',
			reviewsSubtitle: 'What club families are saying',
			reviewsRatingLabel: '5.0 on Google',
			reviewsCountLabel: '55 reviews',
			reviewsButton: 'View Google reviews',
			mapTitle: 'How to get here',
			mapSubtitle: 'Find the club and come meet us',
			hours: 'Mon-Fri: 17:30 - 20:30',
			mapButton: 'Get directions',
			address: 'Calle Moss\u00e8n Jacint Verdaguer 274',
			phone: '644 193 620',
			email: 'clubtaekwondowarriors@gmail.com',
			instagramLabel: '@club_taekwondo_warriors',
			instagramUrl: 'https://www.instagram.com/club_taekwondo_warriors',
			facebookUrl: '#',
			whatsappUrl: 'https://wa.me/34644193620',
			legal: 'All rights reserved.',
			galleryAlts: ['Kids class', 'Olympic sparring', 'Dojo facilities']
		}
	}
};

export function getSiteCopy(locale: Locale): SiteCopy {
	return siteCopy[locale];
}




