import { ColorModeSwitch, DokzProvider } from 'dokz';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
	chakra,
	ChakraProvider,
	ColorModeProvider,
	HStack,
	Icon,
} from '@chakra-ui/react';
import Head from 'next/head';
import theme from '../theme';
import Image from 'next/image';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
	const { pathname } = useRouter();

	if (pathname.startsWith('/docs')) {
		return (
			<ChakraProvider resetCSS theme={theme}>
				<Head>
					<title>Herald - Open-source changelog-as-a-service</title>
				</Head>
				<DokzProvider
					docsRootPath='pages/docs'
					headerItems={[
						<Link
							key={0}
							isExternal
							aria-label='Go to Choc UI GitHub page'
							href='https://github.com/opencatalysts/herald'
						>
							<Icon
								as={AiFillGithub}
								display='block'
								transition='color 0.2s'
								w='5'
								h='5'
								_hover={{ color: 'gray.600' }}
								cursor='pointer'
							/>
						</Link>,
						<ColorModeSwitch key={1} />,
					]}
					headerLogo={
						<Link href='/'>
							<HStack cursor='pointer'>
								<Image src='/logo.png' width={40} height={40} />
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
								supabase: true,
							},
							deployment: {
								vercel: true,
								netlify: true,
							},
						},
					}}
				>
					<Component {...pageProps} />
				</DokzProvider>
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
					<title>Herald - Open-source changelog-as-a-service</title>
				</Head>
				<Component {...pageProps} />
			</ColorModeProvider>
		</ChakraProvider>
	);
}

export default MyApp;
