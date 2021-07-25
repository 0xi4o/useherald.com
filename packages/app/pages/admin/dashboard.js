import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { chakra } from '@chakra-ui/react';
import { supabase } from '../../lib/supabaseClient';
import DefaultLayout from '../../components/layouts/Default';

const Admin = () => {
	const router = useRouter();
	const session = supabase.auth.session();

	useEffect(() => {
		async function checkSession() {
			if (!session) {
				await router.push('/admin');
			}
		}

		checkSession().then(() => {});
	}, [session]);

	return (
		<DefaultLayout>
			<chakra.span>Dashboard</chakra.span>
		</DefaultLayout>
	);
};

export default Admin;
