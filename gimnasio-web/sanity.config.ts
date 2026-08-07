import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from './sanity/schemaTypes';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = process.env.PUBLIC_SANITY_DATASET ?? 'production';
const title = process.env.SANITY_STUDIO_PROJECT_NAME ?? 'Escuela de Taekwondo';

export default defineConfig({
	name: 'escuela-taekwondo',
	title,
	projectId,
	dataset,
	plugins: [structureTool()],
	schema: {
		types: schemaTypes
	}
});
