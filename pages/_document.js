import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { NextStrictCSP } from 'next-strict-csp';
import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';

const HeadCSP = process.env.NODE_ENV === 'production' ? NextStrictCSP : Head;

export default class Document extends NextDocument {
	render() {
		return (
			<Html lang='en'>
				<HeadCSP>
					{process.env.NODE_ENV === 'production' && (
						<meta httpEquiv='Content-Security-Policy' />
					)}
					<meta
						name='description'
						content='All-in-one solution to announce product updates and get feedback with in-app widgets, banners, changelog and roadmap.'
					/>
					<link
						rel='preconnect'
						href='https://fonts.googleapis.com'
					/>
					<link
						rel='preconnect'
						href='https://fonts.gstatic.com'
						crossOrigin='true'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap'
						rel='stylesheet'
					/>
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicon-16x16.png'
					/>
					<link rel='manifest' href='/site.webmanifest' />
					<link
						rel='mask-icon'
						href='/safari-pinned-tab.svg'
						color='#5bbad5'
					/>
					<meta name='msapplication-TileColor' content='#2b5797' />
					<meta name='theme-color' content='#ffffff' />
				</HeadCSP>
				<body>
					{/* Make Color mode to persists when you refresh the page. */}
					<ColorModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
