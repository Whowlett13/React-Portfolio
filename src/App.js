import "./App.css";

import Footer from "./components/Footer";

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
