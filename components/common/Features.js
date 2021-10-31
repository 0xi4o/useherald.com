import React from 'react';
import {
	Box,
	chakra,
	Flex,
	List,
	ListIcon,
	ListItem,
	SimpleGrid,
	useColorModeValue,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

export default function Features() {
	return (
		<Flex
			py={16}
			w='full'
			maxW='container.xl'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
			borderRadius='lg'
		>
			<Box
				w='3xl'
				d='flex'
				flexDirection='column'
				alignItems='center'
				textAlign='center'
				mb={4}
			>
				<chakra.h2
					mb={3}
					fontSize={{ base: '2xl', md: '3xl' }}
					fontWeight='extrabold'
					color={useColorModeValue('black')}
					lineHeight='shorter'
					letterSpacing='tight'
				>
					All-in-one solution
				</chakra.h2>
				<chakra.p
					mb={6}
					fontSize={{ base: 'lg', md: 'xl' }}
					color={useColorModeValue('gray.800', 'gray.200')}
				>
					{/* TODO: Maybe use something not so redundant */}
					Manage your waiting lists, release notes, roadmap, and
					feedback
				</chakra.p>
			</Box>
			<Box px={8} py={20} mx='auto'>
				<SimpleGrid
					alignItems='start'
					columns={{ base: 1, md: 2 }}
					mb={24}
					spacingY={{ base: 10, md: 32 }}
					spacingX={{ base: 10, md: 24 }}
				>
					<Box>
						<chakra.h2
							mb={4}
							fontSize={{ base: '2xl', md: '4xl' }}
							fontWeight='extrabold'
							letterSpacing='tight'
							textAlign={{ base: 'center', md: 'left' }}
							color={useColorModeValue('gray.900', 'gray.400')}
							lineHeight={{ md: 'shorter' }}
							textShadow='2px 0 currentcolor'
						>
							Changelog Page and Widget
						</chakra.h2>
						<List spacing={4}>
							<ListItem
								fontSize='lg'
								color={useColorModeValue(
									'gray.500',
									'gray.400'
								)}
							>
								<ListIcon
									as={MdCheckCircle}
									color='green.500'
								/>
								Dedicated page for your release notes under your
								domain
							</ListItem>
							<ListItem
								fontSize='lg'
								color={useColorModeValue(
									'gray.500',
									'gray.400'
								)}
							>
								<ListIcon
									as={MdCheckCircle}
									color='green.500'
								/>
								Embeddable widget with unread badges
							</ListItem>
							<ListItem
								fontSize='lg'
								color={useColorModeValue(
									'gray.500',
									'gray.400'
								)}
							>
								<ListIcon
									as={MdCheckCircle}
									color='green.500'
								/>
								Custom release notes template
							</ListItem>
						</List>
						{/*<Button*/}
						{/*	w={{ base: "full", sm: "auto" }}*/}
						{/*	size="lg"*/}
						{/*	bg={useColorModeValue("gray.900", "gray.700")}*/}
						{/*	_hover={{ bg: useColorModeValue("gray.700", "gray.600") }}*/}
						{/*	color={useColorModeValue("gray.100", "gray.200")}*/}
						{/*	as="a"*/}

						{/*>*/}
						{/*	Learn More*/}
						{/*</Button>*/}
					</Box>
					<Box
						w='full'
						h='full'
						py={48}
						bg={useColorModeValue('gray.200', 'gray.700')}
					></Box>
				</SimpleGrid>
				<SimpleGrid
					alignItems='center'
					columns={{ base: 1, md: 2 }}
					flexDirection='column-reverse'
					mb={24}
					spacingY={{ base: 10, md: 32 }}
					spacingX={{ base: 10, md: 24 }}
				>
					<Box order={{ base: 'none', md: 2 }}>
						<chakra.h2
							mb={4}
							fontSize={{ base: '2xl', md: '4xl' }}
							fontWeight='extrabold'
							letterSpacing='tight'
							textAlign={{ base: 'center', md: 'left' }}
							color={useColorModeValue('gray.900', 'gray.400')}
							lineHeight={{ md: 'shorter' }}
						>
							Product Roadmap
						</chakra.h2>
						<List spacing={4}>
							<ListItem
								fontSize='lg'
								color={useColorModeValue(
									'gray.500',
									'gray.400'
								)}
							>
								<ListIcon
									as={MdCheckCircle}
									color='green.500'
								/>
								Feature requests from users with voting and
								comments
							</ListItem>
							<ListItem
								fontSize='lg'
								color={useColorModeValue(
									'gray.500',
									'gray.400'
								)}
							>
								<ListIcon
									as={MdCheckCircle}
									color='green.500'
								/>
								Automatically add completed features to a draft
								release note
							</ListItem>
						</List>
						{/*<Button*/}
						{/*	w={{ base: "full", sm: "auto" }}*/}
						{/*	size="lg"*/}
						{/*	bg={useColorModeValue("gray.900", "gray.700")}*/}
						{/*	_hover={{ bg: useColorModeValue("gray.700", "gray.600") }}*/}
						{/*	color={useColorModeValue("gray.100", "gray.200")}*/}
						{/*	as="a"*/}

						{/*>*/}
						{/*	Learn More*/}
						{/*</Button>*/}
					</Box>
					<Box
						w='full'
						h='full'
						py={48}
						bg={useColorModeValue('gray.200', 'gray.700')}
					></Box>
				</SimpleGrid>
				<SimpleGrid
					alignItems='start'
					columns={{ base: 1, md: 2 }}
					mb={24}
					spacingY={{ base: 10, md: 32 }}
					spacingX={{ base: 10, md: 24 }}
				>
					<Box>
						<chakra.h2
							mb={4}
							fontSize={{ base: '2xl', md: '4xl' }}
							fontWeight='extrabold'
							letterSpacing='tight'
							textAlign={{ base: 'center', md: 'left' }}
							color={useColorModeValue('gray.900', 'gray.400')}
							lineHeight={{ md: 'shorter' }}
							textShadow='2px 0 currentcolor'
						>
							Banners
						</chakra.h2>
						<List spacing={4}>
							<ListItem
								fontSize='lg'
								color={useColorModeValue(
									'gray.500',
									'gray.400'
								)}
							>
								<ListIcon
									as={MdCheckCircle}
									color='green.500'
								/>
								Feature important announcements on your landing
								page and inside your web application
							</ListItem>
							<ListItem
								fontSize='lg'
								color={useColorModeValue(
									'gray.500',
									'gray.400'
								)}
							>
								<ListIcon
									as={MdCheckCircle}
									color='green.500'
								/>
								Fully customizable to fit your brand
							</ListItem>
							<ListItem
								fontSize='lg'
								color={useColorModeValue(
									'gray.500',
									'gray.400'
								)}
							>
								<ListIcon
									as={MdCheckCircle}
									color='green.500'
								/>
								Different banner types based on where you want
								to show them
							</ListItem>
						</List>
						{/*<Button*/}
						{/*	w={{ base: "full", sm: "auto" }}*/}
						{/*	size="lg"*/}
						{/*	bg={useColorModeValue("gray.900", "gray.700")}*/}
						{/*	_hover={{ bg: useColorModeValue("gray.700", "gray.600") }}*/}
						{/*	color={useColorModeValue("gray.100", "gray.200")}*/}
						{/*	as="a"*/}

						{/*>*/}
						{/*	Learn More*/}
						{/*</Button>*/}
					</Box>
					<Box
						w='full'
						h='full'
						py={48}
						bg={useColorModeValue('gray.200', 'gray.700')}
					></Box>
				</SimpleGrid>
				<SimpleGrid
					alignItems='center'
					columns={{ base: 1, md: 2 }}
					flexDirection='column-reverse'
					mb={24}
					spacingY={{ base: 10, md: 32 }}
					spacingX={{ base: 10, md: 24 }}
				>
					<Box order={{ base: 'none', md: 2 }}>
						<chakra.h2
							mb={4}
							fontSize={{ base: '2xl', md: '4xl' }}
							fontWeight='extrabold'
							letterSpacing='tight'
							textAlign={{ base: 'center', md: 'left' }}
							color={useColorModeValue('gray.900', 'gray.400')}
							lineHeight={{ md: 'shorter' }}
						>
							Waitlist Management
						</chakra.h2>
						<List spacing={4}>
							<ListItem
								fontSize='lg'
								color={useColorModeValue(
									'gray.500',
									'gray.400'
								)}
							>
								<ListIcon
									as={MdCheckCircle}
									color='green.500'
								/>
								Collect emails to measure interest for new
								products and major releases
							</ListItem>
							<ListItem
								fontSize='lg'
								color={useColorModeValue(
									'gray.500',
									'gray.400'
								)}
							>
								<ListIcon
									as={MdCheckCircle}
									color='green.500'
								/>
								Generate invite codes at the click of a button
							</ListItem>
							<ListItem
								fontSize='lg'
								color={useColorModeValue(
									'gray.500',
									'gray.400'
								)}
							>
								<ListIcon
									as={MdCheckCircle}
									color='green.500'
								/>
								Provide access in phases by limiting how many
								users get access
							</ListItem>
						</List>
						{/*<Button*/}
						{/*	w={{ base: "full", sm: "auto" }}*/}
						{/*	size="lg"*/}
						{/*	bg={useColorModeValue("gray.900", "gray.700")}*/}
						{/*	_hover={{ bg: useColorModeValue("gray.700", "gray.600") }}*/}
						{/*	color={useColorModeValue("gray.100", "gray.200")}*/}
						{/*	as="a"*/}

						{/*>*/}
						{/*	Learn More*/}
						{/*</Button>*/}
					</Box>
					<Box
						w='full'
						h='full'
						py={48}
						bg={useColorModeValue('gray.200', 'gray.700')}
					></Box>
				</SimpleGrid>
			</Box>
		</Flex>
	);
}
