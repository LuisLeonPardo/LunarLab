import React from "react";
import BottomHome from "./BottomHome";
import Landing from "./Landing";
import LandingFooter from "./LandingFooter";
import "./home.css";
function Home() {
  return (
    <div className="home">
      <Landing />
      <LandingFooter />
      <BottomHome />
    </div>
  );
}

export default Home;
