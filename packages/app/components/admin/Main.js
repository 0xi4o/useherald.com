import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import { chakra, Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
import { supabase } from '../../lib/supabaseClient';
import DefaultLayout from '../layouts/Default';

export default function Main() {
	const [changelogs, setChangelogs] = useState([]);
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		async function fetchChangelogs() {
			const user = supabase.auth.user();

			const { data, error } = await supabase
				.from('changelogs')
				.select()
				.match({ author: user.id });

			if (data && data.length > 0) {
				setChangelogs(data);
			} else {
				console.log(error);
			}

			// Fetch user's profile
			const { data: profile, error: profileError } = await supabase
				.from('profiles')
				.select()
				.match({ id: user.id })
				.single();

			if (profile) {
				setProfile(profile);
			} else {
				console.log(profileError);
			}
		}

		fetchChangelogs().then(() => {});
	}, []);

	return (
		<DefaultLayout>
			<VStack py={16} w='full' spacing={8}>
				<Box w='full' mb={4}>
					<NextLink href='/admin/new'>
						<Button>Add Update</Button>
					</NextLink>
				</Box>
				<VStack w='full' spacing={5}>
					{changelogs.map((changelog) => {
						return (
							<Box w='full' key={changelog.id}>
								<Heading as='h2' mb={4}>
									{changelog.title}
								</Heading>
								<chakra.div
									d='flex'
									alignItems='center'
									justifyContent='start'
									mb={8}
									w='full'
								>
									<Text fontSize='sm'>{profile.name}</Text>
									&nbsp;&nbsp;&middot;&nbsp;&nbsp;
									<Text fontSize='sm'>7 minutes ago</Text>
								</chakra.div>
								<chakra.div
									fontSize='lg'
									lineHeight='tall'
									dangerouslySetInnerHTML={{
										__html: changelog.content,
									}}
								/>
							</Box>
						);
					})}
				</VStack>
			</VStack>
		</DefaultLayout>
	);
}
