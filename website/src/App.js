import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Route path="/" component={HomeScreen}></Route>
      </main>
      <footer className="row center">All rights reserved</footer>
    </Router>
  );
}

export default App;
