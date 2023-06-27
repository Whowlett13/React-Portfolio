import logo from "./logo.svg";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/header";
import NavBar from "./components/navBar";
import Resume from "./components/resume";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
// import "./portfolio.css";
import "./portfolio.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
