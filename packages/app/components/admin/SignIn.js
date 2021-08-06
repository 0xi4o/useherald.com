import { useState } from 'react';
import NextLink from 'next/link';
import {
	chakra,
	Alert,
	AlertDescription,
	Box,
	FormControl,
	FormLabel,
	Input,
	Link,
	Stack,
	Button,
	Heading,
	useColorModeValue,
} from '@chakra-ui/react';
import { supabase } from '../../lib/supabaseClient';
import AuthLayout from '../../components/layouts/Auth';

const SignIn = () => {
	const [alertObject, setAlertObject] = useState(null);
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(false);

	const handleLogin = async (email) => {
		setLoading(true);
		const { user, session, error } = await supabase.auth.signIn(
			{ email },
			{ redirectTo: 'http://localhost:3000/admin' }
		);
		console.log(user);
		console.log(session);
		if (error) {
			setAlertObject({
				status: 'error',
				message: error?.error_description || error?.message,
			});
		} else {
			setAlertObject({
				status: 'success',
				message: 'Check your email for a login link',
			});
		}
		setLoading(false);
	};

	return (
		<AuthLayout>
			<Stack
				w='full'
				alignItems='center'
				justifyContent='center'
				flex='1'
				spacing={8}
				mx={'auto'}
				py={32}
				px={6}
			>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'}>Login to Herald</Heading>
				</Stack>
				<Box
					w='400px'
					rounded={'lg'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'lg'}
					px={6}
					py={8}
				>
					<Stack spacing={4}>
						<FormControl id='email'>
							<FormLabel>Email address</FormLabel>
							<Input
								h={12}
								onChange={(e) => setEmail(e.target.value)}
								placeholder='Your Email'
								type='email'
								value={email}
							/>
						</FormControl>
						<Button
							colorScheme='brand'
							h={12}
							isLoading={loading}
							loadingText='Signing In'
							onClick={async (e) => {
								e.preventDefault();
								await handleLogin(email);
							}}
						>
							Login
						</Button>
						{alertObject ? (
							<Alert status={alertObject.status}>
								<AlertDescription>
									{alertObject.message}
								</AlertDescription>
							</Alert>
						) : null}
					</Stack>
				</Box>
				<chakra.span>
					New here?{' '}
					<Link color='brand.200'>
						<NextLink href='/signup'>Create a new account</NextLink>
					</Link>
					.
				</chakra.span>
			</Stack>
		</AuthLayout>
	);
};

export default SignIn;
