import { useEffect, useRef, useState } from 'react';
import {
	Avatar,
	Box,
	Button,
	FormControl,
	FormLabel,
	Image,
	Input,
	Skeleton,
	useToast,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import { supabase } from '../../../lib/supabaseClient';
import SettingsLayout from '../../../components/layouts/Settings';

function Account() {
	const [user, setUser] = useState(null);
	const [avatarUrl, setAvatarUrl] = useState(null);
	const [avatarUploading, setAvatarUploading] = useState(false);
	const [logoUrl, setLogoUrl] = useState(null);
	const [logoUploading, setLogoUploading] = useState(false);
	const avatarUploadInputRef = useRef(null);
	const logoUploadInputRef = useRef(null);
	const toast = useToast();

	useEffect(() => {
		async function fetchUserProfile(id) {
			const { data, error } = await supabase
				.from('profiles')
				.select()
				.match({ id })
				.single();

			if (data) {
				setUser(data);
				setAvatarUrl(data?.avatar_url);
				setLogoUrl(data?.company_logo);
			} else {
				console.log(error);
			}
		}

		const user = supabase.auth.user();
		fetchUserProfile(user?.id).then(() => {});
	}, []);

	function toggleAvatarUpload() {
		avatarUploadInputRef?.current?.click();
	}

	function toggleLogoUpload() {
		logoUploadInputRef?.current?.click();
	}

	async function uploadAvatar(event) {
		try {
			setAvatarUploading(true);

			if (!event.target.files || event.target.files.length === 0) {
				new Error('You must select an image to upload.');
			}

			const file = event.target.files[0];
			const fileExt = file.name.split('.').pop();
			const fileName = `${Math.random()}.${fileExt}`;
			const filePath = `public/${user.id}/avatar/${fileName}`;

			let { data, error } = await supabase.storage
				.from('assets')
				.upload(filePath, file);

			if (error) {
				throw error;
			}

			const { publicURL } = supabase.storage
				.from('assets')
				.getPublicUrl(data.Key);

			console.log(data.Key);
			console.log(publicURL);
			setAvatarUrl(publicURL);
		} catch (error) {
			alert(error.message);
		} finally {
			setAvatarUploading(false);
		}
	}

	async function uploadLogo(event) {
		try {
			setLogoUploading(true);

			if (!event.target.files || event.target.files.length === 0) {
				new Error('You must select an image to upload.');
			}

			const file = event.target.files[0];
			const fileExt = file.name.split('.').pop();
			const fileName = `${Math.random()}.${fileExt}`;
			const filePath = `public/${user.id}/logo/${fileName}`;

			let { error } = await supabase.storage
				.from('assets')
				.upload(filePath, file);

			if (error) {
				throw error;
			}

			const { publicURL } = supabase.storage
				.from('assets')
				.getPublicUrl(filePath);
			setLogoUrl(publicURL);
		} catch (error) {
			alert(error.message);
		} finally {
			setLogoUploading(false);
		}
	}

	return (
		<SettingsLayout>
			<Skeleton w='full' isLoaded={user}>
				<Formik
					initialValues={{
						name: user?.name || '',
						email: user?.email || '',
						company_name: user?.company_name || '',
						company_logo: user?.company_logo || '',
						website: user?.website || '',
					}}
					onSubmit={async (values) => {
						const update = {
							...values,
							avatar_url: avatarUrl,
							company_logo: logoUrl,
						};

						const { data, error } = await supabase
							.from('profiles')
							.update(update)
							.match({ id: user.id });

						if (data) {
							toast({
								title: 'Saved!',
								status: 'success',
								duration: 3000,
								isClosable: true,
								position: 'top-right',
							});
						} else {
							// throw error
							console.log(error);
						}
					}}
				>
					{(formik) => (
						<form onSubmit={formik.handleSubmit}>
							<FormControl id='avatar' mb={8}>
								<FormLabel>Avatar</FormLabel>
								<Box
									d='flex'
									flexDirection='column'
									alignItems='center'
									justifyContent='center'
									w='200px'
									h='200px'
									border={1}
									borderStyle='solid'
									borderColor='gray.300'
									borderRadius='lg'
								>
									{avatarUrl ? (
										<Image
											borderRadius='full'
											boxSize='96px'
											src={avatarUrl}
											alt={user?.name}
										/>
									) : (
										<Avatar size='xl' />
									)}
									<Button
										size='sm'
										onClick={toggleAvatarUpload}
										mt={4}
										colorScheme='brand'
										className='upload'
										overflow='hidden'
									>
										{avatarUploading
											? 'Uploading...'
											: 'Upload'}
									</Button>
									<Input
										onChange={uploadAvatar}
										ref={avatarUploadInputRef}
										type='file'
										hidden={true}
									/>
								</Box>
							</FormControl>
							<FormControl id='name' mb={8}>
								<FormLabel>Name</FormLabel>
								<Input
									onChange={formik.handleChange}
									type='name'
									w='full'
									h={12}
									value={formik.values.name}
								/>
							</FormControl>
							<FormControl id='email' mb={8}>
								<FormLabel>Email address</FormLabel>
								<Input
									onChange={formik.handleChange}
									type='email'
									w='full'
									h={12}
									value={formik.values.email}
								/>
							</FormControl>
							<FormControl id='company_name' mb={8}>
								<FormLabel>Company Name</FormLabel>
								<Input
									onChange={formik.handleChange}
									type='text'
									w='full'
									h={12}
									value={formik.values.company_name}
								/>
							</FormControl>
							<FormControl id='company_logo' mb={8}>
								<FormLabel>Company Logo</FormLabel>
								<Box
									d='flex'
									flexDirection='column'
									alignItems='center'
									justifyContent='center'
									w='200px'
									h='200px'
									border={1}
									borderStyle='solid'
									borderColor='gray.300'
									borderRadius='lg'
								>
									{logoUrl ? (
										<Image
											borderRadius='full'
											boxSize='96px'
											src={logoUrl}
											alt={user?.company_name}
										/>
									) : (
										<Avatar size='xl' />
									)}
									<Button
										size='sm'
										onClick={toggleLogoUpload}
										mt={4}
										colorScheme='brand'
										className='upload'
										overflow='hidden'
									>
										{logoUploading
											? 'Uploading...'
											: 'Upload'}
									</Button>
									<Input
										onChange={uploadLogo}
										ref={logoUploadInputRef}
										type='file'
										hidden={true}
									/>
								</Box>
							</FormControl>
							<FormControl id='website' mb={8}>
								<FormLabel>Company Website</FormLabel>
								<Input
									onChange={formik.handleChange}
									type='text'
									w='full'
									h={12}
									value={formik.values.website}
								/>
							</FormControl>
							<FormControl id='submit' mb={8}>
								<Button
									colorScheme='brand'
									size='lg'
									type='submit'
								>
									Save
								</Button>
							</FormControl>
						</form>
					)}
				</Formik>
			</Skeleton>
		</SettingsLayout>
	);
}

export default Account;
