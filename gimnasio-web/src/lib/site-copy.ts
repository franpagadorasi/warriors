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
		items: Array<{ title: string; imageUrl: string; featured?: boolean; isPortrait?: boolean }>;
	};
	conversion: {
		headerButton: string;
		panelTitle: string;
		panelDescription: string;
		reserveLabel: string;
		reserveNote: string;
		whatsappLabel: string;
		whatsappNote: string;
		footerTitle: string;
		footerDescription: string;
		footerReserveLabel: string;
		footerWhatsappLabel: string;
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
		options: Array<{ tone: 'kids' | 'junior' | 'elite' | 'defense'; title: string; subtitle: string; url: string; imageUrl: string }>;
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
		elite: 'https://forms.gle/tRghWETwyQiUTExY6',
		defense: 'https://docs.google.com/forms/d/e/1FAIpQLScZjc1icDBDa9QSMtW_7f6s3i0I1fFo-9qnnjFlgKtIr1tWjA/viewform?usp=publish-editor4'
	},
	images: {
		hero: '/images/hero-taekwondo.jpeg',
		dojo: '/images/optimized/dojo-interior.jpg',
		kids: '/images/optimized/kids-taekwondo.jpg',
		exhibition: '/images/optimized/modalidad-exhibicion.jpg',
		combat: '/images/optimized/modalidad-combate.jpg',
		defense: '/images/optimized/modalidad-defensa.jpg',
		poomsae: '/images/optimized/modalidad-poomsae.jpg',
		ctaDiana: '/images/optimized/cta-diana-kick-right.jpg'
	},
	stats: [
		{ value: '+89', tone: 'red' as const },
		{ value: '+108', tone: 'blue' as const },
		{ value: '+20', tone: 'red' as const },
		{ value: '+5', tone: 'blue' as const }
	]
};

const galleryImageFiles = [
	'1.png',
	'1_.png',
	'2.jpeg',
	'2.png',
	'3.jpeg',
	'3.png',
	'4.jpeg',
	'4.png',
	'5.jpeg',
	'5.png',
	'6.jpeg',
	'7.jpeg',
	'8.jpeg',
	'9.jpeg',
	'10.jpeg',
	'11.jpeg',
	'12.jpeg',
	'13.jpeg',
	'14.jpeg',
	'15.jpeg',
	'16.jpeg',
	'17.jpeg',
	'18.jpeg',
	'20.jpeg',
	'21.jpeg',
	'22.jpeg'
] as const;

