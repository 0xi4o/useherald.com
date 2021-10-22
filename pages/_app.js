import Script from 'next/script';
import Link from 'next/link';
import { ColorModeSwitch, DokzProvider, DokzBlogProvider } from 'dokz';
import { useRouter } from 'next/router';
import {
	chakra,
	ChakraProvider,
	ColorModeProvider,
	HStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import theme from '../theme';
import Image from 'next/image';
import React from 'react';
import '@useherald/react-widget/dist/style.css';

function MyApp({ Component, pageProps }) {
	const { pathname } = useRouter();

	if (pathname.startsWith('/docs')) {
		return (
			<ChakraProvider resetCSS theme={theme}>
				<Head>
					<title>
						Herald Docs | Updates-as-a-service for SaaS products |
						Changelog, Banners and Waitlist Management
					</title>
					<Script
						strategy='lazyOnload'
						src='https://www.googletagmanager.com/gtag/js?id=G-25B5VNS3BB'
					/>
					<Script
						id='google-analytics'
						strategy='afterInteractive'
						dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								
								gtag('config', 'G-25B5VNS3BB', {
									page_path: window.location.pathname,
								});
							`,
						}}
					/>
				</Head>
				<DokzProvider
					docsRootPath='pages/docs'
					headerItems={[<ColorModeSwitch key={1} />]}
					headerLogo={
						<Link href='/'>
							<HStack cursor='pointer'>
								<Image
									src='/logo.png'
									width={40}
									height={40}
									alt='Herald Logo'
								/>
								<chakra.span fontSize='xl' fontWeight='bold'>
									Herald
								</chakra.span>
							</HStack>
						</Link>
					}
					sidebarOrdering={{
						docs: {
							about: true,
							'getting-started': {
								introduction: true,
								configuration: true,
							},
						},
					}}
				>
					<Component {...pageProps} />
				</DokzProvider>
			</ChakraProvider>
		);
	} else if (pathname.startsWith('/blog')) {
		return (
			<ChakraProvider resetCSS theme={theme}>
				<Head>
					<title>
						Herald Blog | Updates-as-a-service for SaaS products |
						Changelog, Banners and Waitlist Management
					</title>
					<Script
						strategy='lazyOnload'
						src='https://www.googletagmanager.com/gtag/js?id=G-25B5VNS3BB'
					/>
					<Script id='google-analytics'>
						{`
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								
								gtag('config', 'G-25B5VNS3BB');
							`}
					</Script>
				</Head>
				<DokzBlogProvider
					blogRootPath='pages/blog'
					headerItems={[<ColorModeSwitch key={1} />]}
					headerLogo={
						<Link href='/'>
							<HStack cursor='pointer'>
								<Image
									src='/logo.png'
									width={40}
									height={40}
									alt='Herald Logo'
								/>
								<chakra.span fontSize='xl' fontWeight='bold'>
									Herald
								</chakra.span>
							</HStack>
						</Link>
					}
				>
					<Component {...pageProps} />
				</DokzBlogProvider>
			</ChakraProvider>
		);
	}

	return (
		<ChakraProvider resetCSS theme={theme}>
			<ColorModeProvider
				options={{
					useSystemColorMode: true,
				}}
			>
				<Head>
					<title>
						Herald | Updates-as-a-service for SaaS products |
						Changelog, Banners and Waitlist Management
					</title>
					<Script
						strategy='lazyOnload'
						src='https://www.googletagmanager.com/gtag/js?id=G-25B5VNS3BB'
					/>
					<Script id='google-analytics'>
						{`
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								
								gtag('config', 'G-25B5VNS3BB');
							`}
					</Script>
				</Head>
				<Component {...pageProps} />
			</ColorModeProvider>
		</ChakraProvider>
	);
}

export default MyApp;
