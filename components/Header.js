import React from 'react';
import Image from 'next/image';
import {
	chakra,
	HStack,
	Link,
	Box,
	Flex,
	IconButton,
	useColorModeValue,
	useDisclosure,
	CloseButton,
	VStack,
	Button,
	useColorMode,
	SimpleGrid,
	Stack,
	Icon,
} from '@chakra-ui/react';
import { useViewportScroll } from 'framer-motion';
import {
	AiFillGithub,
	AiFillHome,
	AiOutlineInbox,
	AiOutlineMenu,
} from 'react-icons/ai';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Header(props) {
	const { toggleColorMode: toggleMode } = useColorMode();
	const text = useColorModeValue('dark', 'light');
	const SwitchIcon = useColorModeValue(FaMoon, FaSun);
	const bg = useColorModeValue('white', 'gray.800');
	const ref = React.useRef();
	const [y, setY] = React.useState(0);
	const { height = 0 } = ref.current
		? ref.current.getBoundingClientRect()
		: {};

	const { scrollY } = useViewportScroll();
	React.useEffect(() => {
		return scrollY.onChange(() => setY(scrollY.get()));
	}, [scrollY]);
	const cl = useColorModeValue('gray.800', 'white');
	const mobileNav = useDisclosure();

	const Section = (props) => {
		const ic = useColorModeValue('brand.600', 'brand.50');
		const hbg = useColorModeValue('gray.50', 'brand.400');
		const tcl = useColorModeValue('gray.900', 'gray.50');
		const dcl = useColorModeValue('gray.500', 'gray.50');
		return (
			<Link
				m={-3}
				p={3}
				display='flex'
				alignItems='start'
				rounded='lg'
				_hover={{ bg: hbg }}
			>
				<chakra.svg
					flexShrink={0}
					h={6}
					w={6}
					color={ic}
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'
					aria-hidden='true'
				>
					{props.icon}
				</chakra.svg>
				<Box ml={4}>
					<chakra.p fontSize='sm' fontWeight='700' color={tcl}>
						{props.title}
					</chakra.p>
					<chakra.p mt={1} fontSize='sm' color={dcl}>
						{props.children}
					</chakra.p>
				</Box>
			</Link>
		);
	};

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
				ref={ref}
				shadow={y > height ? 'sm' : undefined}
				transition='box-shadow 0.2s'
				bg={bg}
				w='full'
				overflowY='hidden'
				borderBottomWidth={2}
				borderBottomColor={useColorModeValue('gray.200', 'gray.900')}
			>
				<chakra.div h='4.5rem' mx='auto' maxW='container.xl'>
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
								<Button
									colorScheme='brand'
									variant='solid'
									size='sm'
								>
									Get Started
								</Button>
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
