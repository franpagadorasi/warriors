import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from './sanity/schemaTypes';

const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID ?? import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = import.meta.env.SANITY_STUDIO_DATASET ?? import.meta.env.PUBLIC_SANITY_DATASET ?? 'production';
const title = import.meta.env.SANITY_STUDIO_PROJECT_NAME ?? 'Escuela de Taekwondo';

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
