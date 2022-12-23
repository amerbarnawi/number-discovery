import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import GamePage from "./Pages/GamePage/GamePage";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/game-page" element={<GamePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
