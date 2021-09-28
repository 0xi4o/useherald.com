export async function fetcher(url, opts = {}) {
	const res = await fetch(url, opts);
	if (!res.ok) {
		throw new Error('Error completing request');
	}

	return await res.json();
}
