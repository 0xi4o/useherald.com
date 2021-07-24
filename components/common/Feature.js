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

const Feature = () => {
	const FeatureItem = (props) => {
		return (
			<Flex>
				<Flex shrink={0}>
					<Icon
						boxSize={5}
						mt={1}
						mr={2}
						color={useColorModeValue('brand.500', 'brand.300')}
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path
							fillRule='evenodd'
							d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
							clipRule='evenodd'
						/>
					</Icon>
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
							color={useColorModeValue('brand.500')}
							fontWeight='semibold'
							textTransform='uppercase'
							letterSpacing='wide'
						>
							Everything you need
						</chakra.h2>
						<chakra.h2
							mb={3}
							fontSize={{ base: '3xl', md: '4xl' }}
							fontWeight='extrabold'
							textAlign={{ base: 'center', sm: 'left' }}
							color={useColorModeValue('black')}
							lineHeight='shorter'
							letterSpacing='tight'
						>
							All-in-one platform
						</chakra.h2>
						<chakra.p
							mb={6}
							fontSize={{ base: 'lg', md: 'xl' }}
							textAlign={{ base: 'center', sm: 'left' }}
							color={useColorModeValue('gray.600', 'gray.500')}
						>
							Herald is an open-source software written in{' '}
							<chakra.a
								color='brand.200'
								href='https://nextjs.org'
								target='_blank'
								rel='noopener noreferrer'
							>
								Next.js
							</chakra.a>{' '}
							and powered by a{' '}
							<chakra.a
								color='brand.200'
								href='https://supabase.io'
								target='_blank'
								rel='noopener noreferrer'
							>
								Supabase
							</chakra.a>{' '}
							backend. You can also use your own database and host
							it anywhere you like. All you need is an environment
							that can run Node.js.
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
							<FeatureItem title='Embeddable Widget'>
								Show the updates to your product in your web
								application using a lightweight embeddable
								widget.
							</FeatureItem>
							<FeatureItem title='Dedicated Feed'>
								Keep a record of all the changes made to your
								application in a beautifully rendered timeline
								view.
							</FeatureItem>
							<FeatureItem title='Custom Domain'>
								Host the Herald dashboard complete with
								authentication, REST API and widget hosted on
								your domain.
							</FeatureItem>
							<FeatureItem title='Custom Branding'>
								The widget and feed won&apos;t seem out of place
								in your application because you can customize
								them to suit your brand.
							</FeatureItem>
							<FeatureItem title='Firebase Authentication'>
								Firebase authentication out-of-the-box to manage
								access to your Herald dashboard.
							</FeatureItem>
							<FeatureItem title='Markdown Editor'>
								Easily format your updates with a full-fledged
								Markdown editor along with multimedia and emoji
								support.
							</FeatureItem>
						</Stack>
					</GridItem>
				</SimpleGrid>
			</Box>
		</Flex>
	);
};

export default Feature;
