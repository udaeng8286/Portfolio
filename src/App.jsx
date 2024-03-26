import React from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <div className="background-overlay"></div>
      <video className="background" autoPlay loop muted playsInline>
        <source src="/public/assets/background.mp4" type="video/mp4" />
      </video>
      <ProfileCard />
      <Nav />
    </div>
  );
}

export default App;
