// import './App.css';
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/home/Footer";
import Modal from "./components/home/Modal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={[<Home />, <Footer />]} />
        {/* <Route path="/modal" element={<Modal />} /> */}
      </Routes>
    </div>
  );
}

export default App;
