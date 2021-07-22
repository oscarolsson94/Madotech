import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Route path="/" component={HomeScreen}></Route>
      </main>
      <footer>All rights reserved</footer>
    </Router>
  );
}

export default App;