const galleryDescriptions = {
	ca: [
		'Diana acompanyant una alumna en competició',
		'Façana del Club Taekwondo Warriors',
		'Preparació abans d’un combat de taekwondo',
		'Alumna de Warriors preparada per competir',
		'Acompanyament d’una alumna abans d’entrar al tatami',
		'Coach donant indicacions a peu de pista',
		'Espai interior del dojo Warriors',
		'Diana orientant una alumna durant la competició',
		'Entrenament tècnic amb treball de precisió',
		'Diana ajustant el peto durant una exhibició',
		'Sala principal del dojo amb tatami blau',
		'Pràctica tècnica en grup durant una exhibició',
		'Classe infantil treballant cops i coordinació',
		'Explicació dels entrenadors abans d’una activitat',
		'Canvi de cinturó durant una jornada del club',
		'Entrenament dirigit amb els alumnes al tatami',
		'Foto de grup de famílies, alumnes i equip',
		'Equip Warriors posant després de l’activitat',
		'Exhibició de taekwondo davant del públic',
		'Presentació d’un grup abans d’una demostració',
		'Famílies seguint una exhibició del club',
		'Alumnes practicant una tècnica en línia',
		'Entrenament de posicions amb els alumnes',
		'Acrobàcia durant una exhibició de taekwondo',
		'Col·locació del cinturó a una alumna',
		'Entrenadora parlant amb un grup d’alumnes'
	],
	es: [
		'Diana acompañando a una alumna en competición',
		'Fachada del Club Taekwondo Warriors',
		'Preparación antes de un combate de taekwondo',
		'Alumna de Warriors preparada para competir',
		'Acompañamiento de una alumna antes de entrar al tatami',
		'Coach dando indicaciones a pie de pista',
		'Espacio interior del dojo Warriors',
		'Diana orientando a una alumna durante la competición',
		'Entrenamiento técnico con trabajo de precisión',
		'Diana ajustando el peto durante una exhibición',
		'Sala principal del dojo con tatami azul',
		'Práctica técnica en grupo durante una exhibición',
		'Clase infantil trabajando golpes y coordinación',
		'Explicación de los entrenadores antes de una actividad',
		'Cambio de cinturón durante una jornada del club',
		'Entrenamiento dirigido con los alumnos en el tatami',
		'Foto de grupo de familias, alumnos y equipo',
		'Equipo Warriors posando después de la actividad',
		'Exhibición de taekwondo ante el público',
		'Presentación de un grupo antes de una demostración',
		'Familias siguiendo una exhibición del club',
		'Alumnos practicando una técnica en línea',
		'Entrenamiento de posiciones con los alumnos',
		'Acrobacia durante una exhibición de taekwondo',
		'Colocación del cinturón a una alumna',
		'Entrenadora hablando con un grupo de alumnos'
	],
	en: [
		'Diana supporting a student during competition',
		'Front entrance of Club Taekwondo Warriors',
		'Preparation before a taekwondo match',
		'Warriors student ready to compete',
		'Supporting a student before entering the mat',
		'Coach giving instructions by the ring',
		'Interior space of the Warriors dojo',
		'Diana guiding a student during competition',
		'Technical training focused on precision',
		'Diana adjusting protective gear during an exhibition',
		'Main dojo room with blue tatami',
		'Group technical practice during an exhibition',
		'Kids class working on kicks and coordination',
		'Coaches explaining an activity before training',
		'Belt ceremony during a club event',
		'Guided training session with students on the mat',
		'Group photo of families, students, and staff',
		'Warriors team posing after the activity',
		'Taekwondo exhibition in front of the audience',
		'Group presentation before a demonstration',
		'Families watching a club exhibition',
		'Students practicing a technique in line',
		'Stance training with students',
		'Acrobatic move during a taekwondo exhibition',
		'Helping a student tie a belt',
		'Coach speaking to a group of students'
	]
} as const;

const portraitGalleryImages = new Set([
	'2.jpeg',
	'3.jpeg',
	'3.png',
	'4.jpeg',
	'5.png',
	'6.jpeg',
	'10.jpeg'
]);

