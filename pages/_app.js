import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import Head from 'next/head';
import theme from '../theme';
import React from 'react';
import 'nextra-theme-docs/style.css';
// import '../packages/app/styles/global.css';
import '@herald/widget/dist/style.css';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<ColorModeProvider
				options={{
					useSystemColorMode: true,
				}}
			>
				<Head>
					<title>Herald - Open-source changelog-as-a-service</title>
				</Head>
				<Component {...pageProps} />
			</ColorModeProvider>
		</ChakraProvider>
	);
}

export default MyApp;
