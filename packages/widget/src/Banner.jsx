import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import {useBanner} from "../lib/hooks";

function Banner(props) {
	const { banner } = useBanner(props?.id, props?.baseUrl, props?.userId);

	let ctaElement = null;
	if (banner?.cta_type === 'link') {
		ctaElement = <div className='flex items-center justify-center'>
			<a href={banner?.cta} className='flex items-center justify-center text-white font-medium underline mr-2'>
				{banner?.cta_text}
			</a>
			<HiOutlineArrowNarrowRight />
		</div>
	} else if (banner?.cta_type === 'button') {
		ctaElement = <div className='' style={{ backgroundColor: `${banner?.cta_bg}` }}>
			<a
				href={banner?.cta}
				className='flex items-center justify-center text-white font-medium'
			>
				{banner?.cta_text}
			</a>
		</div>
	}

	if (banner)

	return (
		<div className='flex items-center justify-between px-4 py-2 rounded-lg' style={{ backgroundColor: banner?.bg }}>
			<div className='flex-1 flex items-center'>
				{/*<span className='flex p-2 rounded-lg bg-indigo-800'>*/}
				{/*	{banner?.icon}*/}
				{/*</span>*/}
				<p className='mr-2 font-medium text-white truncate'>
					{banner?.title}
				</p>
			</div>
			{ctaElement}
			<div className=''>
				<button
					type='button'
					className='-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2'
				>
					<span className='sr-only'>Dismiss</span>
				</button>
			</div>
		</div>
	);
}

export default Banner;
