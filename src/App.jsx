import "./App.css";
import CreativeSection from "./components/CreativeSaection/CreativeSection";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./pages/AboutMe/AboutMe";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Skills from "./pages/Skills/Skills";
import Work from "./pages/Work/Work";

function App() {
  return (
    <>
      <Home />
      <Navbar />
      <CreativeSection />
      <AboutMe />
      <Work />
      <Skills />
      <Services />
      <Footer />
    </>
  );
}

export default App;
