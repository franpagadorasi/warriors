// @ts-check
import 'dotenv/config';

import react from '@astrojs/react';
import sanity from '@sanity/astro';
import { defineConfig } from 'astro/config';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET;
const site = process.env.PUBLIC_SITE_URL || 'https://clubtaekwondowarriors.cat';
const sanityProjectId = projectId || 'fldv0kmw';
const sanityDataset = dataset || 'production';

const integrations = [react()];

integrations.unshift(
	sanity({
		projectId: sanityProjectId,
		dataset: sanityDataset,
		apiVersion: '2026-03-01',
		useCdn: false,
		studioBasePath: '/admin'
	})
);

export default defineConfig({
	site,
	integrations,
	vite: {
		optimizeDeps: {
			include: [
				'react/compiler-runtime',
				'lodash/isObject.js',
				'lodash/groupBy.js',
				'lodash/keyBy.js',
				'lodash/partition.js',
				'lodash/sortedIndex.js',
				'sanity/structure'
			]
		}
	}
});
