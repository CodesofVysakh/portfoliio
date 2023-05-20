import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import Hero from './component/screens/Hero';
import Header from './component/commons/Header';
import Skills from './component/screens/Skills';

function App() {
	return (
		<>
			<Header />
			<Hero />	
			<Skills />
		</>
	);
}	

export default App;
