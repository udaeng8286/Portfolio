import "./App.css";
import ProfileCard from "./components/ProfileCard";
import Nav from "./components/Nav";
import RelativeNav from "./components/RelativeNav";
import Intro from "./pages/Intro";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Experience from "./pages/Experience";

function App() {
  return (
    <div className="App">
      <div className="background-overlay"></div>
      <video className="background" autoPlay loop muted playsInline>
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <RelativeNav />
      <div className="side-content">
        <ProfileCard />
        <Nav />
      </div>
      <div className="main-content">
        <Intro />
        <Skills />
        <Project />
        <Experience />
      </div>
    </div>
  );
}

export default App;
