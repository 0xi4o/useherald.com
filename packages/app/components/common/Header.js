import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import {
	chakra,
	Avatar,
	Button,
	Flex,
	HStack,
	IconButton,
	Link,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { supabase } from '../../lib/supabaseClient';
import config from '../../herald.config';

const Header = () => {
	const user = supabase.auth.user();
	const { toggleColorMode: toggleMode } = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);
	const bg = useColorModeValue('white', 'gray.800');
	const ref = React.useRef();

	console.log(user);

	async function handleSignOut() {
		await supabase.auth.signOut();
	}

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
					maxW='container.md'
				>
					<Flex
						w='full'
						h='full'
						p={0}
						alignItems='center'
						justifyContent='space-between'
					>
						<Flex align='flex-start'>
							<Link href='/'>
								<HStack>
									<Image
										src={config.logoIcon}
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
										{config.name}
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
									{user ? (
										<Menu placement='bottom-end'>
											<MenuButton
												as={Button}
												p={0}
												bg='transparent'
											>
												<Avatar
													size='md'
													name='Ilango Rajagopal'
													src='https://bit.ly/tioluwani-kolawole'
												/>
											</MenuButton>
											<MenuList>
												<MenuItem>Settings</MenuItem>
												<MenuDivider />
												<MenuItem
													onClick={handleSignOut}
												>
													Logout
												</MenuItem>
											</MenuList>
										</Menu>
									) : (
										<Button
											colorScheme='brand'
											size='sm'
											variant='solid'
										>
											Sign In
										</Button>
									)}
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
