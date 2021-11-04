import React from 'react';
import {
	chakra,
	Box,
	Flex,
	Grid,
	useColorModeValue,
	Icon,
} from '@chakra-ui/react';
import { ImEmbed2 } from 'react-icons/im';
import { MdDomainVerification, MdMarkEmailRead } from 'react-icons/md'; // MdOutlineSettings
import { HiColorSwatch } from 'react-icons/hi';
import { GiVerticalBanner } from 'react-icons/gi';
import { FaMarkdown } from 'react-icons/fa'; // FaReact, FaUsers

export default function FeaturesList() {
	const Feature = (props) => {
		return (
			<Flex
				flexDirection='column'
				alignItems='flex-start'
				justifyContent='flex-start'
				shadow='xl'
				rounded='lg'
				bg={useColorModeValue('white', 'gray.800')}
				p={8}
				w='full'
				h='full'
			>
				<Flex
					alignItems='center'
					justifyContent='center'
					w={12}
					h={12}
					p={4}
					mb={4}
					rounded='full'
					color={useColorModeValue(
						`${props.color}.600`,
						`${props.color}.100`
					)}
					bg={useColorModeValue(
						`${props.color}.100`,
						`${props.color}.600`
					)}
				>
					<Icon as={props.icon} color='white' w={8} h={8} />
				</Flex>
				<chakra.dl>
					<chakra.dt
						mb={2}
						fontSize='xl'
						fontWeight='semibold'
						lineHeight='shorter'
						color={useColorModeValue('gray.900')}
					>
						{props.title}
					</chakra.dt>
					<chakra.dd
						mt={2}
						fontSize='lg'
						color={useColorModeValue('gray.500', 'gray.400')}
					>
						{props.children}
					</chakra.dd>
				</chakra.dl>
			</Flex>
		);
	};

	return (
		<Flex
			id='features'
			py={16}
			w='full'
			maxW='container.xl'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			borderRadius='lg'
		>
			<Box
				w='3xl'
				d='flex'
				flexDirection='column'
				alignItems='center'
				textAlign='center'
				mb={4}
			>
				<chakra.h2
					mb={3}
					fontSize={{ base: '2xl', md: '3xl' }}
					fontWeight='extrabold'
					color={useColorModeValue('black')}
					lineHeight='shorter'
					letterSpacing='tight'
				>
					Seamless addition to your web applications
				</chakra.h2>
				<chakra.p
					mb={6}
					fontSize={{ base: 'lg', md: 'xl' }}
					color={useColorModeValue('gray.800', 'gray.200')}
				>
					Herald is framework-agnostic and works with your tech stack.
				</chakra.p>
			</Box>
			<Box
				px={12}
				py={20}
				mx='auto'
				d='flex'
				flexDirection='column'
				alignItems='center'
			>
				<Grid
					alignItems='center'
					templateColumns='repeat(2, 1fr)'
					gap={16}
				>
					<Feature
						color='red'
						title='Embeddable Widget'
						icon={ImEmbed2}
					>
						Show the updates to your product in your web application
						using a lightweight embeddable widget.
					</Feature>

					<Feature
						color='blue'
						title='In-app Banners'
						icon={GiVerticalBanner}
					>
						Boost content and updates on your landing pages and
						application as banners. Fully customizable.
					</Feature>

					<Feature
						color='yellow'
						title='Custom Domain'
						icon={MdDomainVerification}
					>
						Show your changelog and roadmap on your domain.
					</Feature>

					<Feature
						color='green'
						title='Custom Branding'
						icon={HiColorSwatch}
					>
						Herald components won&apos;t seem out of place in your
						application. Customize them to suit your brand.
					</Feature>

					{/*<Feature*/}
					{/*	color='purple'*/}
					{/*	title='Custom Templates'*/}
					{/*	icon={HiTemplate}*/}
					{/*>*/}
					{/*	Use the pre-made template for your changelogs and*/}
					{/*	banners or create your own to fit your needs.*/}
					{/*</Feature>*/}

					{/*<Feature*/}
					{/*	color='blue'*/}
					{/*	title='React & HTML Widgets'*/}
					{/*	icon={FaReact}*/}
					{/*>*/}
					{/*	React and HTML versions of the embeddable widgets with support for more frameworks coming soon.*/}
					{/*</Feature>*/}

					<Feature
						color='red'
						title='Markdown Support'
						icon={FaMarkdown}
					>
						Write in a rich text editor with markdown shortcuts.
						Format without taking your hands of the keyboard.
					</Feature>

					<Feature
						color='orange'
						title='Subscribe to Updates'
						icon={MdMarkEmailRead}
					>
						Users can subscribe to your updates, and we&apos;ll take
						care of emailing them.
					</Feature>

					{/*<Feature*/}
					{/*	color='pink'*/}
					{/*	title='Bring your whole team'*/}
					{/*	icon={FaUsers}*/}
					{/*>*/}
					{/*	Add team members to your workspace and let them manage changelogs, and banners.*/}
					{/*</Feature>*/}

					{/*<Feature*/}
					{/*	color='yellow'*/}
					{/*	title='Integrations'*/}
					{/*	icon={MdOutlineSettings}*/}
					{/*>*/}
					{/*	Integrate with Zapier, Slack, Twitter*/}
					{/*</Feature>*/}
				</Grid>
			</Box>
		</Flex>
	);
}
