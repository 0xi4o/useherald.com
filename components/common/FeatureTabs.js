import React from 'react';
import NextImage from 'next/image';
import {
	Box,
	chakra,
	Flex,
	Icon,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { CgFeed } from 'react-icons/cg';
import { HiOutlineMap } from 'react-icons/hi';
import { GiTatteredBanner } from 'react-icons/gi';

export default function FeatureTabs() {
	return (
		<Flex
			id='product'
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
					Manage your changelog, roadmap, banners and waitlist
				</chakra.p>
			</Box>
			<Tabs
				w='full'
				d='flex'
				flexDirection='column'
				alignItems='center'
				justifyContent='center'
				variant='unstyled'
			>
				<TabList
					w='50%'
					d='grid'
					gridColumnGap={4}
					gridTemplateColumns='repeat(3, 1fr)'
					mb={8}
				>
					<Tab
						rounded='lg'
						_selected={{
							color: 'white',
							bg: 'brand.200',
							shadow: 'lg',
						}}
					>
						<Icon as={CgFeed} fontSize='xl' mr={2} />
						<Text fontSize='xl'>Changelog</Text>
					</Tab>
					<Tab
						rounded='lg'
						_selected={{
							color: 'white',
							bg: 'brand.200',
							shadow: 'lg',
						}}
					>
						<Icon as={HiOutlineMap} fontSize='xl' mr={2} />
						<Text fontSize='xl'>Roadmap</Text>
					</Tab>
					<Tab
						rounded='lg'
						_selected={{
							color: 'white',
							bg: 'brand.200',
							shadow: 'lg',
						}}
					>
						<Icon as={GiTatteredBanner} fontSize='xl' mr={2} />
						<Text fontSize='xl'>Banners</Text>
					</Tab>
					{/*<Tab rounded='lg' _selected={{ color: "white", bg: "brand.200", shadow: 'lg' }}>*/}
					{/*    <Icon as={CgFeed} />*/}
					{/*    <Text>Waitlist</Text>*/}
					{/*</Tab>*/}
				</TabList>

				<TabPanels w='full'>
					<TabPanel
						w='full'
						d='flex'
						alignItems='center'
						justifyContent='center'
					>
						<Box rounded='lg' shadow='lg' overflow='hidden'>
							<NextImage
								src='/images/changelog.png'
								width={1280}
								height={720}
							/>
						</Box>
					</TabPanel>
					<TabPanel
						w='full'
						d='flex'
						alignItems='center'
						justifyContent='center'
					>
						<Box rounded='lg' shadow='lg' overflow='hidden'>
							<NextImage
								src='/images/roadmap.png'
								width={1280}
								height={720}
							/>
						</Box>
					</TabPanel>
					<TabPanel
						w='full'
						d='flex'
						alignItems='center'
						justifyContent='center'
					>
						<Box rounded='lg' shadow='lg' overflow='hidden'>
							<NextImage
								src='/images/banner.png'
								width={1280}
								height={720}
							/>
						</Box>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Flex>
	);
}
