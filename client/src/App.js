// import './App.css';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* Aca adentro va todo lo que tenga navbar y footer */}
					<Route path="home" element={<Home />} />
					<Route path='dashboard' element={<Dashboard />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
