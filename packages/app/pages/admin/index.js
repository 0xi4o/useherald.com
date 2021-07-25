import { useState } from 'react';
import {
	Alert,
	AlertDescription,
	Box,
	FormControl,
	FormLabel,
	Input,
	Stack,
	Button,
	Heading,
	useColorModeValue,
} from '@chakra-ui/react';
import { supabase } from '../../lib/supabaseClient';
import AuthLayout from '../../components/layouts/Auth';

const Admin = () => {
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [alertObject, setAlertObject] = useState(null);

	const handleLogin = async (email) => {
		try {
			setLoading(true);
			const { response } = await supabase.auth.signIn({ email });
			if (response) {
				setAlertObject({
					status: 'success',
					message: 'Check your email for a login link',
				});
			}
		} catch (error) {
			setAlertObject({
				status: 'error',
				message: error?.error_description || error?.message,
			});
		} finally {
			setLoading(false);
		}
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
					<Heading fontSize={'4xl'}>Sign in to your account</Heading>
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
							Sign In
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
			</Stack>
		</AuthLayout>
	);
};

export default Admin;
