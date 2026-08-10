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
	features: Array<{ title: string; description: string; tone: 'red' | 'blue' }>;
	about: {
		kicker: string;
		title: string;
		description: string;
		cta: string;
		imagesAlt: string[];
	};
	classes: {
		title: string;
		button: string;
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
		ages: Array<{ tone: Tone; label: string; range: string }>;
		values: Array<{ label: string; tone: Tone; icon: string }>;
	};
	stats: Array<{ value: string; label: string; tone: 'red' | 'blue' }>;
	news: {
		title: string;
		linkLabel: string;
		readMore: string;
		items: Array<{ title: string; date: string; excerpt: string; imageUrl: string }>;
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
		socialTitle: string;
		socialSubtitle: string;
		hours: string;
		mapButton: string;
		address: string;
		phone: string;
		email: string;
		instagramLabel: string;
		instagramUrl: string;
		facebookUrl: string;
		whatsappUrl: string;
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
		hero: '/images/hero-taekwondo.png',
		dojo: '/images/dojo-interior.png',
		kids: '/images/kids-taekwondo.png',
		exhibition: '/images/modalidad-exhibicion.png',
		combat: '/images/modalidad-combate.png',
		defense: '/images/modalidad-defensa.png',
		poomsae: '/images/modalidad-poomsae.png'
	},
	stats: [
		{ value: '+350', tone: 'red' as const },
		{ value: '+120', tone: 'blue' as const },
		{ value: '+25', tone: 'red' as const },
		{ value: '+15', tone: 'blue' as const }
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
			news: 'Notícies',
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
				"Hola! M'agradaria demanar informació sobre una classe de prova a Club Taekwondo Warriors.%0A%0ANom:%0AEdat:%0AModalitat d'interès:",
			sideWords: ['\u00c0gil', 'Fort', 'Prec\u00eds', 'Inquebrantable'],
			imageAlt: 'Combat de taekwondo ol\u00edmpic'
		},
		features: [
			{ title: 'Taekwondo ol?mpic', description: 'Art marcial i esport de combat reglamentat.', tone: 'red' },
			{ title: 'Formaci?', description: 'Des de la iniciaci? fins a la competici?.', tone: 'blue' },
			{ title: 'Totes les edats', description: 'Nens, joves i adults. Per a tots els nivells.', tone: 'blue' },
			{ title: 'Equip de competici?', description: 'Entrenament per a alt rendiment.', tone: 'red' }
		],
		about: {
			kicker: 'Sobre nosaltres',
			title: 'Formem guerrers dins i fora del tatami.',
			description:
				'Al Club Taekwondo Warriors ajudem a cr\u00e9ixer cada alumne a trav\u00e9s del taekwondo ol\u00edmpic, amb una metodologia propera, t\u00e8cnica i exigent.',
			cta: 'Coneix la nostra hist\u00f2ria',
			imagesAlt: ['Instal\u00b7lacions del club', 'Classe infantil', 'Exhibici\u00f3 de taekwondo', 'Entrenament de combat']
		},
		classes: {
			title: 'Les nostres modalitats',
			button: 'Veure totes les modalitats',
			moreInfo: 'M\u00e9s informaci\u00f3',
			items: [
				{
					title: 'Infantil',
					description: 'Classes din\u00e0miques per a nens i nenes a partir de 4 anys, enfocades en disciplina, confian\u00e7a i diversi\u00f3.',
					audience: 'Des de 4 anys',
					imageUrl: shared.images.combat
				},
				{
					title: 'Juvenil',
					description: 'Entrenament t\u00e8cnic i f\u00edsic per a joves que volen progressar, competir o guanyar seguretat.',
					audience: 'Adolescents',
					imageUrl: shared.images.poomsae
				},
				{
					title: 'Adults',
					description:
						'Sessions adaptades a tots els nivells per posar-se en forma, aprendre t\u00e8cnica i desconnectar mentre millores la coordinaci\u00f3.',
					audience: 'Tots els nivells',
					imageUrl: shared.images.exhibition
				},
				{
					title: 'Defensa personal',
					description: 'Treball pr\u00e0ctic per millorar reflexos, seguretat i control corporal en situacions reals.',
					audience: 'Pr\u00e0ctic',
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
				{ tone: 'gold', label: 'Warriors Kids', range: 'de 3 a 9 anys' },
				{ tone: 'blue', label: 'Warriors Junior', range: 'de 10 a 15 anys' },
				{ tone: 'red', label: 'Warriors Elite', range: 'm\u00e9s de 16 anys' }
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
			title: 'Notícies',
			linkLabel: 'Veure totes',
			readMore: 'Llegir més',
			items: [
				{
					title: 'Matrícula oberta per al nou curs',
					date: '2026-09-01',
					excerpt: 'Obrim inscripcions amb grups infantils, juvenils i adults per començar la temporada amb energia.',
					imageUrl: shared.images.kids
				},
				{
					title: 'Jornada tècnica i preparació de grau',
					date: '2026-10-18',
					excerpt: 'Sessió especial per reforçar poomsae, tècnica i continguts previs als pròxims exàmens de cinturó.',
					imageUrl: shared.images.poomsae
				},
				{
					title: 'Exhibicions i moments del club',
					date: '2026-11-07',
					excerpt: "Compartim activitats, exhibicions i el dia a dia de Warriors perquè les famílies segueixin l'evolució dels alumnes.",
					imageUrl: shared.images.exhibition
				}
			]
		},
		gallery: {
			title: 'Galeria',
			linkLabel: 'Veure galeria completa',
			items: [
				{ title: 'Galeria 1', imageUrl: shared.images.kids, featured: true },
				{ title: 'Galeria 2', imageUrl: shared.images.combat },
				{ title: 'Galeria 3', imageUrl: shared.images.dojo }
			]
		},
		cta: {
			title: 'Preparat per comen\u00e7ar el teu cam\u00ed?',
			description: "Descobreix el club, coneix l'ambient i reserva una primera presa de contacte.",
			button: 'Reserva la teva pla\u00e7a',
			imageAlt: 'Pr\u00e0ctica de taekwondo',
			imageUrl: shared.images.poomsae
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
			socialTitle: 'Segueix-nos a les xarxes',
			socialSubtitle: 'No et perdis el nostre dia a dia',
			hours: 'Dl-V: 17:30 - 20:30',
			mapButton: 'Com arribar',
			address: 'Calle Moss\u00e8n Jacint Verdaguer 274',
			phone: '644 193 620',
			email: 'clubtaekwondowarriors@gmail.com',
			instagramLabel: '@club_taekwondo_warriors',
			instagramUrl: 'https://www.instagram.com/club_taekwondo_warriors',
			facebookUrl: '#',
			whatsappUrl: 'https://wa.me/34644193620',
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
				'Hola, me gustaría pedir información sobre una clase de prueba en Club Taekwondo Warriors.%0A%0ANombre:%0AEdad:%0AModalidad de interés:',
			sideWords: ['\u00c1gil', 'Fuerte', 'Preciso', 'Inquebrantable'],
			imageAlt: 'Combate de taekwondo ol\u00edmpico'
		},
		features: [
			{ title: 'Taekwondo ol?mpico', description: 'Arte marcial y deporte de combate reglado.', tone: 'red' },
			{ title: 'Formaci?n', description: 'Desde iniciaci?n hasta competici?n.', tone: 'blue' },
			{ title: 'Todas las edades', description: 'Ni?os, j?venes y adultos. Para todos los niveles.', tone: 'blue' },
			{ title: 'Equipo de competici?n', description: 'Entrenamiento para alto rendimiento.', tone: 'red' }
		],
		about: {
			kicker: 'Sobre nosotros',
			title: 'Formamos guerreros dentro y fuera del tatami.',
			description:
				'En Club Taekwondo Warriors ayudamos a crecer a cada alumno a trav\u00e9s del taekwondo ol\u00edmpico, con una metodolog\u00eda cercana, t\u00e9cnica y exigente.',
			cta: 'Conoce nuestra historia',
			imagesAlt: ['Instalaciones del club', 'Clase infantil', 'Exhibici\u00f3n de taekwondo', 'Entrenamiento de combate']
		},
		classes: {
			title: 'Nuestras modalidades',
			button: 'Ver todas las modalidades',
			moreInfo: 'M\u00e1s informaci\u00f3n',
			items: [
				{
					title: 'Infantil',
					description: 'Clases din\u00e1micas para ni\u00f1os y ni\u00f1as desde los 4 a\u00f1os, enfocadas en disciplina, confianza y diversi\u00f3n.',
					audience: 'Desde 4 a\u00f1os',
					imageUrl: shared.images.combat
				},
				{
					title: 'Juvenil',
					description: 'Entrenamiento t\u00e9cnico y f\u00edsico para j\u00f3venes que quieren progresar, competir o ganar seguridad.',
					audience: 'Adolescentes',
					imageUrl: shared.images.poomsae
				},
				{
					title: 'Adultos',
					description:
						'Sesiones adaptadas a todos los niveles para ponerse en forma, aprender t\u00e9cnica y desconectar mientras mejoras tu coordinaci\u00f3n.',
					audience: 'Todos los niveles',
					imageUrl: shared.images.exhibition
				},
				{
					title: 'Defensa personal',
					description: 'Trabajo pr\u00e1ctico para mejorar reflejos, seguridad y control corporal en situaciones reales.',
					audience: 'Pr\u00e1ctico',
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
				{ tone: 'gold', label: 'Warriors Kids', range: 'de 3 a 9 a\u00f1os' },
				{ tone: 'blue', label: 'Warriors Junior', range: 'de 10 a 15 a\u00f1os' },
				{ tone: 'red', label: 'Warriors Elite', range: 'm\u00e1s de 16 a\u00f1os' }
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
					title: 'Matr\u00edcula abierta para el nuevo curso',
					date: '2026-09-01',
					excerpt: 'Abrimos inscripciones con grupos infantiles, juveniles y adultos para arrancar la temporada con fuerza.',
					imageUrl: shared.images.kids
				},
				{
					title: 'Jornada t\u00e9cnica y preparaci\u00f3n de grado',
					date: '2026-10-18',
					excerpt: 'Sesión especial para reforzar poomsae, técnica y contenidos previos a los próximos exámenes de cinturón.',
					imageUrl: shared.images.poomsae
				},
				{
					title: 'Exhibiciones y vida del club',
					date: '2026-11-07',
					excerpt: 'Compartimos actividades, exhibiciones y el día a día de Warriors para que las familias sigan la evolución del club.',
					imageUrl: shared.images.exhibition
				}
			]
		},
		gallery: {
			title: 'Galer\u00eda',
			linkLabel: 'Ver galer\u00eda completa',
			items: [
				{ title: 'Galer\u00eda 1', imageUrl: shared.images.kids, featured: true },
				{ title: 'Galer\u00eda 2', imageUrl: shared.images.combat },
				{ title: 'Galer\u00eda 3', imageUrl: shared.images.dojo }
			]
		},
		cta: {
			title: '\u00bfListo para empezar tu camino?',
			description: 'Descubre el club, conoce el ambiente y reserva una primera toma de contacto.',
			button: 'Reserva tu plaza',
			imageAlt: 'Pr\u00e1ctica de taekwondo',
			imageUrl: shared.images.poomsae
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
			socialTitle: 'S\u00edguenos en redes',
			socialSubtitle: 'No te pierdas nuestro d\u00eda a d\u00eda',
			hours: 'L-V: 17:30 - 20:30',
			mapButton: 'C\u00f3mo llegar',
			address: 'Calle Moss\u00e8n Jacint Verdaguer 274',
			phone: '644 193 620',
			email: 'clubtaekwondowarriors@gmail.com',
			instagramLabel: '@club_taekwondo_warriors',
			instagramUrl: 'https://www.instagram.com/club_taekwondo_warriors',
			facebookUrl: '#',
			whatsappUrl: 'https://wa.me/34644193620',
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
			{ title: 'All ages', description: 'Children, teens, and adults. For all levels.', tone: 'blue' },
			{ title: 'Competition team', description: 'Training for high performance.', tone: 'red' }
		],
		about: {
			kicker: 'About us',
			title: 'We build warriors on and off the mat.',
			description:
				'At Club Taekwondo Warriors we help every student grow through Olympic taekwondo, with a close, technical, and demanding methodology.',
			cta: 'Discover our story',
			imagesAlt: ['Club facilities', 'Kids class', 'Taekwondo exhibition', 'Sparring practice']
		},
		classes: {
			title: 'Our programs',
			button: 'View all programs',
			moreInfo: 'More info',
			items: [
				{
					title: 'Kids',
					description: 'Dynamic classes for boys and girls from age 4, focused on discipline, confidence, and fun.',
					audience: 'From age 4',
					imageUrl: shared.images.combat
				},
				{
					title: 'Teens',
					description: 'Technical and physical training for young students who want to progress, compete, or gain confidence.',
					audience: 'Teenagers',
					imageUrl: shared.images.poomsae
				},
				{
					title: 'Adults',
					description:
						'Sessions adapted to all levels to get fit, learn technique, and disconnect while improving coordination.',
					audience: 'All levels',
					imageUrl: shared.images.exhibition
				},
				{
					title: 'Self-defense',
					description: 'Practical work to improve reflexes, safety, and body control in real-life situations.',
					audience: 'Practical',
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
				{ tone: 'gold', label: 'Warriors Kids', range: 'Ages 3 to 9' },
				{ tone: 'blue', label: 'Warriors Junior', range: 'Ages 10 to 15' },
				{ tone: 'red', label: 'Warriors Elite', range: '16+' }
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
					title: 'Registration open for the new season',
					date: '2026-09-01',
					excerpt: 'We are opening registration for kids, teens, and adults to kick off the new season with energy.',
					imageUrl: shared.images.kids
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
				{ title: 'Gallery 1', imageUrl: shared.images.kids, featured: true },
				{ title: 'Gallery 2', imageUrl: shared.images.combat },
				{ title: 'Gallery 3', imageUrl: shared.images.dojo }
			]
		},
		cta: {
			title: 'Ready to start your journey?',
			description: 'Discover the club, get to know the atmosphere, and book your first contact session.',
			button: 'Book your spot',
			imageAlt: 'Taekwondo practice',
			imageUrl: shared.images.poomsae
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
			socialTitle: 'Follow us',
			socialSubtitle: 'Stay up to date with our daily life',
			hours: 'Mon-Fri: 17:30 - 20:30',
			mapButton: 'Get directions',
			address: 'Calle Moss\u00e8n Jacint Verdaguer 274',
			phone: '644 193 620',
			email: 'clubtaekwondowarriors@gmail.com',
			instagramLabel: '@club_taekwondo_warriors',
			instagramUrl: 'https://www.instagram.com/club_taekwondo_warriors',
			facebookUrl: '#',
			whatsappUrl: 'https://wa.me/34644193620',
			galleryAlts: ['Kids class', 'Olympic sparring', 'Dojo facilities']
		}
	}
};

export function getSiteCopy(locale: Locale): SiteCopy {
	return siteCopy[locale];
}
