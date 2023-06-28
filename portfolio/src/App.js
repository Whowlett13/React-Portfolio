import logo from "./logo.svg";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/header";
import NavBar from "./components/navBar";
import Resume from "./components/resume";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import PortfolioContainer from "./components/PortfolioContainer";
// import "./portfolio.css";
// import "./portfolio.js";

function App() {
  return (
    <div className="App">
      <PortfolioContainer>
        {/* <AboutMe />
        <Contact />
        <Projects />
        <Resume /> */}
      </PortfolioContainer>
      <Footer />
    </div>
  );
}

export default App;
