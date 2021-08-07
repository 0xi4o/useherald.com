import NextLink from 'next/link';
import { chakra, Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import DefaultLayout from '../layouts/Default';

export default function Main() {
	return (
		<DefaultLayout>
			<VStack py={16} w='full' spacing={8}>
				<Box w='full' mb={4}>
					<NextLink href='/admin/new'>
						<Button>Add Update</Button>
					</NextLink>
				</Box>
				<VStack w='full' spacing={5}>
					<Box w='full'>
						<Heading as='h2' mb={4}>
							Changelog #1
						</Heading>
						<chakra.div
							d='flex'
							alignItems='center'
							justifyContent='start'
							mb={8}
							w='full'
						>
							<Text fontSize='md'>Ilango Rajagopal</Text>
							&nbsp;&nbsp;&middot;&nbsp;&nbsp;
							<Text fontSize='md'>7 minutes ago</Text>
						</chakra.div>
						<Text fontSize='lg' lineHeight='tall'>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Lobortis scelerisque fermentum
							dui faucibus. Velit egestas dui id ornare arcu odio
							ut. At auctor urna nunc id cursus metus aliquam.
							Cursus sit amet dictum sit amet justo. Eros donec ac
							odio tempor orci. Aenean pharetra magna ac placerat
							vestibulum lectus mauris ultrices eros. Ultricies
							integer quis auctor elit sed. Rhoncus mattis rhoncus
							urna neque viverra justo. Sagittis aliquam malesuada
							bibendum arcu vitae. Amet venenatis urna cursus
							eget. Arcu risus quis varius quam. Scelerisque eu
							ultrices vitae auctor eu augue ut lectus arcu. Neque
							gravida in fermentum et. Diam vel quam elementum
							pulvinar etiam non quam lacus suspendisse. Aenean
							euismod elementum nisi quis eleifend quam
							adipiscing.
						</Text>
					</Box>
				</VStack>
			</VStack>
		</DefaultLayout>
	);
}
