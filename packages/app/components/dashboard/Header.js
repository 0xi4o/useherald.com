import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import {
	chakra,
	HStack,
	Link,
	Flex,
	IconButton,
	useColorModeValue,
	Button,
	useColorMode,
	Icon,
} from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
	const { toggleColorMode: toggleMode } = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);
	const bg = useColorModeValue('white', 'gray.800');
	const ref = React.useRef();

	return (
		<React.Fragment>
			<chakra.header
				d='flex'
				ref={ref}
				transition='box-shadow 0.2s'
				bg={bg}
				w='full'
				h='6rem'
				overflowY='hidden'
				flexDirection='column'
			>
				<chakra.div
					d='flex'
					w='full'
					h='6rem'
					mx='auto'
					maxW='container.xl'
				>
					<Flex
						w='full'
						h='full'
						px='6'
						alignItems='center'
						justifyContent='space-between'
					>
						<Flex align='flex-start'>
							<Link href='/'>
								<HStack>
									<Image
										src='/logo.png'
										width={40}
										height={40}
									/>
									<chakra.span
										fontSize='xl'
										fontWeight='bold'
										color={useColorModeValue(
											'gray.900',
											'white'
										)}
									>
										Herald
									</chakra.span>
								</HStack>
							</Link>
						</Flex>
						<Flex
							justify='flex-end'
							align='center'
							color='gray.400'
						>
							<HStack
								spacing='5'
								display={{ base: 'none', md: 'flex' }}
							>
								<Link
									isExternal
									aria-label='Go to Choc UI GitHub page'
									href='https://github.com/ilangorajagopal/herald'
								>
									<Icon
										as={AiFillGithub}
										display='block'
										transition='color 0.2s'
										w='5'
										h='5'
										_hover={{ color: 'gray.600' }}
									/>
								</Link>
								<IconButton
									size='md'
									fontSize='lg'
									aria-label={`Switch to ${text} mode`}
									variant='ghost'
									color='current'
									ml={{ base: '0', md: '3' }}
									onClick={toggleMode}
									icon={<SwitchIcon />}
								/>
								<NextLink href='/docs' passHref={true}>
									<Button
										as='a'
										colorScheme='brand'
										variant='solid'
										size='sm'
									>
										Get Started
									</Button>
								</NextLink>
							</HStack>
						</Flex>
					</Flex>
				</chakra.div>
			</chakra.header>
		</React.Fragment>
	);
};

export default Header;
