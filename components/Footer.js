import Image from 'next/image';
import {
	chakra,
	Container,
	Stack,
	Text,
	useColorModeValue,
	VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

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
				py={4}
				direction={{ base: 'column', md: 'row' }}
				spacing={4}
				justify={{ base: 'center', md: 'space-between' }}
				align={{ base: 'center', md: 'center' }}
			>
				<Image src='/logo.png' width={40} height={40} />
				<Text>© 2020 Ilango Rajagopal. All rights reserved</Text>
				<Stack direction={'row'} spacing={6}>
					<SocialButton label={'Twitter'} href={'#'}>
						<FaTwitter />
					</SocialButton>
					<SocialButton label={'YouTube'} href={'#'}>
						<FaYoutube />
					</SocialButton>
				</Stack>
			</Container>
		</chakra.footer>
	);
};

export default Footer;
