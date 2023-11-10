import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Tours from "./Components/Tours";
import Footer from "./Components/Footer";
import About from "./Components/About";
function App() {
  return (
    <>
      <NavBar />

      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
