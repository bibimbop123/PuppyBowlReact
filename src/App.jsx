import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import NewDogPlayer from "./components/NewDogPlayer";
import SingleDog from "./components/SinglePlayer";
function App() {
  return (
    <div className="App">
      <nav id="navbar">
        <Link to="/">Home Page</Link>
      </nav>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/form" element={<NewDogPlayer />} />
          <Route path="/:dogId" element={<SingleDog />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
