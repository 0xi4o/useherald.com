import Image from 'next/image';
import {
	chakra,
	Box,
	Container,
	Link,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
	HStack,
} from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import React from 'react';
import config from '../../herald.config';

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
				py={8}
				spacing={4}
				justify={'center'}
				align={'center'}
			>
				<Link href='/'>
					<HStack>
						<Image src={config.logoIcon} width={24} height={24} />
						<chakra.span
							fontSize='lg'
							fontWeight='bold'
							color={useColorModeValue('gray.900', 'white')}
						>
							{config.name}
						</chakra.span>
					</HStack>
				</Link>
				<Stack direction={'row'} spacing={6}>
					{config?.footerLinks?.map((item, index) => (
						<Link href={item.link} key={index}>
							{item.label}
						</Link>
					))}
				</Stack>
			</Container>

			<Box
				borderTopWidth={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.700')}
			>
				<Container
					as={Stack}
					maxW='container.xl'
					py={4}
					direction={{ base: 'column', md: 'row' }}
					spacing={4}
					justify={{ base: 'center', md: 'space-between' }}
					align={{ base: 'center', md: 'center' }}
				>
					<Text
						d='flex'
						alignItems='center'
						justifyContent='center'
						fontSize='xs'
						color={useColorModeValue('gray.600', 'gray.400')}
					>
						Powered by
						<chakra.a
							d='flex'
							alignItems='center'
							ml={1}
							href='https://herald.opencatalysts.tech/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Image
								src={config.logoIcon}
								width={16}
								height={16}
							/>
						</chakra.a>
					</Text>
					<Stack direction={'row'} spacing={6}>
						<SocialButton
							label={'Twitter'}
							href={config?.social?.twitter}
						>
							<FaTwitter />
						</SocialButton>
					</Stack>
				</Container>
			</Box>
		</chakra.footer>
	);
};

export default Footer;
