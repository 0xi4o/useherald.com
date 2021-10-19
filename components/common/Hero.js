import { useState } from 'react';
import NextImage from 'next/image';
import {
	chakra,
	Alert,
	AlertDescription,
	Button,
	CloseButton,
	Flex,
	FormControl,
	Input,
	useColorModeValue,
} from '@chakra-ui/react';
import { Formik } from 'formik';

const Hero = () => {
	const [loading, setLoading] = useState(false);
	const [waitlistCount, setWaitlistCount] = useState(0);

	async function updateWaitlist(email) {
		const response = await fetch('/api/waitlist', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email }),
		});
		const { data } = await response.json();
		setWaitlistCount(data.number);
	}

	return (
		<Flex
			flexDirection='column'
			alignItems='center'
			maxW='container.xl'
			px={4}
			py={32}
		>
			<Flex
				w='5xl'
				flexDirection='column'
				alignItems='center'
				textAlign='center'
				mb={16}
			>
				<chakra.h1
					mb={3}
					fontSize={{ base: '4xl', md: '5xl' }}
					fontWeight='bold'
					lineHeight='tall'
					color={useColorModeValue('gray.900', 'white')}
				>
					Easiest way to increase feature adoption
				</chakra.h1>
				<chakra.p
					mb={5}
					fontSize={{ base: 'lg', md: 'xl' }}
					lineHeight='tall'
				>
					Keep your customers up-to-date about your product and
					company, right in your web app.
				</chakra.p>
				<Formik
					initialValues={{ email: '' }}
					onSubmit={async (values) => {
						setLoading(true);
						await updateWaitlist(values.email);
						setLoading(false);
					}}
				>
					{(formik) => (
						<chakra.form
							w='md'
							d='flex'
							justifyContent='center'
							onSubmit={formik.handleSubmit}
						>
							<FormControl w='70%' textAlign='left'>
								<Input
									h={12}
									variant={'solid'}
									color={useColorModeValue(
										'black.100',
										'white.100'
									)}
									_placeholder={{
										color: 'gray.400',
									}}
									border={0}
									bg={useColorModeValue(
										'blackAlpha.100',
										'whiteAlpha.100'
									)}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.email}
									name='email'
									type='email'
									required
									placeholder={'Your Email'}
									aria-label={'Your Email'}
								/>
							</FormControl>
							<FormControl w='30%' ml={4}>
								<Button
									colorScheme='brand'
									h={12}
									w='100%'
									type='submit'
									name='join_waitlist'
									id='join_waitlist'
									isLoading={loading}
								>
									Join Waitlist
								</Button>
							</FormControl>
						</chakra.form>
					)}
				</Formik>
				<chakra.span
					d='flex'
					justifyContent='center'
					fontSize='md'
					mt={2}
					textAlign='center'
				>
					Get notified when we launch.
				</chakra.span>
				{waitlistCount ? (
					<Alert
						d='flex'
						justifyContent='center'
						maxW='container.sm'
						borderRadius='lg'
						mt={4}
						position='relative'
						status='success'
					>
						<AlertDescription
							mr={4}
						>{`Thank you for joining the waitlist! You're currently at #${waitlistCount}`}</AlertDescription>
						<CloseButton
							onClick={() => setWaitlistCount(0)}
							position='absolute'
							right='1rem'
						/>
					</Alert>
				) : null}
			</Flex>
			<Flex mt={8}>
				<NextImage
					src='/herald-hero-image.png'
					width='1024'
					height='600'
					alt='Herald Product Image'
				/>
			</Flex>
		</Flex>
	);
};

export default Hero;
