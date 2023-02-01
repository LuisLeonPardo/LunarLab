// import './App.css';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/home/Footer';
import Modal from './components/home/Modal';

function App() {
<<<<<<< HEAD
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
=======
	return (
		<div className="App">
			<Routes>
				<Route path="/home" element={[<Home />, <Footer />]} />
				{/* <Route path="/modal" element={<Modal />} /> */}
			</Routes>
		</div>
	);
>>>>>>> 3249a83bf191bd523a697690bc9b93e0f1ce5be5
}

export default App;
