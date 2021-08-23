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
import SettingsLayout from '../../../components/app/layouts/Settings';

function Account() {
	const [user, setUser] = useState(null);
	const [logoUrl, setLogoUrl] = useState(null);
	const [logoUploading, setLogoUploading] = useState(false);
	const [profileSaving, setProfileSaving] = useState(false);
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
				setLogoUrl(data?.company_logo);
			} else {
				console.log(error);
			}
		}

		const user = supabase.auth.user();
		fetchUserProfile(user?.id).then(() => {});
	}, []);

	function toggleLogoUpload() {
		logoUploadInputRef?.current?.click();
	}

	async function uploadLogo(event) {
		try {
			setLogoUploading(true);

			if (!event.target.files || event.target.files.length === 0) {
				new Error('You must select an image to upload.');
			}

			const file = event.target.files[0];
			const filePath = `public/${user.id}/logo/${file.name}`;

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
			await updateProfile({ company_logo: publicURL });
		} catch (error) {
			alert(error.message);
		} finally {
			setLogoUploading(false);
		}
	}

	async function updateProfile(update) {
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
	}

	return (
		<SettingsLayout>
			<Skeleton w='full' isLoaded={user}>
				<Formik
					initialValues={{
						company_name: user?.company_name || '',
						company_logo: user?.company_logo || '',
						website: user?.website || '',
					}}
					onSubmit={async (values) => {
						setProfileSaving(true);
						await updateProfile(values);
						setProfileSaving(false);
					}}
				>
					{(formik) => (
						<form onSubmit={formik.handleSubmit}>
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
									{profileSaving ? 'Saving...' : 'Save'}
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
