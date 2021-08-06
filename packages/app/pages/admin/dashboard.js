// import { useEffect } from 'react';
// import { useRouter } from 'next/router';
import { chakra } from '@chakra-ui/react';
import DefaultLayout from '../../components/layouts/Default';

const Admin = () => {
	// const router = useRouter();

	return (
		<DefaultLayout>
			<chakra.span>Dashboard</chakra.span>
		</DefaultLayout>
	);
};

export default Admin;
