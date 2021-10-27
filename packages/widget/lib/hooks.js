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

export function useBanner(id, baseUrl, userId) {
	const { data, error } = useSWR(
		`${baseUrl}/api/banner?id=${id}&userId=${userId}`,
		fetcher
	);

	return {
		banner: data?.banner,
		isLoading: !error && !data,
	};
}
