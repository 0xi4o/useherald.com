import nc from 'next-connect';
import { supabase } from '../../lib/supabaseClient';

async function joinWaitlist(req, res) {
	try {
		const { email } = req.body;

		const { count } = await supabase
			.from('waitlist')
			.select('id', { count: 'exact', head: true });

		const { data, error } = await supabase
			.from('waitlist')
			.upsert({ email, number: count + 1 })
			.single();

		if (data && !error) {
			res.status(200).send({ message: 'success', data });
		} else {
			res.status(500).send({ message: 'error', error });
		}
	} catch (error) {
		res.status(500).send({ message: 'error', error });
	}
}

export default nc({ attachParams: true }).post(joinWaitlist);
