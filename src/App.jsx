import "./App.css";
import CreativeSection from "./components/CreativeSaection/CreativeSection";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./pages/AboutMe/AboutMe";
import Home from "./pages/Home/Home";
import Skills from "./pages/Services/Skills";
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
    </>
  );
}

export default App;
