import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Main from '../../components/admin/Main';
import SignIn from '../../components/admin/SignIn';

const Admin = () => {
	const [session, setSession] = useState(null);

	useEffect(() => {
		setSession(supabase.auth.session());

		supabase.auth.onAuthStateChange((event, session) => {
			setSession(session);
		});
	}, []);

	return session ? <Main /> : <SignIn />;
};

export default Admin;
