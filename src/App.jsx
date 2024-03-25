import React from "react";
import "./App.css"; // CSS 파일 임포트

function App() {
  return (
    <div className="App">
      <div className="background-overlay"></div>
      <video className="background" autoPlay loop muted playsInline>
        <source src="/public/assets/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
