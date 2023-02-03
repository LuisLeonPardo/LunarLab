// import './App.css';
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import RegisterDashboard from "./components/RegisterDashboard/RegisterDashboard";
import LiveProfile from "./components/LvlProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          {/* Aca adentro va todo lo que tenga navbar y footer */}
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/register" element={<RegisterDashboard />} />
          <Route path="lvlprofile" element={<LiveProfile /> } />  
        </Route>
      </Routes>
    </div>
  );
}

export default App;