function createGalleryItems(descriptions: readonly string[]) {
	return galleryImageFiles.map((fileName, index) => ({
		title: descriptions[index] ?? `Warriors Gallery ${index + 1}`,
		imageUrl: `/images/galeria/${fileName}`,
		featured: index === 0,
		isPortrait: portraitGalleryImages.has(fileName)
	}));
}

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
			primaryCta: 'Prova gratuïta',
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
						{ icon: 'shield', text: 'Desenvolupament de la coordinaci\u00f3, la disciplina i els valors' }
					]
				},
				{
					tone: 'blue',
					name: 'Quota blava elit',
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
					name: 'Quota vermella elit',
					subtitle: 'Competici\u00f3',
					price: '55',
					frequency: '/mes',
					items: [
						{ icon: 'calendar', text: '3 dies per setmana' },
						{ icon: 'trophy', text: "Per a nens i joves que s'inicien en la competici\u00f3" },
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
				{ time: '19:30 - 20:30', tone: 'red', classes: ['Warriors Elite', 'Warriors Elite', 'Warriors Elite', 'Warriors Elite'] }
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
					range: 'A partir de 16 anys',
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
					imageUrl: '/images/optimized/noticia-catalunya-infantil-1.jpg',
					href: 'https://www.instagram.com/club_taekwondo_warriors/p/DQjfwSsCP1m/'
				},
				{
					title: 'Tres exhibicions en dos dies',
					date: '2026-05-29',
					excerpt:
						'Cap de setmana intens amb tres exhibicions en qu\u00e8 els nostres alumnes van demostrar disciplina, respecte, esfor\u00e7 i treball en equip.',
					imageUrl: '/images/optimized/cabecera.jpg',
					href: 'https://www.instagram.com/p/DY72Cf8CKwE/?igsi=MTBzMmtlejlvN3h5bw%3D%3D'
				},
				{
					title: 'Medalla de plata al m\u00e8rit esportiu',
					date: '2026-07-17',
					excerpt:
						'Un reconeixement molt especial a la traject\u00f2ria de Diana V\u00e1zquez Vall\u00e9s i a tots els anys d\'entrenament, competici\u00f3 i comprom\u00eds amb el taekwondo.',
					imageUrl: '/images/optimized/noticia-medalla-plata.jpg',
					href: 'https://www.instagram.com/p/Da42UXGDnXasTaGQBIKyEI_4Zf1tyQxs1deI-w0/?igsi=cTZ5cWJ0amYxZnRu'
				}
			]
		},
		gallery: {
			title: 'Galeria',
			linkLabel: 'Veure galeria completa',
			items: createGalleryItems(galleryDescriptions.ca)
		},
		conversion: {
			headerButton: 'Reserva plaça',
			panelTitle: 'Vols provar o saber quin grup és per a tu?',
			panelDescription: "T'ajudem a triar la modalitat, resolem els teus dubtes i et facilitem una primera presa de contacte sense compromís.",
			reserveLabel: 'Reserva la teva plaça',
			reserveNote: 'Tria modalitat i omple el formulari',
			whatsappLabel: 'Parla per WhatsApp',
			whatsappNote: "Resposta directa de l'equip",
			footerTitle: 'Vols parlar amb nosaltres?',
			footerDescription: "Pots reservar plaça o escriure'ns directament per WhatsApp.",
			footerReserveLabel: 'Reserva plaça',
			footerWhatsappLabel: 'WhatsApp'
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
				{ tone: 'kids', title: 'Warriors Kids', subtitle: 'De 3 a 9 anys', url: shared.modalUrls.kids, imageUrl: '/images/warriors-kids.png' },
				{ tone: 'junior', title: 'Warriors Junior', subtitle: 'De 10 a 15 anys', url: shared.modalUrls.junior, imageUrl: '/images/warriors-junior.png' },
				{ tone: 'elite', title: 'Warriors Elite', subtitle: 'A partir de 16 anys', url: shared.modalUrls.elite, imageUrl: '/images/warriors-elite.png' },
				{ tone: 'defense', title: 'Warriors Defensa Personal', subtitle: 'Defensa personal', url: shared.modalUrls.defense, imageUrl: '/images/defensa_personal.jpeg' }
			]
		},
		footer: {
			description: 'M\u00e9s que un club, una fam\u00edlia. Formant guerrers des del respecte, la disciplina i la const\u00e0ncia.',
			contactTitle: 'Contacte',
			reviewsTitle: 'Ressenyes de Google',
			reviewsSubtitle: "El que diuen les fam\u00edlies del club",
			reviewsRatingLabel: '5,0 a Google',
			reviewsCountLabel: '57 ressenyes',
			reviewsButton: 'Veure ressenyes a Google',
			mapTitle: 'Com arribar',
			mapSubtitle: 'Troba el club i vine a con\u00e8ixer-nos',
			hours: 'Dl. - Dv.: 17.30 - 20.30 h',
			mapButton: 'Com arribar',
			address: 'Carrer Moss\u00e8n Jacint Verdaguer 274',
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
			chant: 'Somos Warriors.',
			description:
				'Formamos personas dentro y fuera del tatami. Trabajamos la disciplina, el respeto y la superaci\u00f3n en cada entrenamiento.',
			primaryCta: 'Prueba gratis',
			secondaryCta: 'Con\u00f3cenos',
			trialWhatsappMessage:
				'Hola, me gustar\u00eda pedir informaci\u00f3n sobre una clase de prueba en Club Taekwondo Warriors.%0A%0ANombre:%0AEdad:%0AModalidad de inter\u00e9s:',
			sideWords: ['\u00c1gil', 'Fuerte', 'Preciso', 'Inquebrantable'],
			imageAlt: 'Combate de taekwondo ol\u00edmpico'
		},
		features: [
			{ title: 'Taekwondo ol\u00edmpico', description: 'Arte marcial y deporte de combate que combina t\u00e9cnica, disciplina y superaci\u00f3n.', tone: 'red' },
			{ title: 'Formaci\u00f3n', description: 'Desde la iniciaci\u00f3n hasta la competici\u00f3n.', tone: 'blue' },
			{ title: 'Todas las edades', description: 'Ni\u00f1os, j\u00f3venes y adultos.', highlight: 'Para todos los niveles.', tone: 'blue' },
			{ title: 'Equipo de competici\u00f3n', description: 'Preparaci\u00f3n orientada al alto rendimiento y la competici\u00f3n.', tone: 'red' }
		],
		about: {
			kicker: 'Sobre nosotros',
			title: 'Formamos guerreros dentro y fuera del tatami.',
			description:
				'En Club Taekwondo Warriors acompa\u00f1amos a cada alumno en su crecimiento a trav\u00e9s del taekwondo ol\u00edmpico, con una metodolog\u00eda cercana, t\u00e9cnica y exigente.',
			cta: 'Conoce nuestra historia',
			imagesAlt: ['Entrenamiento con Diana', 'Cambio de cintur\u00f3n', 'Trabajo t\u00e9cnico del grupo', 'Trabajo postural en grupo', 'Explicaci\u00f3n con los alumnos']
		},
		classes: {
			title: 'Modalidades que trabajamos',
			moreInfo: 'M\u00e1s informaci\u00f3n',
			items: [
				{
					title: 'T\u00e9cnica y poomsae',
					description: 'Secuencias de movimientos t\u00e9cnicos que trabajamos de forma precisa y ordenada para mejorar la t\u00e9cnica, el equilibrio, la coordinaci\u00f3n y la concentraci\u00f3n.',
					audience: 'Precisi\u00f3n y control',
					imageUrl: shared.images.poomsae
				},
				{
					title: 'Combate',
					description: 'Una disciplina que combina t\u00e9cnica, superaci\u00f3n, confianza y esp\u00edritu de lucha, ayudando a nuestros alumnos a crecer, respetar y superarse en cada reto.',
					audience: 'Esp\u00edritu de lucha',
					imageUrl: shared.images.combat
				},
				{
					title: 'Exhibici\u00f3n',
					description:
						'Una oportunidad para compartir, disfrutar y demostrar todo lo aprendido con esfuerzo, constancia y pasi\u00f3n.',
					audience: 'Expresi\u00f3n y pasi\u00f3n',
					imageUrl: shared.images.exhibition
				},
				{
					title: 'Defensa personal',
					description: 'Aprendizaje pr\u00e1ctico para afrontar situaciones de riesgo con mayor seguridad, confianza y capacidad de reacci\u00f3n.',
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
						{ icon: 'user', text: 'Ideal para descubrir el taekwondo y dar los primeros pasos.' },
						{ icon: 'target', text: 'Aprendizaje de las t\u00e9cnicas b\u00e1sicas.' },
						{ icon: 'shield', text: 'Desarrollo de la coordinaci\u00f3n, la disciplina y los valores.' }
					]
				},
				{
					tone: 'blue',
					name: 'Cuota azul élite',
					subtitle: 'Progresi\u00f3n',
					price: '45',
					frequency: '/mes',
					badge: 'Recomendada',
					items: [
						{ icon: 'calendar', text: '2 d\u00edas por semana' },
						{ icon: 'growth', text: 'Mayor continuidad y progresi\u00f3n t\u00e9cnica.' },
						{ icon: 'cap', text: 'Preparaci\u00f3n para ex\u00e1menes de grado' },
						{ icon: 'arm', text: 'Mejora de la condici\u00f3n f\u00edsica y del rendimiento deportivo.' }
					]
				},
				{
					tone: 'red',
					name: 'Cuota roja élite',
					subtitle: 'Competici\u00f3n',
					price: '55',
					frequency: '/mes',
					items: [
						{ icon: 'calendar', text: '3 d\u00edas por semana' },
						{ icon: 'trophy', text: 'Para alumnos que quieren dar el paso hacia la competici\u00f3n.' },
						{ icon: 'kick', text: 'Perfeccionamiento t\u00e9cnico y t\u00e1ctico' },
						{ icon: 'barbell', text: 'Mejora de la condici\u00f3n f\u00edsica y preparaci\u00f3n para la competici\u00f3n.' }
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
				{ time: '17:30-18:30', tone: 'gold', classes: ['Warriors Kids', 'Warriors Kids', 'Warriors Kids', 'Warriors Kids'] },
				{ time: '18:30-19:30', tone: 'blue', classes: ['Warriors Junior', 'Warriors Junior', 'Warriors Junior', 'Warriors Junior'] },
				{ time: '19:30-20:30', tone: 'red', classes: ['Warriors Elite', 'Warriors Elite', 'Warriors Elite', 'Warriors Elite'] }
			],
			ages: [
				{
					tone: 'gold',
					label: 'Warriors Kids',
					range: 'De 3 a 9 a\u00f1os',
					description: 'Para ni\u00f1os y ni\u00f1as que se inician en el taekwondo. Diversi\u00f3n, aprendizaje y valores.'
				},
				{
					tone: 'blue',
					label: 'Warriors Junior',
					range: 'De 10 a 15 a\u00f1os',
					description: 'Para ni\u00f1os y j\u00f3venes que quieren seguir creciendo, mejorar y superarse cada d\u00eda.'
				},
				{
					tone: 'red',
					label: 'Warriors Elite',
					range: 'M\u00e1s de 16 a\u00f1os',
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
			{ ...shared.stats[0], label: 'alumnos activos' },
			{ ...shared.stats[1], label: 'medallas obtenidas' },
			{ ...shared.stats[2], label: 'a\u00f1os de experiencia' },
			{ ...shared.stats[3], label: 'cinturones negros' }
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
						'Los tres Warriors que compitieron subieron al podio: Daniel Aliaga volvi\u00f3 a proclamarse campe\u00f3n, Nara Zald\u00edvar repiti\u00f3 el tercer puesto y Gerard Moya consigui\u00f3 su primera medalla en competici\u00f3n.',
					imageUrl: '/images/optimized/noticia-catalunya-infantil-1.jpg',
					href: 'https://www.instagram.com/club_taekwondo_warriors/p/DQjfwSsCP1m/'
				},
				{
					title: 'Tres exhibiciones en dos d\u00edas',
					date: '2026-05-29',
					excerpt:
						'Un fin de semana intenso con tres exhibiciones en las que nuestros alumnos demostraron todo lo que representan los valores Warriors: disciplina, respeto, esfuerzo y trabajo en equipo.',
					imageUrl: '/images/optimized/cabecera.jpg',
					href: 'https://www.instagram.com/p/DY72Cf8CKwE/?igsi=MTBzMmtlejlvN3h5bw%3D%3D'
				},
				{
					title: 'Medalla de plata al m\u00e9rito deportivo',
					date: '2026-07-17',
					excerpt:
						'Un reconocimiento muy especial a la trayectoria de Diana V\u00e1zquez Vall\u00e9s y a a\u00f1os de entrenamiento, competici\u00f3n y compromiso con el taekwondo.',
					imageUrl: '/images/optimized/noticia-medalla-plata.jpg',
					href: 'https://www.instagram.com/p/Da42UXGDnXasTaGQBIKyEI_4Zf1tyQxs1deI-w0/?igsi=cTZ5cWJ0amYxZnRu'
				}
			]
		},
		gallery: {
			title: 'Galer\u00eda',
			linkLabel: 'Ver galer\u00eda completa',
			items: createGalleryItems(galleryDescriptions.es)
		},
		conversion: {
			headerButton: 'Reserva plaza',
			panelTitle: '¿Quieres probar o encontrar el grupo que mejor encaja contigo?',
			panelDescription: 'Te ayudamos a encontrar el grupo que mejor encaja contigo, resolvemos tus dudas y te acompa\u00f1amos en tu primera toma de contacto con el club.',
			reserveLabel: 'Reserva tu plaza',
			reserveNote: 'Elige tu grupo y reserva tu plaza.',
			whatsappLabel: 'Habla por WhatsApp',
			whatsappNote: 'Respuesta directa del equipo',
			footerTitle: '¿Prefieres hablar con nosotros?',
			footerDescription: 'Puedes reservar tu plaza o escribirnos directamente por WhatsApp.',
			footerReserveLabel: 'Reserva plaza',
			footerWhatsappLabel: 'WhatsApp'
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
				{ tone: 'kids', title: 'Warriors Kids', subtitle: 'De 3 a 9 a\u00f1os', url: shared.modalUrls.kids, imageUrl: '/images/warriors-kids.png' },
				{ tone: 'junior', title: 'Warriors Junior', subtitle: 'De 10 a 15 a\u00f1os', url: shared.modalUrls.junior, imageUrl: '/images/warriors-junior.png' },
				{ tone: 'elite', title: 'Warriors Elite', subtitle: 'A partir de 16 a\u00f1os', url: shared.modalUrls.elite, imageUrl: '/images/warriors-elite.png' },
				{ tone: 'defense', title: 'Warriors Defensa Personal', subtitle: 'Defensa personal', url: shared.modalUrls.defense, imageUrl: '/images/defensa_personal.jpeg' }
			]
		},
		footer: {
			description: 'M\u00e1s que un club, una familia. Formamos guerreros desde el respeto, la disciplina y la constancia.',
			contactTitle: 'Contacto',
			reviewsTitle: 'Rese\u00f1as de Google',
			reviewsSubtitle: 'Lo que dicen las familias del club',
			reviewsRatingLabel: '5,0 en Google',
			reviewsCountLabel: '57 rese\u00f1as',
			reviewsButton: 'Ver rese\u00f1as en Google',
			mapTitle: 'C\u00f3mo llegar',
			mapSubtitle: 'Encuentra el club y ven a conocernos',
			hours: 'De lunes a jueves, de 17:30 a 20:30 h',
			mapButton: 'C\u00f3mo llegar',
			address: 'Carrer Moss\u00e8n Jacint Verdaguer 274',
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
			secondaryCta: 'Get to know us',
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
			title: 'Programs we offer',
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
					description: 'Training that helps our students handle risky situations safely, with confidence and the ability to react.',
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
				{ time: '19:30 - 20:30', tone: 'red', classes: ['Warriors Elite', 'Warriors Elite', 'Warriors Elite', 'Warriors Elite'] }
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
					imageUrl: '/images/optimized/noticia-catalunya-infantil-1.jpg',
					href: 'https://www.instagram.com/club_taekwondo_warriors/p/DQjfwSsCP1m/'
				},
				{
					title: 'Three exhibitions in two days',
					date: '2026-05-29',
					excerpt:
						'An intense weekend with three exhibitions where our students showed discipline, respect, effort, and teamwork.',
					imageUrl: '/images/optimized/cabecera.jpg',
					href: 'https://www.instagram.com/p/DY72Cf8CKwE/?igsi=MTBzMmtlejlvN3h5bw%3D%3D'
				},
				{
					title: 'Silver sports merit award',
					date: '2026-07-17',
					excerpt:
						'A very special recognition of Diana V\u00e1zquez Vall\u00e9s\'s career and of all the years of training, competition, and commitment to taekwondo.',
					imageUrl: '/images/optimized/noticia-medalla-plata.jpg',
					href: 'https://www.instagram.com/p/Da42UXGDnXasTaGQBIKyEI_4Zf1tyQxs1deI-w0/?igsi=cTZ5cWJ0amYxZnRu'
				}
			]
		},
		gallery: {
			title: 'Gallery',
			linkLabel: 'View full gallery',
			items: createGalleryItems(galleryDescriptions.en)
		},
		conversion: {
			headerButton: 'Book now',
			panelTitle: 'Want to try a class or find the right group for you?',
			panelDescription: 'We help you choose the right program, answer your questions, and book your first contact session with no pressure.',
			reserveLabel: 'Book your spot',
			reserveNote: 'Choose your program and fill in the form',
			whatsappLabel: 'Chat on WhatsApp',
			whatsappNote: 'Direct reply from the team',
			footerTitle: 'Would you like to talk to us first?',
			footerDescription: 'You can book your spot or message us directly on WhatsApp.',
			footerReserveLabel: 'Book now',
			footerWhatsappLabel: 'WhatsApp'
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
				{ tone: 'kids', title: 'Warriors Kids', subtitle: 'Ages 3 to 9', url: shared.modalUrls.kids, imageUrl: '/images/warriors-kids.png' },
				{ tone: 'junior', title: 'Warriors Junior', subtitle: 'Ages 10 to 15', url: shared.modalUrls.junior, imageUrl: '/images/warriors-junior.png' },
				{ tone: 'elite', title: 'Warriors Elite', subtitle: 'Ages 16+', url: shared.modalUrls.elite, imageUrl: '/images/warriors-elite.png' },
				{ tone: 'defense', title: 'Warriors Self-Defense', subtitle: 'Self-defense', url: shared.modalUrls.defense, imageUrl: '/images/defensa_personal.jpeg' }
			]
		},
		footer: {
			description: 'More than a club, a family. Building warriors through respect, discipline, and consistency.',
			contactTitle: 'Contact',
			reviewsTitle: 'Google Reviews',
			reviewsSubtitle: 'What club families are saying',
			reviewsRatingLabel: '5.0 on Google',
			reviewsCountLabel: '57 reviews',
			reviewsButton: 'View Google reviews',
			mapTitle: 'How to get here',
			mapSubtitle: 'Find the club and come meet us',
			hours: 'Mon-Fri: 17:30 - 20:30',
			mapButton: 'Get directions',
			address: 'Carrer Moss\u00e8n Jacint Verdaguer 274',
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




