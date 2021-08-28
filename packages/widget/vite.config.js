import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import * as path from 'path';
import dynamicImportVariables from '@rollup/plugin-dynamic-import-vars';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.js'),
			name: 'herald-widget',
			fileName: (format) => `herald-widget.${format}.js`,
		},
		rollupOptions: {
			plugins: [dynamicImportVariables()],
		},
	},
	plugins: [preact()],
});
