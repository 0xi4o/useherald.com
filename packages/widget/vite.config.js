import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/main.js'),
			name: 'HeraldWidget',
			fileName: (format) => `HeraldWidget.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'preact'],
			output: {
				globals: {
					react: 'React',
					preact: 'Preact',
				},
			},
		},
	},
	plugins: [preact()],
});
