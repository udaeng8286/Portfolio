import React from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="App">
      <div className="background-overlay"></div>
      <video className="background" autoPlay loop muted playsInline>
        <source src="/public/assets/background.mp4" type="video/mp4" />
      </video>
      <ProfileCard />
    </div>
  );
}

export default App;
