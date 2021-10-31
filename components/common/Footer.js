import Image from 'next/image';
import {
	chakra,
	Container,
	Flex,
	Link,
	SimpleGrid,
	Stack,
	Text,
	VisuallyHidden,
	useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import React from 'react';
import SubscriptionForm from './SubscriptionForm';

const ListHeader = ({ children }) => {
	return (
		<Text fontWeight={'500'} fontSize={'md'} mb={2} casing='uppercase'>
			{children}
		</Text>
	);
};

const SocialButton = ({ children, label, href }) => {
	return (
		<chakra.button
			bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

const Footer = () => {
	const bg = useColorModeValue('white', 'gray.800');

	return (
		<chakra.footer bg={bg} overflowY='hidden' w='full' flexShrink={0}>
			<Container
				as={Stack}
				maxW='container.xl'
				py={16}
				direction={{ base: 'column', md: 'row' }}
				spacing={4}
				justify={{ base: 'center', md: 'space-between' }}
				align={{ base: 'center', md: 'center' }}
			>
				<SimpleGrid
					w='full'
					templateColumns={{ sm: '1fr 1fr', md: '3fr 2fr 2fr 2fr' }}
					spacing={8}
				>
					<Stack
						direction={'column'}
						justify={'flex-start'}
						align={'flex-start'}
						pr={8}
					>
						<Flex alignItems='center' justifyContent='start'>
							<Image
								src='/logo.png'
								width={40}
								height={40}
								alt='Herald Logo'
							/>
							<Text
								fontSize='2xl'
								fontWeight='bold'
								color={useColorModeValue('gray.900', 'white')}
								ml={2}
							>
								Herald
							</Text>
						</Flex>
						<Text fontSize='lg' lineHeight='taller'>
							All-in-one solution to announce product updates and
							get feedback.
						</Text>
					</Stack>
					<Stack d='none' align={'flex-start'}>
						<ListHeader>Product</ListHeader>
						<Link href='/features'>Features</Link>
						<Link href='/pricing'>Pricing</Link>
						<Link
							href='https://meta.useherald.com/changelog'
							isExternal={true}
						>
							Our Changelog
						</Link>
						<Link
							href='https://meta.useherald.com/roadmap'
							isExternal={true}
						>
							Our Roadmap
						</Link>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>Resources</ListHeader>
						<Link href='/docs'>Docs</Link>
						<Link href='/blog'>Blog</Link>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>Community</ListHeader>
						<Link
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/opencatalysts/herald/'
						>
							Source Code
						</Link>
						<Link
							target='_blank'
							rel='noopener noreferrer'
							href='https://github.com/opencatalysts/herald/issues'
						>
							Issues
						</Link>
					</Stack>
					<Stack align={'flex-start'}>
						<ListHeader>Subscribe to our newsletter</ListHeader>
						<SubscriptionForm />
					</Stack>
				</SimpleGrid>
			</Container>
			<Container
				as={Stack}
				maxW='container.xl'
				py={4}
				direction={{ base: 'column', md: 'row' }}
				spacing={4}
				justify={{ base: 'center', md: 'space-between' }}
				align={{ base: 'center', md: 'center' }}
			>
				<Text>
					© 2021{' '}
					<chakra.a
						color='brand.200'
						href='https://opencatalysts.tech'
						target='_blank'
						rel='noopener noreferrer'
					>
						Open Catalysts
					</chakra.a>
					. All rights reserved
				</Text>
				<Stack direction={'row'} spacing={6}>
					<SocialButton
						label={'Twitter'}
						href={'https://twitter.com/OpenCatalysts'}
					>
						<FaTwitter />
					</SocialButton>
					<SocialButton
						label={'GitHub'}
						href={'https://github.com/opencatalysts'}
					>
						<FaGithub />
					</SocialButton>
				</Stack>
			</Container>
		</chakra.footer>
	);
};

export default Footer;
