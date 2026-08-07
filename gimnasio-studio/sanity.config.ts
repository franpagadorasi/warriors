import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import { schemaTypes } from './sanity/schemaTypes';

export default defineConfig({
	name: 'club-taekwondo-warriors',
	title: 'Club Taekwondo Warriors',
	projectId: 'fldv0kmw',
	dataset: 'production',
	plugins: [structureTool()],
	schema: {
		types: schemaTypes
	}
});
