import NextLink from 'next/link';
import {
	chakra,
	Box,
	useColorModeValue,
	Flex,
	Button,
	HStack,
} from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

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
					Herald is a changelog-as-a-service application to announce
					product updates to increase feature adoption, user
					satisfaction and grow revenue faster.
				</chakra.p>
				<HStack spacing={4}>
					<NextLink href='/docs' passHref={true}>
						<Button
							as='a'
							w={{ base: 'full', sm: 'auto' }}
							variant='solid'
							colorScheme='brand'
							size='lg'
							mb={{ base: 2, sm: 0 }}
							p={8}
							fontSize='xl'
							cursor='pointer'
						>
							Get Started
						</Button>
					</NextLink>
					<Button
						as='a'
						bg={useColorModeValue('gray.500', 'gray.600')}
						w={{ base: 'full', sm: 'auto' }}
						mb={{ base: 2, sm: 0 }}
						p={8}
						size='lg'
						fontSize='xl'
						leftIcon={<AiFillGithub />}
						target='__blank'
						cursor='pointer'
						href='https://github.com/ilangorajagopal/herald'
					>
						GitHub
					</Button>
				</HStack>
			</Box>
		</Flex>
	);
};

export default Hero;
