import React from 'react';
import {
	chakra,
	Box,
	Flex,
	useColorModeValue,
	Icon,
	SimpleGrid,
	Stack,
	GridItem,
} from '@chakra-ui/react';
import { ImEmbed2 } from 'react-icons/im';
import { CgFeed } from 'react-icons/cg';
import { MdDomainVerification } from 'react-icons/md';
import { HiColorSwatch, HiTemplate } from 'react-icons/hi';
import { GiVerticalBanner } from 'react-icons/gi';

const Feature = () => {
	const FeatureItem = (props) => {
		return (
			<Flex>
				<Flex
					w={12}
					h={12}
					bg={props.bg}
					borderRadius='full'
					p={4}
					shrink={0}
					alignItems='center'
					justifyContent='center'
				>
					<Icon as={props.icon} color='white' w={6} h={6} />
				</Flex>
				<Box ml={4}>
					<chakra.dt
						fontSize='lg'
						fontWeight='bold'
						lineHeight='6'
						color={useColorModeValue('gray.900')}
					>
						{props.title}
					</chakra.dt>
					<chakra.dd
						mt={2}
						color={useColorModeValue('gray.500', 'gray.400')}
					>
						{props.children}
					</chakra.dd>
				</Box>
			</Flex>
		);
	};

	return (
		<Flex
			py={16}
			w='auto'
			maxW='container.xl'
			justifyContent='center'
			alignItems='center'
			borderRadius='lg'
		>
			<Box
				shadow='xl'
				bg={useColorModeValue('white', 'gray.800')}
				px={12}
				py={20}
				mx='auto'
				borderRadius='lg'
			>
				<SimpleGrid
					alignItems='center'
					columns={{ base: 1, lg: 3 }}
					spacingY={{ base: 10, lg: 32 }}
					spacingX={{ base: 10, lg: 24 }}
				>
					<Box alignSelf='start'>
						<chakra.h2
							mb={3}
							fontSize={{ base: '2xl', md: '3xl' }}
							fontWeight='extrabold'
							textAlign={{ base: 'center', sm: 'left' }}
							color={useColorModeValue('black')}
							lineHeight='shorter'
							letterSpacing='tight'
						>
							Everything you need
						</chakra.h2>
						<chakra.p
							mb={6}
							fontSize={{ base: 'lg', md: 'xl' }}
							textAlign={{ base: 'center', sm: 'left' }}
							color={useColorModeValue('gray.600', 'gray.500')}
						>
							To show updates, releases, and bug fixes to your
							users right on your website. You can also show
							featured blog posts on your landing pages and inside
							your application.
						</chakra.p>
					</Box>
					<GridItem colSpan={2}>
						<Stack
							spacing={{ base: 10, md: 0 }}
							display={{ md: 'grid' }}
							gridTemplateColumns={{ md: 'repeat(2,1fr)' }}
							gridColumnGap={{ md: 8 }}
							gridRowGap={{ md: 10 }}
						>
							<FeatureItem
								bg='#faae2b'
								icon={ImEmbed2}
								title='Embeddable Widget'
							>
								Show the updates to your product in your web
								application using a lightweight embeddable
								widget.
							</FeatureItem>
							<FeatureItem
								bg='#e53170'
								icon={CgFeed}
								title='Dedicated Feed'
							>
								Keep a record of all the changes made to your
								application in a beautifully rendered timeline
								view.
							</FeatureItem>
							<FeatureItem
								bg='#ff8906'
								icon={MdDomainVerification}
								title='Custom Domain'
							>
								Host the Herald dashboard complete with
								authentication, REST API and widget hosted on
								your domain.
							</FeatureItem>
							<FeatureItem
								bg='#7f5af0'
								icon={HiColorSwatch}
								title='Custom Branding'
							>
								The widget and feed won&apos;t seem out of place
								in your application because you can customize
								them to suit your brand.
							</FeatureItem>
							<FeatureItem
								bg='#3da9fc'
								icon={HiTemplate}
								title='Custom Templates'
							>
								Use the pre-made templates for your changelogs
								or create your own to fit your needs.
							</FeatureItem>
							<FeatureItem
								bg='#078080'
								icon={GiVerticalBanner}
								title='Featured Posts'
							>
								Show featured blog posts on your landing pages
								and application as banners. Fully customizable
								to fit your website styles.
							</FeatureItem>
						</Stack>
					</GridItem>
				</SimpleGrid>
			</Box>
		</Flex>
	);
};

export default Feature;
