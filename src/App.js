import "./App.css";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Portfolio from './components/portfolio/portfolio'
import Services from './components/services/services'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
