import './App.css';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/home/Footer';
import Modal from './components/home/Modal';
import Contact from './components/Contact/Contact';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/home" element={[<Home />, <Footer />]} />
				{/* <Route path="/modal" element={<Modal />} /> */}
				<Route path='/contact' element={<Contact/>}/>
			</Routes>
		</div>
	);
}

export default App;
