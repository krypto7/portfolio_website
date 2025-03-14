import "./App.css";
import CreativeSection from "./components/CreativeSaection/CreativeSection";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./pages/AboutMe/AboutMe";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Home />
      <Navbar />
      <CreativeSection />
      <AboutMe />
    </>
  );
}

export default App;
