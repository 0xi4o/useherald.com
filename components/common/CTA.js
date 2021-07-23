import React from 'react';
import {
	chakra,
	Box,
	Button,
	Flex,
	useColorModeValue,
	Stack,
} from '@chakra-ui/react';

const CTA = () => {
	return (
		<Flex
			borderTopWidth={1}
			borderTopStyle='solid'
			borderTopColor={useColorModeValue('#F9FAFB', 'gray.700')}
			borderBottomWidth={1}
			borderBottomStyle='solid'
			borderBottomColor={useColorModeValue('#F9FAFB', 'gray.700')}
			p={50}
			w='full'
			alignItems='center'
			justifyContent='center'
		>
			<Box
				maxW='container.xl'
				w={{ md: '3xl', lg: '4xl' }}
				mx='auto'
				py={{ base: 12, lg: 16 }}
				px={{ base: 4, lg: 8 }}
				display={{ lg: 'flex' }}
				flexDirection='column'
				alignItems={{ lg: 'center' }}
				justifyContent={{ lg: 'center' }}
			>
				<chakra.h2
					fontSize={{ base: '3xl', sm: '4xl' }}
					fontWeight='extrabold'
					letterSpacing='tight'
					lineHeight='shorter'
					color={useColorModeValue('gray.900', 'gray.100')}
					mb={8}
					textAlign='center'
				>
					<chakra.span display='block'>Ready to dive in?</chakra.span>
					<chakra.span
						display='none'
						color={useColorModeValue('brand.600', 'gray.500')}
					>
						Start your free trial today.
					</chakra.span>
				</chakra.h2>
				<Stack
					direction={{ base: 'column', sm: 'row' }}
					mt={{ base: 8, lg: 0 }}
					shrink={{ lg: 0 }}
				>
					<Button
						p={6}
						border='solid transparent'
						fontWeight='bold'
						rounded='md'
						shadow='md'
						color={useColorModeValue('white', 'white')}
						colorScheme='brand'
					>
						Get started
					</Button>
				</Stack>
			</Box>
		</Flex>
	);
};

export default CTA;
