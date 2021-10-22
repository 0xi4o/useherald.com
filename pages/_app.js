import React, { useEffect } from 'react';
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
import Image from 'next/image';
import theme from '../theme';
import '@useherald/react-widget/dist/style.css';
import { pageview } from '../lib/gtag';

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		if (window) {
			const handleRouteChange = (url) => {
				pageview(url);
			};
			router.events.on('routeChangeComplete', handleRouteChange);
			return () => {
				router.events.off('routeChangeComplete', handleRouteChange);
			};
		}
	}, [router.events]);

	if (router.pathname.startsWith('/docs')) {
		return (
			<>
				<Script
					strategy='afterInteractive'
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				/>
				<Script
					id='google-analytics'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							
							gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
								page_path: window.location.pathname,
							});
						`,
					}}
				/>
				<ChakraProvider resetCSS theme={theme}>
					<Head>
						<title>
							Herald Docs | Updates-as-a-service for SaaS products
							| Changelog, Banners and Waitlist Management
						</title>
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
									<chakra.span
										fontSize='xl'
										fontWeight='bold'
									>
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
			</>
		);
	} else if (router.pathname.startsWith('/blog')) {
		return (
			<>
				<Script
					strategy='afterInteractive'
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				/>
				<Script
					id='google-analytics'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							
							gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
								page_path: window.location.pathname,
							});
						`,
					}}
				/>
				<ChakraProvider resetCSS theme={theme}>
					<Head>
						<title>
							Herald Blog | Updates-as-a-service for SaaS products
							| Changelog, Banners and Waitlist Management
						</title>
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
									<chakra.span
										fontSize='xl'
										fontWeight='bold'
									>
										Herald
									</chakra.span>
								</HStack>
							</Link>
						}
					>
						<Component {...pageProps} />
					</DokzBlogProvider>
				</ChakraProvider>
			</>
		);
	}

	return (
		<>
			<Script
				strategy='afterInteractive'
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Script
				id='google-analytics'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						
						gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
							page_path: window.location.pathname,
						});
					`,
				}}
			/>
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
					</Head>
					<Component {...pageProps} />
				</ColorModeProvider>
			</ChakraProvider>
		</>
	);
}

export default MyApp;
