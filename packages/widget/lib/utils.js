export async function fetcher(url, opts = {}) {
	const res = await fetch(url, opts);
	if (!res.ok) {
		throw new Error('Error completing request');
	}

	return await res.json();
}

export function getColorForType(type) {
	const typeColorMap = {
		bug: '',
		fix: '',
		feature: '',
		maintenance: '',
		release: '',
		tag: '#10B981',
		update: '',
	};

	return typeColorMap[type.toLowerCase()];
}
