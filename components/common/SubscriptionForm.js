import {
	Button,
	FormControl,
	Input,
	Stack,
	useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

const SubscriptionForm = (props) => {
	return (
		<div id='revue-embed'>
			<Stack
				w={props.w || 'md'}
				direction={{ base: 'column', md: 'row' }}
				as={'form'}
				spacing={'12px'}
				action='https://www.getrevue.co/profile/opencatalysts/add_subscriber'
				method='post'
			>
				<FormControl>
					<Input
						h={12}
						variant={'solid'}
						color={useColorModeValue('black.100', 'white.100')}
						_placeholder={{
							color: 'gray.400',
						}}
						border={0}
						bg={useColorModeValue(
							'blackAlpha.100',
							'whiteAlpha.100'
						)}
						name='member[email]'
						id='member_email'
						type={'email'}
						required
						placeholder={'Your Email'}
						aria-label={'Your Email'}
					/>
				</FormControl>
				<FormControl w={{ base: '100%', md: '40%' }}>
					<Button
						colorScheme='brand'
						h={12}
						w='100%'
						type='submit'
						value='Subscribe'
						name='member[subscribe]'
						id='member_submit'
					>
						{props?.cta || 'Subscribe'}
					</Button>
				</FormControl>
			</Stack>
		</div>
	);
};

export default SubscriptionForm;
