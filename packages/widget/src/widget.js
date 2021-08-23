import { useEffect } from 'preact/hooks';

export default function Widget() {
	// const { id } = props;

	useEffect(() => {
		async function fetchChangelogs() {}

		fetchChangelogs().then(() => {});
	}, []);

	return (
		<>
			<p>Hello Vite + Preact!</p>
			<p>
				<a
					className='link'
					href='https://preactjs.com/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn Preact
				</a>
			</p>
		</>
	);
}
