import React, { useState } from 'react';
import {
	chakra,
	Badge,
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Icon,
	Link,
	SimpleGrid,
	Text,
	Stack,
	Switch,
	useColorModeValue,
} from '@chakra-ui/react';

export default function Component() {
	const [isAnnualBilling, setIsAnnualBilling] = useState(false);
	const bottomBg = useColorModeValue('white', 'gray.800');

	const Feature = (props) => {
		return (
			<Flex align='center'>
				<Flex shrink={0}>
					<Icon
						boxSize={5}
						mt={1}
						mr={2}
						color={useColorModeValue('brand.500', 'brand.300')}
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path
							fillRule='evenodd'
							d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
							clipRule='evenodd'
						/>
					</Icon>
				</Flex>
				<Box ml={4}>
					<chakra.span
						mt={2}
						color={useColorModeValue('gray.500', 'gray.400')}
					>
						{props.children}
					</chakra.span>
				</Box>
			</Flex>
		);
	};

	return (
		<Flex
			id='pricing'
			w='full'
			maxW='container.xl'
			h='auto'
			py={32}
			flexDirection='column'
			alignItems='center'
			justifyContent='center'
		>
			<chakra.div maxW='container.xl' mb={4} textAlign='center'>
				<Text
					mb={2}
					fontSize='5xl'
					fontWeight='bold'
					lineHeight='tight'
					bgGradient='linear(to-r, brand.300, brand.600)'
					bgClip='text'
				>
					Simple, Transparent pricing
				</Text>
			</chakra.div>
			<Flex
				w='full'
				mx='auto'
				mb={8}
				rounded='md'
				shadow='xl'
				textAlign='left'
				direction={{ base: 'column', lg: 'row' }}
				borderRadius='lg'
				overflow='hidden'
			>
				<Stack spacing={8} p='45px' flex='0.7' bg={bottomBg}>
					<Text fontSize='3xl' fontWeight='bold' lineHeight='tight'>
						Pro Membership
					</Text>
					<chakra.p
						fontSize={['sm', 'md']}
						color={useColorModeValue('gray.600', 'gray.400')}
					>
						One plan for any organization—from solo makers to
						startups.
					</chakra.p>
					<Flex align='center'>
						<Text
							fontFamily='body'
							whiteSpace='nowrap'
							fontWeight='semibold'
							textTransform='uppercase'
							color='brand.400'
						>
							What&apos;s included
						</Text>
						<Flex ml='15px' w='full' borderTopWidth='1px' h='3px' />
					</Flex>
					<SimpleGrid
						columns={[1, 2, 1, 2]}
						spacingX={4}
						spacingY={4}
					>
						<Feature>Unlimited Changelogs</Feature>
						<Feature>Unlimited Banners</Feature>
						<Feature>Custom Domain</Feature>
						<Feature>Team Management</Feature>
						<Feature>No Herald branding</Feature>
						<Feature>Scheduled Publishing</Feature>
						<Feature>Twitter Integration (Coming Soon)</Feature>
						<Feature>Slack Integration (Coming Soon)</Feature>
					</SimpleGrid>
				</Stack>
				<Stack
					p='45px'
					flex='0.3'
					justify='center'
					align='center'
					bg={useColorModeValue('#F9FAFB', 'gray.900')}
					borderRightRadius='md'
				>
					<FormControl
						display='flex'
						alignItems='center'
						justifyContent='center'
						mb={4}
					>
						<Switch
							colorScheme='brand'
							id='email-alerts'
							mx={2}
							onChange={(e) =>
								setIsAnnualBilling(e.target.checked)
							}
						/>
						<FormLabel
							fontSize='sm'
							htmlFor='email-alerts'
							mb='0'
							mr={0}
						>
							Save 20% with yearly billing
						</FormLabel>
					</FormControl>
					<Flex
						align='center'
						fontSize='5xl'
						fontWeight={['bold', 'extrabold']}
						lineHeight='tight'
					>
						{isAnnualBilling ? (
							<Text
								mb={2}
								fontSize='5xl'
								fontWeight={['bold', 'extrabold']}
								lineHeight='tight'
							>
								$120
								<chakra.span
									fontSize='2xl'
									fontWeight='medium'
									color={useColorModeValue(
										'gray.600',
										'gray.400'
									)}
								>
									{' '}
									/ year
								</chakra.span>
							</Text>
						) : (
							<Text
								mb={2}
								fontSize='5xl'
								fontWeight={['bold', 'extrabold']}
								lineHeight='tight'
							>
								$15
								<chakra.span
									fontSize='2xl'
									fontWeight='medium'
									color={useColorModeValue(
										'gray.600',
										'gray.400'
									)}
								>
									{' '}
									/ month
								</chakra.span>
							</Text>
						)}
					</Flex>
					<Stack spacing={6} textAlign='center'>
						<Text
							textDecor='underline'
							color={useColorModeValue('gray.600', 'gray.400')}
						>
							Learn more about our membership
						</Text>
						<Button w='300px' colorScheme='brand' py={6}>
							Try for free (14 days)
						</Button>
					</Stack>
				</Stack>
			</Flex>
			<Flex
				d='none'
				w='full'
				p={10}
				mt={5}
				rounded='md'
				bg={useColorModeValue('#F9FAFB', 'gray.700')}
				align='center'
				direction={['column', 'row']}
			>
				<Stack flex='0.8' pr={10}>
					<Badge
						mb={1}
						fontSize='xs'
						letterSpacing='wide'
						colorScheme='gray'
						fontWeight='medium'
						rounded='full'
						px={4}
						py={1}
						w='fit-content'
					>
						Discounted
					</Badge>
					<Text textAlign='left'>
						Free for student makers and open source projects. Please
						get in touch with me and provide proof of your status.
					</Text>
				</Stack>
				<Link
					w={['full', 'auto']}
					display='inline-flex'
					alignItems='center'
					justifyContent='center'
					px={5}
					py={3}
					mt={[5, 0]}
					border='solid transparent'
					fontWeight='semibold'
					rounded='md'
					shadow='md'
					h='fit-content'
					color={useColorModeValue('brand.600', 'white')}
					bg={useColorModeValue('white', 'gray.800')}
					_hover={{
						bg: useColorModeValue('brand.50', 'gray.900'),
					}}
					flex='0.2'
				>
					Contact Me
				</Link>
			</Flex>
		</Flex>
	);
}
