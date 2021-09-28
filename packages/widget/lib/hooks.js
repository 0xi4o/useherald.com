import useSWR from 'swr';
import { fetcher } from './utils';

export function useChangelogFeed(userId) {
	const { data, error } = useSWR(
		`http://localhost:3001/api/feed?userId=${userId}`,
		fetcher
	);

	return {
		feed: data?.feed,
		isLoading: !error && !data,
	};
}
