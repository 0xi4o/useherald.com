import { chakra } from '@chakra-ui/react';
import Container from '../components/Container';
import Header from '../components/Header';
import Hero from '../components/Hero';
import C2g from '../components/Features';
import Footer from '../components/Footer';

const Index = () => (
	<Container height='100vh'>
		<Header />
		<chakra.div flex='1 0 auto'>
			<Hero />
			<C2g />
		</chakra.div>
		<Footer />
	</Container>
);

export default Index;
