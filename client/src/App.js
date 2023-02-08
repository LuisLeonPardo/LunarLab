// import './App.css';
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import RegisterDashboard from "./components/RegisterDashboard/RegisterDashboard";
import Profile from "./components/Profile";
import LiveProfile from "./components/LvlProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          {/* Aca adentro va todo lo que tenga navbar y footer */}
          <Route
            path="/"
            element={
              <div className="Pages">
                <Home />
              </div>
            }
          />
          <Route
            path="dashboard"
            element={
              <div className="Pages">
                <Dashboard />
              </div>
            }
          />
          <Route
            path="/register"
            element={
              <div className="Pages">
                <RegisterDashboard />
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="Pages">
                <Profile />
              </div>
            }
          />
          <Route
            path="lvlprofile"
            element={
              <div className="Pages">
                <LiveProfile />
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
