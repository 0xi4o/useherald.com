// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	brand: {
		50: '#ecefff',
		100: '#cbceeb',
		200: '#a9aed6',
		300: '#888ec5',
		400: '#666db3',
		500: '#4d5499',
		600: '#3c4178',
		700: '#2a2f57',
		800: '#181c37',
		900: '#080819',
	},
};

const fonts = {
	body: 'Inter, sans-serif',
	heading: 'Inter, sans-serif',
};

const theme = extendTheme({ colors, fonts });

export default theme;
