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
	useDisclosure,
	CloseButton,
	VStack,
	Button,
	useColorMode,
	Icon,
} from '@chakra-ui/react';
// import { Herald } from '@useherald/react-widget';
import {
	AiFillGithub,
	AiFillHome,
	AiOutlineInbox,
	AiOutlineMenu,
} from 'react-icons/ai';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { FaMoon, FaSun } from 'react-icons/fa'; // FaBell

export default function Header() {
	const { toggleColorMode: toggleMode } = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);
	const bg = useColorModeValue('white', 'gray.800');
	const ref = React.useRef();

	const mobileNav = useDisclosure();

	const MobileNavContent = (
		<VStack
			pos='absolute'
			top={0}
			left={0}
			right={0}
			display={mobileNav.isOpen ? 'flex' : 'none'}
			flexDirection='column'
			p={2}
			pb={4}
			m={2}
			bg={bg}
			spacing={3}
			rounded='sm'
			shadow='sm'
		>
			<CloseButton
				aria-label='Close menu'
				justifySelf='self-start'
				onClick={mobileNav.onClose}
			/>
			<Button w='full' variant='ghost' leftIcon={<AiFillHome />}>
				Dashboard
			</Button>
			<Button
				w='full'
				variant='solid'
				colorScheme='brand'
				leftIcon={<AiOutlineInbox />}
			>
				Inbox
			</Button>
			<Button
				w='full'
				variant='ghost'
				leftIcon={<BsFillCameraVideoFill />}
			>
				Videos
			</Button>
		</VStack>
	);
	return (
		<React.Fragment>
			<chakra.header
				d='flex'
				ref={ref}
				transition='box-shadow 0.2s'
				bg={bg}
				w='full'
				h='6rem'
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
									aria-label='Go to Herald GitHub page'
									href='https://github.com/opencatalysts/herald'
								>
									<Icon
										as={AiFillGithub}
										display='block'
										size='md'
										fontSize='lg'
										transition='color 0.2s'
										_hover={{ color: 'gray.600' }}
									/>
								</Link>
								<IconButton
									size='md'
									fontSize='lg'
									aria-label={`Switch to ${text} mode`}
									variant='ghost'
									color='current'
									onClick={toggleMode}
									icon={<SwitchIcon />}
									transition='color 0.2s'
									_hover={{ color: 'gray.600' }}
								/>
								{/*<Herald*/}
								{/*	baseUrl='http://localhost:3001'*/}
								{/*	icon={<FaBell />}*/}
								{/*	userId='71900427-a160-4ed2-b13c-0af51c646878'*/}
								{/*/>*/}
								<NextLink href='/app' passHref={true}>
									<Button
										as='a'
										colorScheme='brand'
										variant='solid'
										size='sm'
									>
										Sign In
									</Button>
								</NextLink>
							</HStack>
							<IconButton
								display={{ base: 'flex', md: 'none' }}
								aria-label='Open menu'
								fontSize='20px'
								color={useColorModeValue('gray.800', 'inherit')}
								variant='ghost'
								icon={<AiOutlineMenu />}
								onClick={mobileNav.onOpen}
							/>
						</Flex>
					</Flex>
					{MobileNavContent}
				</chakra.div>
			</chakra.header>
		</React.Fragment>
	);
}
