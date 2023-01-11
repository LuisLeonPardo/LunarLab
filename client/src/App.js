import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">

			<Routes>
				<Route path='/home' element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
