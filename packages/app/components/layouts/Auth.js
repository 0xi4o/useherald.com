import { chakra, useColorModeValue } from '@chakra-ui/react';
import { Container } from '../common/';
import React from 'react';
import Image from 'next/image';
import config from '../../herald.config';

const AuthLayout = (props) => (
	<Container height='auto' minH='100vh'>
		<chakra.div
			w='full'
			maxW='container.md'
			h='auto'
			d='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='flex-start'
			flex='1 0 auto'
		>
			{props.children}
		</chakra.div>
		<chakra.footer
			maxW='container.md'
			py={4}
			d='flex'
			alignItems='center'
			justifyContent='center'
			fontSize='xs'
			color={useColorModeValue('gray.600', 'gray.400')}
		>
			Powered by
			<chakra.a
				d='flex'
				alignItems='center'
				ml={1}
				href='https://herald.opencatalysts.tech/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<Image src={config.logoIcon} width={16} height={16} />
			</chakra.a>
		</chakra.footer>
	</Container>
);

export default AuthLayout;
