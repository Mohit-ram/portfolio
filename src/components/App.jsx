import { useState } from "react";
import Hero from "./Hero/hero";
import Portfolio from "./Portfolio/Portfolio";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
