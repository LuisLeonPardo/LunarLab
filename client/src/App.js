// import './App.css';
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import RegisterDashboard from "./components/RegisterDashboard/RegisterDashboard";
import Profile from "./components/Profile"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          {/* Aca adentro va todo lo que tenga navbar y footer */}
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/register" element={<RegisterDashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
