import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./routes/About.js";
import Home from "./routes/Home.js";
import Detail from "./components/Detail";
import "./App.css";

function App() {
  return (
    <Router>
      <nav role="menu" className="navbar">
        <Link className="navbar__link" to="/">Home</Link>
        <Link className="navbar__link" to="/about">About</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/movie-details/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
