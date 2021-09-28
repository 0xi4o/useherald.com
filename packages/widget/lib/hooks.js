import useSWR from 'swr';
import { fetcher } from './utils';

export function useChangelogFeed(baseUrl, userId) {
	const { data, error } = useSWR(
		`${baseUrl}/api/feed?userId=${userId}`,
		fetcher
	);

	return {
		feed: data?.feed,
		isLoading: !error && !data,
	};
}
