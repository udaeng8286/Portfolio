import React from "react";
import "./App.css"; // CSS 파일 임포트

function App() {
  return (
    <div className="App">
      <video className="body-overlay" autoPlay loop muted playsInline>
        <source src="/public/assets/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
