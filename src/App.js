import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import GamePage from "./Pages/GamePage/GamePage";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/game-page" element={<GamePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
