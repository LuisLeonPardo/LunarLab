// import './App.css';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/home/Footer';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/home" element={[<Home />, <Footer />]} />
			</Routes>
		</div>
	);
}

export default App;
