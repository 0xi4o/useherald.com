import { Fragment, useEffect, useState } from 'react';
import NextLink from 'next/link';
import {
	chakra,
	Box,
	Button,
	Divider,
	Heading,
	Text,
	VStack,
} from '@chakra-ui/react';
import { format, formatDistance } from 'date-fns';
import capitalize from 'lodash.capitalize';
import { supabase } from '../../lib/supabaseClient';
import DefaultLayout from '../layouts/Default';

export default function Main() {
	const [changelogs, setChangelogs] = useState([]);
	const [profile, setProfile] = useState(null);

	useEffect(() => {
		async function fetchChangelogs() {
			const user = supabase.auth.user();

			// Fetch changelogs where user is the author
			const { data, error } = await supabase
				.from('changelogs')
				.select()
				.match({ author: user.id })
				.order('updated_at', { ascending: false });

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
			<VStack py={8} w='full' spacing={8}>
				<Box w='full' mb={4}>
					<NextLink href='/admin/new'>
						<Button px={8} py={6} colorScheme='brand'>
							Add Update
						</Button>
					</NextLink>
				</Box>
				<VStack w='full' spacing={5}>
					{changelogs.map((changelog) => {
						return (
							<Fragment key={changelog.id}>
								<Box w='full' mb={4}>
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
										<Text color='brand.200'>
											<NextLink
												href={`/admin/edit?id=${changelog.id}`}
											>
												Edit
											</NextLink>
										</Text>
										&nbsp;&nbsp;&middot;&nbsp;&nbsp;
										<Text fontSize='sm'>
											{capitalize(changelog.status)}
										</Text>
										&nbsp;&nbsp;&middot;&nbsp;&nbsp;
										<Text fontSize='sm'>
											{profile?.name}
										</Text>
										&nbsp;&nbsp;&middot;&nbsp;&nbsp;
										<Text
											fontSize='sm'
											title={format(
												new Date(changelog.updated_at),
												'PPPpp'
											)}
										>
											{formatDistance(
												new Date(changelog.updated_at),
												new Date(),
												{ addSuffix: true }
											)}
										</Text>
									</chakra.div>
									<chakra.div
										className='herald'
										fontSize='lg'
										lineHeight='tall'
										dangerouslySetInnerHTML={{
											__html: changelog.content,
										}}
									/>
								</Box>
								<Divider mb={4} />
							</Fragment>
						);
					})}
				</VStack>
			</VStack>
		</DefaultLayout>
	);
}
