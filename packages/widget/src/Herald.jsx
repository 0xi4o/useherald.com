import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {useChangelogFeed} from "../lib/hooks";

function Changelog(props) {
	const { feed } = props;

	return (
		<div className='relative grid gap-0 divide-y divide-gray-100 bg-white p-0'>
			{
				feed ?
					feed.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className='flex items-center p-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
						>
							<div className='ml-4'>
								<p className='text-sm font-medium text-gray-900'>
									{item.title}
								</p>
								<p className='text-sm text-gray-500' dangerouslySetInnerHTML={{ __html: item.content }} />
							</div>
						</a>
					)) :
					<span>Error!</span>
			}
		</div>
	)
}

function Herald(props) {
	const { feed, isLoading } = useChangelogFeed(props?.baseUrl, props?.userId);

	return (
		<Popover className='relative'>
			{({ open }) => (
				<>
					<Popover.Button
						className={`${
							open ? '' : 'text-opacity-90'
						} text-white group bg-orange-700 p-3 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
					>
						{props.icon || props.text}
					</Popover.Button>
					<Transition
						as={Fragment}
						enter='transition ease-out duration-200'
						enterFrom='opacity-0 translate-y-1'
						enterTo='opacity-100 translate-y-0'
						leave='transition ease-in duration-150'
						leaveFrom='opacity-100 translate-y-0'
						leaveTo='opacity-0 translate-y-1'
					>
						<Popover.Panel className='absolute z-10 w-80 px-4 mt-3 transform translate-x-0 right-0 sm:px-0'>
							<div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
								{
									isLoading && !feed ?
										<span>Loading...</span> :
										<Changelog feed={feed} />
								}
								<div className='p-0 bg-gray-50'>
									<a
										href='https://useherald.com'
										className='text-xs flow-root px-2 py-2 text-center transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
									>
										Powered by Herald
									</a>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	);
}

export default Herald;
