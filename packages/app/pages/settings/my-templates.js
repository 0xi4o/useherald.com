import { Box, useColorModeValue } from '@chakra-ui/react';
import SettingsLayout from '../../components/layouts/Settings';

function MyTemplates() {
	return (
		<SettingsLayout>
			<Box
				w='full'
				h={48}
				d='flex'
				alignItems='center'
				justifyContent='center'
				borderWidth={2}
				borderStyle='solid'
				borderColor={useColorModeValue('gray.400', 'gray.700')}
				borderRadius='lg'
			>
				Coming soon!
			</Box>
		</SettingsLayout>
	);
}

export default MyTemplates;
