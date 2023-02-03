// import './App.css';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import LiveProfile from './components/LvlProfile';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* Aca adentro va todo lo que tenga navbar y footer */}
					<Route path="home" element={<Home />} />
				</Route>
				<Route path="live_profile" element={<LiveProfile />} />
			</Routes>
		</div>
	);
}

export default App;
