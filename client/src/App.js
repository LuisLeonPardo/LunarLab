// import './App.css';
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/home/Footer";
import Modal from "./components/home/Modal";
import RegisterDashboard from "./components/RegisterDashboard/RegisterDashboard";
import Navbar from "./components/home/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={[<Home />, <Footer />]} />
        {/* <Route path="/modal" element={<Modal />} /> */}
        <Route
          path="/register"
          element={[<Navbar />, <RegisterDashboard />, <Footer />]}
        />
      </Routes>
    </div>
  );
}

export default App;
