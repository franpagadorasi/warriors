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
		seoDescription:
			"Història, equip tècnic, significat del logo i essència del Club Taekwondo Warriors.",
		hero: {
			eyebrow: 'Sobre nosaltres',
			title: 'Molt més que un club',
			description: [
				'Club Taekwondo Warriors neix amb la voluntat d’apropar el taekwondo olímpic a Sant Vicenç dels Horts des d’una mirada propera, exigent i humana.',
				'Som un projecte esportiu i educatiu on cada alumne pot créixer al seu ritme, aprendre valors i sentir-se part d’una família que acompanya dins i fora del tatami.'
			],
			primaryCta: 'Reserva la teva plaça',
			secondaryCta: "Contacta amb l'equip"
		},
		story: {
			title: 'La nostra història',
			intro:
				'Warriors és el resultat d’un camí construït amb constància, reinvenció i molta passió pel taekwondo.',
			timeline: [
				{
					year: '2013',
					title: 'Els inicis',
					text: "El projecte comença a l'Escola Sant Antoni de Sant Vicenç dels Horts, amb les primeres classes i un grup petit d'alumnes."
				},
				{
					year: '2020',
					title: 'Una pausa obligada',
					text: "La pandèmia obliga a aturar les classes i el club passa més d'un any sense activitat presencial."
				},
				{
					year: '2023',
					title: 'La tornada',
					text: "Al setembre del 2023 l'activitat es reprèn a l'Institut Gabriela Mistral, recuperant la il·lusió i el treball de base."
				},
				{
					year: '2024',
					title: 'Creixement del projecte',
					text: 'El club amplia activitat amb sessions a l’Escola Sant Antoni i al Centre Cívic Virgínia Amposta.'
				},
				{
					year: '2025',
					title: 'Consolidació',
					text: 'Warriors continua al Centre Cívic Virgínia Amposta i suma un nou espai propi de treball a Nire Events.'
				},
				{
					year: '2026',
					title: 'Seu pròpia',
					text: 'El club fa un pas endavant i obre la seva pròpia seu, convertint el projecte en una casa definitiva per a la comunitat Warriors.'
				}
			]
		},
		logo: {
			title: 'El significat del logo',
			intro:
				'Cada part del símbol Warriors té una càrrega personal i esportiva vinculada a la història de Diana i a la identitat del club.',
			points: [
				'Les dues V en groc i vermell formen la W de Warriors i representen també les inicials de Diana Vázquez Vallés.',
				'El cinturó que les uneix simbolitza la unió, la força i els valors que sostenen el projecte.',
				'La composició genera també una M, inicial gravada al cinturó de Diana amb un significat molt personal.',
				'El cercle de fons recorda l’escut de Wonder Woman, una referència visual de força i identitat.',
				'Les sis estrelles representen els sis títols de Campiona d’Espanya aconseguits per Diana.'
			]
		},
		team: {
			title: 'L’equip tècnic',
			intro:
				'Darrere del club hi ha un equip que coneix el camí des de dins: competició, formació i acompanyament de cada alumne.',
			members: [
				{
					name: 'Diana Vázquez Vallés',
					role: 'Instructora i coach de Taekwondo Olímpic',
					image: '/images/about-diana.jpeg',
					summary:
						'Va iniciar-se en el taekwondo amb només 5 anys i ha desenvolupat una trajectòria de competició i formació d’alt nivell.',
					achievementsTitle: 'Trajectòria destacada',
					achievements: [
						'Campiona d’Espanya i medallista internacional.',
						'Núm. 1 del rànquing europeu l’any 2009.',
						'3a classificada al Campionat del Món Universitari 2014.',
						'Mèrit esportiu de bronze RFET 2023 i de plata RFET 2025.',
						'Reconeixement a la Nit de l’Esport Vicentí 2024.',
						'Actualment coach de la Federació Catalana.'
					],
					trainingTitle: 'Formació i titulacions',
					training: [
						'Cinturó negre 4t DAN.',
						'Tècnica regional i coach internacional.',
						'Mestra d’educació física.',
						'Màster en desenvolupament social i gestió esportiva.',
						'Formació en alt rendiment i col·laboracions amb DAEDO i FUJIMAE.'
					],
					philosophyTitle: 'Filosofia',
					philosophy:
						'Vol acostar el taekwondo olímpic a Sant Vicenç dels Horts i formar persones a través del respecte, la disciplina i la superació.'
				},
				{
					name: 'Laia Marín',
					role: 'Monitora de Taekwondo Olímpic',
					image: '/images/about-laia.jpeg',
					summary:
						'Es va iniciar als 5 anys amb Diana a l’Escola Sant Antoni i ha crescut dins del projecte fins a convertir-se en una peça clau del club.',
					achievementsTitle: 'Trajectòria esportiva',
					achievements: [
						'Subcampiona de Catalunya Júnior en combat.',
						'3a de Catalunya Sub-21 en combat.',
						'3a al Campionat de Catalunya de Promoció en poomsae.',
						'Ha acompanyat el projecte en totes les seves etapes i espais d’entrenament.'
					],
					trainingTitle: 'Rol dins del club',
					training: [
						'Monitora i mà dreta de Diana.',
						'Referent proper per als grups infantils i juvenils.',
						'Compromesa amb una formació tècnica i humana dels alumnes.'
					],
					philosophyTitle: 'Filosofia',
					philosophy:
						'Entén el taekwondo com una escola d’esforç, constància i confiança, i gaudeix ajudant els més petits a créixer.'
				}
			]
		},
		clubEssence: {
			title: 'Essència Warriors',
			missionTitle: 'Missió',
			mission:
				'Apropar el taekwondo olímpic a Sant Vicenç dels Horts i formar persones a través dels valors de l’esport.',
			visionTitle: 'Visió',
			vision:
				'Ser un club de referència en taekwondo olímpic i una comunitat on qualsevol persona pugui desenvolupar-se independentment del nivell, l’edat o l’experiència.',
			valuesTitle: 'Valors',
			values: ['Respecte', 'Perseverança', 'Passió', 'Companyonia', 'Superació', 'Disciplina', 'Família'],
			closing: 'Benvinguts a casa. Benvinguts a Warriors.'
		}
	},
	es: {
		seoTitle: 'Sobre nosotros | Club Taekwondo Warriors',
		seoDescription:
			'Historia, equipo técnico, significado del logo y esencia del Club Taekwondo Warriors.',
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
			intro:
				'Warriors es el resultado de un camino construido con constancia, reinvención y mucha pasión por el taekwondo.',
			timeline: [
				{
					year: '2013',
					title: 'Los inicios',
					text: 'El proyecto comienza en la Escola Sant Antoni de Sant Vicenç dels Horts, con las primeras clases y un pequeño grupo de alumnos.'
				},
				{
					year: '2020',
					title: 'Una pausa obligada',
					text: 'La pandemia obliga a parar las clases y el club pasa más de un año sin actividad presencial.'
				},
				{
					year: '2023',
					title: 'La vuelta',
					text: 'En septiembre de 2023 la actividad se retoma en el Institut Gabriela Mistral, recuperando la ilusión y el trabajo de base.'
				},
				{
					year: '2024',
					title: 'Crecimiento del proyecto',
					text: 'El club amplía su actividad con sesiones en la Escola Sant Antoni y en el Centre Cívic Virgínia Amposta.'
				},
				{
					year: '2025',
					title: 'Consolidación',
					text: 'Warriors continúa en el Centre Cívic Virgínia Amposta y suma un nuevo espacio propio de trabajo en Nire Events.'
				},
				{
					year: '2026',
					title: 'Sede propia',
					text: 'El club da un paso adelante y abre su propia sede, convirtiendo el proyecto en una casa definitiva para la comunidad Warriors.'
				}
			]
		},
		logo: {
			title: 'El significado del logo',
			intro:
				'Cada parte del símbolo Warriors tiene una carga personal y deportiva vinculada a la historia de Diana y a la identidad del club.',
			points: [
				'Las dos V en amarillo y rojo forman la W de Warriors y representan también las iniciales de Diana Vázquez Vallés.',
				'El cinturón que las une simboliza la unión, la fuerza y los valores que sostienen el proyecto.',
				'La composición genera también una M, inicial grabada en el cinturón de Diana con un significado muy personal.',
				'El círculo de fondo recuerda al escudo de Wonder Woman, una referencia visual de fuerza e identidad.',
				'Las seis estrellas representan los seis títulos de Campeona de España conseguidos por Diana.'
			]
		},
		team: {
			title: 'El equipo técnico',
			intro:
				'Detrás del club hay un equipo que conoce el camino desde dentro: competición, formación y acompañamiento de cada alumno.',
			members: [
				{
					name: 'Diana Vázquez Vallés',
					role: 'Instructora y coach de Taekwondo Olímpico',
					image: '/images/about-diana.jpeg',
					summary:
						'Se inició en el taekwondo con solo 5 años y ha desarrollado una trayectoria de competición y formación de alto nivel.',
					achievementsTitle: 'Trayectoria destacada',
					achievements: [
						'Campeona de España y medallista internacional.',
						'Núm. 1 del ranking europeo en 2009.',
						'3ª clasificada en el Campeonato del Mundo Universitario 2014.',
						'Mérito deportivo de bronce RFET 2023 y de plata RFET 2025.',
						'Reconocimiento en la Nit de l’Esport Vicentí 2024.',
						'Actualmente coach de la Federació Catalana.'
					],
					trainingTitle: 'Formación y titulaciones',
					training: [
						'Cinturón negro 4º DAN.',
						'Técnica regional y coach internacional.',
						'Maestra de educación física.',
						'Máster en desarrollo social y gestión deportiva.',
						'Formación en alto rendimiento y colaboraciones con DAEDO y FUJIMAE.'
					],
					philosophyTitle: 'Filosofía',
					philosophy:
						'Quiere acercar el taekwondo olímpico a Sant Vicenç dels Horts y formar personas a través del respeto, la disciplina y la superación.'
				},
				{
					name: 'Laia Marín',
					role: 'Monitora de Taekwondo Olímpico',
					image: '/images/about-laia.jpeg',
					summary:
						'Se inició a los 5 años con Diana en la Escola Sant Antoni y ha crecido dentro del proyecto hasta convertirse en una pieza clave del club.',
					achievementsTitle: 'Trayectoria deportiva',
					achievements: [
						'Subcampeona de Cataluña Júnior en combate.',
						'3ª de Cataluña Sub-21 en combate.',
						'3ª en el Campeonato de Cataluña de Promoción en poomsae.',
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
						'Entiende el taekwondo como una escuela de esfuerzo, constancia y confianza, y disfruta ayudando a los más pequeños a crecer.'
				}
			]
		},
		clubEssence: {
			title: 'Esencia Warriors',
			missionTitle: 'Misión',
			mission:
				'Acercar el taekwondo olímpico a Sant Vicenç dels Horts y formar personas a través de los valores del deporte.',
			visionTitle: 'Visión',
			vision:
				'Ser un club de referencia en taekwondo olímpico y una comunidad donde cualquier persona pueda desarrollarse independientemente del nivel, la edad o la experiencia.',
			valuesTitle: 'Valores',
			values: ['Respeto', 'Perseverancia', 'Pasión', 'Compañerismo', 'Superación', 'Disciplina', 'Familia'],
			closing: 'Bienvenidos a casa. Bienvenidos a Warriors.'
		}
	},
	en: {
		seoTitle: 'About us | Club Taekwondo Warriors',
		seoDescription:
			'History, coaching team, logo meaning, and club identity of Club Taekwondo Warriors.',
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
			intro:
				'Warriors is the result of a journey built through consistency, reinvention, and deep passion for taekwondo.',
			timeline: [
				{
					year: '2013',
					title: 'The beginning',
					text: 'The project started at Escola Sant Antoni in Sant Vicenç dels Horts, with the first classes and a small group of students.'
				},
				{
					year: '2020',
					title: 'A forced pause',
					text: 'The pandemic stopped classes and the club spent more than a year without in-person activity.'
				},
				{
					year: '2023',
					title: 'Back to training',
					text: 'In September 2023 activity resumed at Institut Gabriela Mistral, bringing back energy and grassroots work.'
				},
				{
					year: '2024',
					title: 'Project growth',
					text: 'The club expanded with sessions at Escola Sant Antoni and Centre Cívic Virgínia Amposta.'
				},
				{
					year: '2025',
					title: 'Consolidation',
					text: 'Warriors continued at Centre Cívic Virgínia Amposta and added a new dedicated training space at Nire Events.'
				},
				{
					year: '2026',
					title: 'Our own headquarters',
					text: 'The club took the next step and opened its own headquarters, turning the project into a permanent home for the Warriors community.'
				}
			]
		},
		logo: {
			title: 'The meaning behind the logo',
			intro:
				'Every part of the Warriors symbol carries personal and sporting meaning linked to Diana’s story and the club’s identity.',
			points: [
				'The two yellow and red V shapes create the W of Warriors and also represent the initials of Diana Vázquez Vallés.',
				'The belt that ties them together symbolizes unity, strength, and the values that support the whole project.',
				'The composition also forms an M, an initial engraved on Diana’s belt with special personal meaning.',
				'The background circle recalls Wonder Woman’s shield, a visual reference for strength and identity.',
				'The six stars represent Diana’s six Spanish national championship titles.'
			]
		},
		team: {
			title: 'The coaching team',
			intro:
				'Behind the club there is a team that knows the path from the inside: competition, education, and day-to-day guidance for every student.',
			members: [
				{
					name: 'Diana Vázquez Vallés',
					role: 'Olympic Taekwondo instructor and coach',
					image: '/images/about-diana.jpeg',
					summary:
						'She started taekwondo at the age of 5 and has built a high-level career in both competition and coaching.',
					achievementsTitle: 'Highlights',
					achievements: [
						'Spanish national champion and international medalist.',
						'Number 1 in the European ranking in 2009.',
						'3rd place at the 2014 World University Championship.',
						'RFET bronze merit award in 2023 and silver merit award in 2025.',
						'Recognized at the Nit de l’Esport Vicentí in 2024.',
						'Currently a coach for the Catalan Federation.'
					],
					trainingTitle: 'Education and certifications',
					training: [
						'4th DAN black belt.',
						'Regional technician and international coach.',
						'Physical education teacher.',
						'Master’s degree in social development and sports management.',
						'High-performance training and collaborations with DAEDO and FUJIMAE.'
					],
					philosophyTitle: 'Philosophy',
					philosophy:
						'Her goal is to bring Olympic taekwondo to Sant Vicenç dels Horts and shape people through respect, discipline, and self-improvement.'
				},
				{
					name: 'Laia Marín',
					role: 'Olympic Taekwondo instructor',
					image: '/images/about-laia.jpeg',
					summary:
						'She started at the age of 5 with Diana at Escola Sant Antoni and has grown inside the project until becoming a key part of the club.',
					achievementsTitle: 'Sporting background',
					achievements: [
						'Catalonia junior runner-up in sparring.',
						'3rd place in Catalonia under-21 sparring.',
						'3rd place in the Catalonia promotion championship in poomsae.',
						'She has been part of the project through every stage and training space.'
					],
					trainingTitle: 'Role in the club',
					training: [
						'Instructor and Diana’s right hand.',
						'A close role model for kids and teen groups.',
						'Committed to technical and human development for students.'
					],
					philosophyTitle: 'Philosophy',
					philosophy:
						'She sees taekwondo as a school of effort, consistency, and confidence, and loves helping younger students grow.'
				}
			]
		},
		clubEssence: {
			title: 'Warriors essence',
			missionTitle: 'Mission',
			mission:
				'To bring Olympic taekwondo to Sant Vicenç dels Horts and help shape people through the values of sport.',
			visionTitle: 'Vision',
			vision:
				'To be a reference club in Olympic taekwondo and a community where anyone can grow regardless of level, age, or experience.',
			valuesTitle: 'Values',
			values: ['Respect', 'Perseverance', 'Passion', 'Team spirit', 'Self-improvement', 'Discipline', 'Family'],
			closing: 'Welcome home. Welcome to Warriors.'
		}
	}
};

export function getAboutPageCopy(locale: Locale): AboutPageCopy {
	return aboutPageCopy[locale];
}
