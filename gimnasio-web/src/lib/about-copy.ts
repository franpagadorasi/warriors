import type { Locale } from './site-copy';

export interface AboutPageCopy {
	seoTitle: string;
	seoDescription: string;
	hero: {
		eyebrow: string;
		title: string;
		description: string[];
		primaryCta: string;
		secondaryCta: string;
	};
	story: {
		title: string;
		intro: string;
		timeline: Array<{
			year: string;
			title: string;
			text: string;
		}>;
	};
	logo: {
		title: string;
		intro: string;
		points: string[];
	};
	team: {
		title: string;
		intro: string;
		members: Array<{
			name: string;
			role: string;
			image: string;
			summary: string;
			achievementsTitle: string;
			achievements: string[];
			trainingTitle: string;
			training: string[];
			philosophyTitle: string;
			philosophy: string;
		}>;
	};
	clubEssence: {
		title: string;
		missionTitle: string;
		mission: string;
		visionTitle: string;
		vision: string;
		valuesTitle: string;
		values: string[];
		closing: string;
	};
}

export const aboutPaths: Record<Locale, string> = {
	ca: '/sobre-nosaltres',
	es: '/es/sobre-nosotros',
	en: '/en/about-us'
};

export const aboutPageCopy: Record<Locale, AboutPageCopy> = {
	ca: {
		seoTitle: 'Sobre nosaltres | Club Taekwondo Warriors',
		seoDescription: 'Història, equip tècnic, significat del logo i essència del Club Taekwondo Warriors.',
		hero: {
			eyebrow: 'Sobre nosaltres',
			title: 'Molt més que un club',
			description: [
				"Club Taekwondo Warriors neix amb la voluntat d'apropar el taekwondo olímpic a Sant Vicenç dels Horts des d'una mirada propera, exigent i humana.",
				"Som un projecte esportiu i educatiu on cada alumne pot créixer al seu ritme, aprendre valors i sentir-se part d'una família que acompanya dins i fora del tatami."
			],
			primaryCta: 'Reserva la teva plaça',
			secondaryCta: "Contacta amb l'equip"
		},
		story: {
			title: 'La nostra història',
			intro: "Warriors és el resultat d'un camí construït amb constància, reinvenció i molta passió pel taekwondo.",
			timeline: [
				{
					year: '2013',
					title: 'Els inicis',
					text: 'La llavor del projecte va començar a Sant Antoni amb la visió de construir un espai on el taekwondo fos exigència, educació i comunitat.'
				},
				{
					year: '2020',
					title: 'Una pausa obligada',
					text: "La pandèmia va obligar a aturar l'activitat i a repensar el futur del club, però la passió per tornar-hi va continuar intacta."
				},
				{
					year: '2023',
					title: 'La tornada',
					text: "Warriors torna amb força, reprenent els entrenaments i reunint de nou alumnes, famílies i il·lusió."
				},
				{
					year: '2024',
					title: 'Creixement del projecte',
					text: "El club consolida grups infantils i juvenils, amplia l'activitat i reforça l'acompanyament esportiu i humà."
				},
				{
					year: '2025',
					title: 'Consolidació',
					text: 'Els resultats esportius, el vincle amb les famílies i la identitat pròpia de Warriors fan un pas endavant.'
				},
				{
					year: '2026',
					title: 'Seu pròpia',
					text: "S'obre una nova etapa amb espai propi i la mirada posada en continuar fent créixer un club amb ànima."
				}
			]
		},
		logo: {
			title: 'El significat del logo',
			intro: 'Cada part del símbol Warriors té una càrrega personal i esportiva vinculada a la història de Diana i a la identitat del club.',
			points: [
				'Les dues V en groc i vermell formen la W de Warriors i representen també les inicials de Diana Vázquez Vallés.',
				'El cinturó que les uneix simbolitza la unió, la força i els valors que sostenen el projecte.',
				'La composició genera també una M, inicial gravada en el cinturó de Diana amb un significat molt personal.',
				"El cercle de fons recorda a l'escut de Wonder Woman, una referència visual de força i identitat.",
				"Les sis estrelles representen els sis títols de Campiona d'Espanya aconseguits per Diana."
			]
		},
		team: {
			title: 'COACHES',
			intro: "Darrere del club hi ha un equip que coneix el camí des de dins: competició, formació i acompanyament de cada alumne.",
			members: [
				{
					name: 'Diana Vázquez Vallés',
					role: 'Coach',
					image: '/images/about-diana.jpeg',
					summary: "S'inicia en el taekwondo amb només 5 anys i ha desenvolupat una trajectòria de competició i formació d'alt nivell.",
					achievementsTitle: 'Trajectòria destacada',
					achievements: [
						"Campiona d'Espanya i medallista internacional.",
						"Núm. 1 del rànquing europeu l'any 2009.",
						'3a classificada al Campionat del Món Universitari 2014.',
						'Mèrit esportiu de bronze RFET 2023 i de plata RFET 2025.',
						"Reconeixement a la Nit de l'Esport Vicentí 2024.",
						'Actualment coach de la Federació Catalana.'
					],
					trainingTitle: 'Formació i titulacions',
					training: [
						'Cinturó negre 4t DAN.',
						'Tècnica regional i coach internacional.',
						"Mestra d'educació física.",
						'Màster en desenvolupament social i gestió esportiva.',
						'Formació en alt rendiment i col·laboracions amb DAEDO i FUJIMAE.'
					],
					philosophyTitle: 'Filosofia',
					philosophy:
						"Apropar el taekwondo olímpic als alumnes des d'una metodologia exigent, propera i motivadora, on cada esportista trobi el seu lloc i el seu ritme de creixement."
				},
				{
					name: 'Laia Marín',
					role: 'Coach',
					image: '/images/about-laia.jpeg',
					summary:
						"Comença el taekwondo amb 5 anys i creix esportivament al costat de Diana, vivint totes les etapes del projecte Warriors des de dins.",
					achievementsTitle: 'Trajectòria esportiva',
					achievements: [
						'Subcampiona de Catalunya Júnior en combat.',
						'3a de Catalunya Sub-21 en combat.',
						'3a al Campionat de Catalunya de Promoció en poomsae.',
						"Ha acompanyat el projecte en totes les seves etapes i espais d'entrenament."
					],
					trainingTitle: 'Rol dins del club',
					training: [
						'Monitora i mà dreta de Diana.',
						'Referent proper per als grups infantils i juvenils.',
						'Compromesa amb una formació tècnica i humana dels alumnes.'
					],
					philosophyTitle: 'Filosofia',
					philosophy:
						"Entendre el taekwondo com una escola d'esforç, constància i confiança, ajudant cada alumne a sentir-se capaç de fer un pas més cada dia."
				}
			]
		},
		clubEssence: {
			title: 'Essència Warriors',
			missionTitle: 'Missió',
			mission: 'Formar esportistes i persones a través del taekwondo olímpic amb una mirada educativa, tècnica i humana.',
			visionTitle: 'Visió',
			vision: 'Consolidar un club referent a Sant Vicenç dels Horts on el taekwondo sigui sinònim de valors, qualitat i comunitat.',
			valuesTitle: 'Valors',
			values: ['Respecte', 'Perseverança', 'Passió', 'Companyonia', 'Superació', 'Disciplina', 'Família'],
			closing: 'Benvinguts a casa. Benvinguts a Warriors.'
		}
	},
	es: {
		seoTitle: 'Sobre nosotros | Club Taekwondo Warriors',
		seoDescription: 'Historia, equipo técnico, significado del logo y esencia del Club Taekwondo Warriors.',
		hero: {
			eyebrow: 'Sobre nosotros',
			title: 'Mucho más que un club',
			description: [
				'Club Taekwondo Warriors nace con la voluntad de acercar el taekwondo olímpico a Sant Vicenç dels Horts desde una mirada cercana, exigente y humana.',
				'Somos un proyecto deportivo y educativo donde cada alumno puede crecer a su ritmo, aprender valores y sentirse parte de una familia que acompaña dentro y fuera del tatami.'
			],
			primaryCta: 'Reserva tu plaza',
			secondaryCta: 'Contacta con el equipo'
		},
		story: {
			title: 'Nuestra historia',
			intro: 'Warriors es el resultado de un camino construido con constancia, reinvención y mucha pasión por el taekwondo.',
			timeline: [
				{
					year: '2013',
					title: 'Los inicios',
					text: 'La semilla del proyecto comenzó en Sant Antoni con la visión de construir un espacio donde el taekwondo fuese exigencia, educación y comunidad.'
				},
				{
					year: '2020',
					title: 'Una pausa obligada',
					text: 'La pandemia obligó a detener la actividad y a repensar el futuro del club, pero la pasión por volver siguió intacta.'
				},
				{
					year: '2023',
					title: 'La vuelta',
					text: 'Warriors regresa con fuerza, retomando los entrenamientos y reuniendo de nuevo a alumnos, familias e ilusión.'
				},
				{
					year: '2024',
					title: 'Crecimiento del proyecto',
					text: 'El club consolida grupos infantiles y juveniles, amplía la actividad y refuerza el acompañamiento deportivo y humano.'
				},
				{
					year: '2025',
					title: 'Consolidación',
					text: 'Los resultados deportivos, el vínculo con las familias y la identidad propia de Warriors dan un paso adelante.'
				},
				{
					year: '2026',
					title: 'Sede propia',
					text: 'Se abre una nueva etapa con espacio propio y la mirada puesta en seguir haciendo crecer un club con alma.'
				}
			]
		},
		logo: {
			title: 'El significado del logo',
			intro: 'Cada parte del símbolo Warriors tiene una carga personal y deportiva vinculada a la historia de Diana y a la identidad del club.',
			points: [
				'Las dos V en amarillo y rojo forman la W de Warriors y representan también las iniciales de Diana Vázquez Vallés.',
				'El cinturón que las une simboliza la unión, la fuerza y los valores que sostienen el proyecto.',
				'La composición genera también una M, inicial grabada en el cinturón de Diana con un significado muy personal.',
				'El círculo de fondo recuerda al escudo de Wonder Woman, una referencia visual de fuerza e identidad.',
				'Las seis estrellas representan los seis títulos de Campeona de España conseguidos por Diana.'
			]
		},
		team: {
			title: 'COACHES',
			intro: 'Detrás del club hay un equipo que conoce el camino desde dentro: competición, formación y acompañamiento de cada alumno.',
			members: [
				{
					name: 'Diana Vázquez Vallés',
					role: 'Coach',
					image: '/images/about-diana.jpeg',
					summary: 'Se inicia en el taekwondo con solo 5 años y ha desarrollado una trayectoria de competición y formación de alto nivel.',
					achievementsTitle: 'Trayectoria destacada',
					achievements: [
						'Campeona de España y medallista internacional.',
						'Núm. 1 del ranking europeo en 2009.',
						'3.ª clasificada en el Campeonato del Mundo Universitario 2014.',
						'Mérito deportivo de bronce RFET 2023 y de plata RFET 2025.',
						"Reconocimiento en la Nit de l'Esport Vicentí 2024.",
						'Actualmente coach de la Federación Catalana.'
					],
					trainingTitle: 'Formación y titulaciones',
					training: [
						'Cinturón negro 4.º DAN.',
						'Técnica regional y coach internacional.',
						'Maestra de educación física.',
						'Máster en desarrollo social y gestión deportiva.',
						'Formación en alto rendimiento y colaboraciones con DAEDO y FUJIMAE.'
					],
					philosophyTitle: 'Filosofía',
					philosophy:
						'Acercar el taekwondo olímpico a los alumnos desde una metodología exigente, cercana y motivadora, donde cada deportista encuentre su lugar y su ritmo de crecimiento.'
				},
				{
					name: 'Laia Marín',
					role: 'Coach',
					image: '/images/about-laia.jpeg',
					summary: 'Empieza taekwondo con 5 años y crece deportivamente junto a Diana, viviendo todas las etapas del proyecto Warriors desde dentro.',
					achievementsTitle: 'Trayectoria deportiva',
					achievements: [
						'Subcampeona de Cataluña Júnior en combate.',
						'3.ª de Cataluña Sub-21 en combate.',
						'3.ª en el Campeonato de Cataluña de Promoción en poomsae.',
						'Ha acompañado el proyecto en todas sus etapas y espacios de entrenamiento.'
					],
					trainingTitle: 'Rol dentro del club',
					training: [
						'Monitora y mano derecha de Diana.',
						'Referente cercana para los grupos infantiles y juveniles.',
						'Comprometida con una formación técnica y humana de los alumnos.'
					],
					philosophyTitle: 'Filosofía',
					philosophy:
						'Entender el taekwondo como una escuela de esfuerzo, constancia y confianza, ayudando a cada alumno a sentirse capaz de dar un paso más cada día.'
				}
			]
		},
		clubEssence: {
			title: 'Esencia Warriors',
			missionTitle: 'Misión',
			mission: 'Formar deportistas y personas a través del taekwondo olímpico con una mirada educativa, técnica y humana.',
			visionTitle: 'Visión',
			vision: 'Consolidar un club referente en Sant Vicenç dels Horts donde el taekwondo sea sinónimo de valores, calidad y comunidad.',
			valuesTitle: 'Valores',
			values: ['Respeto', 'Perseverancia', 'Pasión', 'Compañerismo', 'Superación', 'Disciplina', 'Familia'],
			closing: 'Bienvenidos a casa. Bienvenidos a Warriors.'
		}
	},
	en: {
		seoTitle: 'About us | Club Taekwondo Warriors',
		seoDescription: 'History, coaching team, logo meaning, and club identity of Club Taekwondo Warriors.',
		hero: {
			eyebrow: 'About us',
			title: 'Much more than a club',
			description: [
				'Club Taekwondo Warriors was created to bring Olympic taekwondo to Sant Vicenç dels Horts with a close, demanding, and human approach.',
				'We are a sporting and educational project where every student can grow at their own pace, learn values, and feel part of a family that supports them on and off the mat.'
			],
			primaryCta: 'Book your spot',
			secondaryCta: 'Contact the team'
		},
		story: {
			title: 'Our story',
			intro: 'Warriors is the result of a path built with consistency, reinvention, and a deep passion for taekwondo.',
			timeline: [
				{ year: '2013', title: 'The beginning', text: 'The project started in Sant Antoni with the vision of creating a space where taekwondo meant discipline, education, and community.' },
				{ year: '2020', title: 'A forced pause', text: 'The pandemic forced the activity to stop and the club future to be rethought, but the desire to return remained untouched.' },
				{ year: '2023', title: 'The comeback', text: 'Warriors came back stronger, restarting training and bringing students, families, and motivation together again.' },
				{ year: '2024', title: 'Project growth', text: 'The club strengthened its kids and youth groups, expanded activity, and reinforced both sporting and personal guidance.' },
				{ year: '2025', title: 'Consolidation', text: 'Sporting results, the family bond, and the club identity all took a clear step forward.' },
				{ year: '2026', title: 'Own venue', text: 'A new chapter begins with our own space and the ambition to keep growing a club with soul.' }
			]
		},
		logo: {
			title: 'The meaning behind the logo',
			intro: "Each part of the Warriors symbol carries a personal and sporting meaning linked to Diana's story and the identity of the club.",
			points: [
				'The two yellow and red V shapes create the Warriors W and also represent the initials of Diana Vázquez Vallés.',
				'The belt that joins them symbolizes unity, strength, and the values that support the project.',
				"The composition also creates an M, an initial engraved on Diana's belt with a very personal meaning.",
				'The background circle is reminiscent of the Wonder Woman shield, a visual reference to strength and identity.',
				'The six stars represent the six Spanish Champion titles won by Diana.'
			]
		},
		team: {
			title: 'COACHES',
			intro: 'Behind the club there is a team that knows the path from the inside: competition, training, and guidance for every student.',
			members: [
				{
					name: 'Diana Vázquez Vallés',
					role: 'Coach',
					image: '/images/about-diana.jpeg',
					summary: 'She started taekwondo at the age of 5 and has developed a high-level career in both competition and training.',
					achievementsTitle: 'Highlights',
					achievements: [
						'Spanish Champion and international medalist.',
						'European ranking No. 1 in 2009.',
						'3rd place at the 2014 World University Championship.',
						'RFET bronze sports merit in 2023 and silver sports merit in 2025.',
						"Recognition at the 2024 Nit de l'Esport Vicentí.",
						'Currently a coach for the Catalan Federation.'
					],
					trainingTitle: 'Training and qualifications',
					training: [
						'4th DAN black belt.',
						'Regional technician and international coach.',
						'Physical education teacher.',
						"Master's degree in social development and sports management.",
						'High-performance training and collaborations with DAEDO and FUJIMAE.'
					],
					philosophyTitle: 'Philosophy',
					philosophy:
						'To bring Olympic taekwondo closer to students through a demanding, supportive, and motivating methodology where every athlete can find their place and pace of growth.'
				},
				{
					name: 'Laia Marín',
					role: 'Coach',
					image: '/images/about-laia.jpeg',
					summary: 'She began taekwondo at age 5 and grew as an athlete alongside Diana, living every stage of the Warriors project from within.',
					achievementsTitle: 'Sporting career',
					achievements: [
						'Catalonia Junior runner-up in sparring.',
						'3rd place in Catalonia Sub-21 sparring.',
						'3rd place in the Catalonia Promotion Championship in poomsae.',
						'She has supported the project through every stage and training space.'
					],
					trainingTitle: 'Role inside the club',
					training: [
						"Instructor and Diana's right hand.",
						'A close role model for kids and youth groups.',
						'Committed to the technical and human development of every student.'
					],
					philosophyTitle: 'Philosophy',
					philosophy:
						'To understand taekwondo as a school of effort, consistency, and confidence, helping each student feel capable of taking one more step every day.'
				}
			]
		},
		clubEssence: {
			title: 'Warriors essence',
			missionTitle: 'Mission',
			mission: 'To develop athletes and people through Olympic taekwondo with an educational, technical, and human approach.',
			visionTitle: 'Vision',
			vision: 'To consolidate a benchmark club in Sant Vicenç dels Horts where taekwondo means values, quality, and community.',
			valuesTitle: 'Values',
			values: ['Respect', 'Perseverance', 'Passion', 'Team spirit', 'Self-improvement', 'Discipline', 'Family'],
			closing: 'Welcome home. Welcome to Warriors.'
		}
	}
};

export const getAboutPageCopy = (locale: Locale): AboutPageCopy => {
	return aboutPageCopy[locale] ?? aboutPageCopy.ca;
};
