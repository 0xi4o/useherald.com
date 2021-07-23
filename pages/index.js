import { chakra } from '@chakra-ui/react';
import {
	Container,
	Feature,
	Footer,
	Header,
	Hero,
} from '../components/common/';

const Index = () => (
	<Container height='auto' minH='100vh'>
		<Header />
		<chakra.div
			w='full'
			h='auto'
			d='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='flex-start'
			flex='1 0 auto'
		>
			<Hero />
			<Feature />
		</chakra.div>
		<Footer />
	</Container>
);

export default Index;
