import React from 'react';
import {
	chakra,
	Box,
	useColorModeValue,
	Flex,
	Button,
	HStack,
} from '@chakra-ui/react';

const Hero = () => {
	return (
		<Flex maxW='container.xl' px={4} py={32} justifyContent='start'>
			<Box w={{ lg: 10 / 12, xl: 8 / 12 }}>
				<chakra.h1
					mb={3}
					fontSize={{ base: '3xl', md: '4xl' }}
					fontWeight='bold'
					lineHeight='tall'
					color={useColorModeValue('gray.900', 'white')}
				>
					Simple, open-source platform to announce product updates
				</chakra.h1>
				<chakra.p
					mb={5}
					color='gray.500'
					fontSize={{ md: 'lg' }}
					lineHeight='tall'
				>
					Today every company needs apps to engage their customers and
					run their businesses. Claas is a changelog-as-a-service
					application to announce product updates to increase feature
					adoption, user satisfaction and grow revenue faster.
				</chakra.p>
				<HStack>
					<Button
						as='a'
						w={{ base: 'full', sm: 'auto' }}
						variant='solid'
						colorScheme='brand'
						size='lg'
						mb={{ base: 2, sm: 0 }}
					>
						Get Started
					</Button>
					<Button
						as='a'
						w={{ base: 'full', sm: 'auto' }}
						mb={{ base: 2, sm: 0 }}
						size='lg'
					>
						Docs
					</Button>
				</HStack>
			</Box>
		</Flex>
	);
};

export default Hero;
