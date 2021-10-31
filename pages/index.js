import { chakra } from '@chakra-ui/react';
import {
	Container,
	FeatureTabs,
	Footer,
	Header,
	Hero,
	Pricing,
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
			{/*<Features />*/}
			<FeatureTabs />
			<Pricing />
		</chakra.div>
		<Footer />
	</Container>
);

export default Index;
