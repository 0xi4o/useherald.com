import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { formatDistance } from "date-fns";
import {useChangelogFeed} from "../lib/hooks";
import { getColorForType } from "../lib/utils";
import {htmlToText} from "html-to-text";
import truncate from 'lodash.truncate';

function ChangelogFeed(props) {
	const { feed } = props;

	return (
		<div className='relative w-full h-auto overflow-hidden overflow-y-auto grid grid-cols-1 gap-0 divide-y divide-gray-100 bg-white p-0'>
			{
				feed ?
					feed.map((item) => {
						const contentText = htmlToText(item.content);
						return <a
							className='w-full h-32 overflow-hidden overflow-ellipsis flex flex-col items-start justify-start p-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50'
							href={`${props.baseUrl}/${item.id}`}
							key={item.id}
							target='_blank'
							rel='noopener noreferrer'
						>
							<span className='w-full h-auto flex items-center justify-between mb-1'>
								<span className='w-4/6 h-auto overflow-ellipsis overflow-hidden text-md font-medium text-gray-900'>
									{
										truncate(item.title, { length: 40 })
									}
								</span>
								<span className='w-auto h-auto inline-flex items-center justify-center px-2 py-1 rounded-full text-white text-xs' style={{ backgroundColor: getColorForType('Tag') }}>
									{item.type || 'Tag'}
								</span>
							</span>
							<p className='text-xs text-gray-500'>
								{formatDistance(new Date(item.published_at), new Date(), {addSuffix: true})}
							</p>
							<p className='mt-2 overflow-ellipsis overflow-hidden text-sm text-gray-900'>
								{truncate(contentText, { length: 80 })}
							</p>
						</a>
					}) :
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
					<span className='relative inline-flex'>
						<Popover.Button
							className={`${
								open ? '' : 'text-opacity-90'
							} text-white group bg-orange-700 p-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
						>
							{props.icon || props.text}
						</Popover.Button>
						<span className="flex absolute h-2 w-2 top-0 right-0">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
							<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
						</span>
					</span>
					<Transition
						as={Fragment}
						enter='transition ease-out duration-200'
						enterFrom='opacity-0 translate-y-1'
						enterTo='opacity-100 translate-y-0'
						leave='transition ease-in duration-150'
						leaveFrom='opacity-100 translate-y-0'
						leaveTo='opacity-0 translate-y-1'
					>
						<Popover.Panel className='absolute z-10 w-96 p-0 mt-4 transform translate-x-0 right-0'>
							<div className='w-full overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
								{
									isLoading && !feed ?
										<div className='relative w-full h-32 p-4 bg-white flex items-center justify-center'>
											<div style={{ borderTopColor: 'transparent' }} className="w-8 h-8 border-2 border-green-500 border-solid rounded-full animate-spin" />
										</div> :
										<ChangelogFeed baseUrl={props.baseUrl} feed={feed} />
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
