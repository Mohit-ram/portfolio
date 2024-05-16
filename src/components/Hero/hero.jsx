import React from "react";
import Navbar from "./Navbar";
import bgimg from "../../assets/images/Designer.png"
const Hero = () => {
  return (
    <section id="hero-section" >
      <Navbar />

      <div className="px-4 py-5 my-5 text-center">
        <h1 className="section-head display-5 fw-bold  ">
          Hi! <br />
          This is Mohit
        </h1>
        <div className="col-lg-6 px-5 mx-auto">
          <p className="lead mb-4 fw-normal">
            "Passionate Programmer,Innovative Engineer and AI Enthusiast | like
            Solving Complex Challenges"
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a
              className="btn btn-primary my-button btn-lg px-4 gap-3"
              href="#About"
            >
              Know more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
