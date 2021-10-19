import React from 'react';
import {
	chakra,
	Box,
	SimpleGrid,
	Flex,
	useColorModeValue,
	Icon,
} from '@chakra-ui/react';
import { ImEmbed2 } from 'react-icons/im';
import { CgFeed } from 'react-icons/cg';
import { MdDomainVerification, MdMarkEmailRead } from 'react-icons/md'; // MdOutlineSettings
import { HiColorSwatch, HiTemplate } from 'react-icons/hi';
import { GiVerticalBanner } from 'react-icons/gi';
import { FaMarkdown, FaMoon } from 'react-icons/fa'; // FaReact, FaUsers

export default function Features() {
	const Feature = (props) => {
		return (
			<Flex
				flexDirection='column'
				alignItems='flex-start'
				justifyContent='flex-start'
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
					Everything you need
				</chakra.h2>
				<chakra.p
					mb={6}
					fontSize={{ base: 'lg', md: 'xl' }}
					color={useColorModeValue('gray.800', 'gray.200')}
				>
					To keep your customers up-to-date on your product and your
					company. Feature articles, events, releases and more, inside
					your application and website.
				</chakra.p>
			</Box>
			<Box
				shadow='xl'
				bg={useColorModeValue('white', 'gray.800')}
				px={12}
				py={20}
				mx='auto'
				borderRadius='lg'
				d='flex'
				flexDirection='column'
				alignItems='center'
			>
				<SimpleGrid
					alignItems='center'
					columns={{ base: 1, lg: 3 }}
					spacingY={{ base: 10, lg: 16 }}
					spacingX={{ base: 10, lg: 16 }}
				>
					<Feature
						color='red'
						title='Embeddable Widget'
						icon={ImEmbed2}
					>
						Show the updates to your product in your web application
						using a lightweight embeddable widget.
					</Feature>

					<Feature color='pink' title='Dedicated Feed' icon={CgFeed}>
						Keep a record of all the changes made to your
						application in a beautifully rendered page.
					</Feature>

					<Feature
						color='blue'
						title='In-app Banners'
						icon={GiVerticalBanner}
					>
						Show featured articles or updates on your landing pages
						and application as banners. Fully customizable.
					</Feature>

					<Feature
						color='yellow'
						title='Custom Domain'
						icon={MdDomainVerification}
					>
						Show your product updates and feature releases in a
						public page on your domain.
					</Feature>

					<Feature
						color='green'
						title='Custom Branding'
						icon={HiColorSwatch}
					>
						The widget and feed won&apos;t seem out of place in your
						application because you can customize them to suit your
						brand.
					</Feature>

					<Feature
						color='purple'
						title='Custom Templates'
						icon={HiTemplate}
					>
						Use the pre-made template for your changelogs and
						banners or create your own to fit your needs.
					</Feature>

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
						Users can subscribe to your changelog, and we&apos;ll
						take care of emailing them whenever you publish a new
						update.
					</Feature>

					{/*<Feature*/}
					{/*	color='pink'*/}
					{/*	title='Bring your whole team'*/}
					{/*	icon={FaUsers}*/}
					{/*>*/}
					{/*	Add team members to your workspace and let them manage changelogs, and banners.*/}
					{/*</Feature>*/}

					<Feature color='gray' title='Dark Mode' icon={FaMoon}>
						Choose a color mode in your settings or let your users
						choose themselves on your public pages.
					</Feature>

					{/*<Feature*/}
					{/*	color='yellow'*/}
					{/*	title='Integrations'*/}
					{/*	icon={MdOutlineSettings}*/}
					{/*>*/}
					{/*	Integrate with Zapier, Slack, Twitter*/}
					{/*</Feature>*/}
				</SimpleGrid>
			</Box>
		</Flex>
	);
}
