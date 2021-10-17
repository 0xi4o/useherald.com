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
import { MdDomainVerification } from 'react-icons/md';
import { HiColorSwatch, HiTemplate } from 'react-icons/hi';
import { GiVerticalBanner } from 'react-icons/gi';

export default function Features() {
	const Feature = (props) => {
		return (
			<Box>
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
				<chakra.h3
					mb={2}
					fontSize='xl'
					fontWeight='semibold'
					lineHeight='shorter'
					color={useColorModeValue('gray.900')}
				>
					{props.title}
				</chakra.h3>
				<chakra.dd
					mt={2}
					fontSize='lg'
					color={useColorModeValue('gray.500', 'gray.400')}
				>
					{props.children}
				</chakra.dd>
			</Box>
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
					color={useColorModeValue('gray.600', 'gray.500')}
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
					spacingY={{ base: 10, lg: 24 }}
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
					<Feature
						color='blue'
						title='In-app Banners'
						icon={GiVerticalBanner}
					>
						Show featured articles or updates on your landing pages
						and application as banners. Fully customizable.
					</Feature>
				</SimpleGrid>
			</Box>
		</Flex>
	);
}
