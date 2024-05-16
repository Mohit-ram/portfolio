import React from "react";
import PortfolioCard from "./PortfolioCard";
const Portfolio = () => {
  return (
    <section id="Porfolio">
      <div className="px-4 pt-5 my-5 text-center">
        <h1 className="display-6 fw-bold  section-head">Best Work</h1>
        <p className="lead">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 mx-2 mb-5">
        <PortfolioCard
          image={"portfolio-website/src/assets/images/solid_sample_gray.jpg;"}
          text={"Much longer title that wraps to multiple lines"}
        />
        <PortfolioCard
          image={"portfolio-website/src/assets/images/solid_sample_gray.jpg;"}
          text={"Much longer title that wraps to multiple lines"}
        />
        <PortfolioCard
          image={"portfolio-website/src/assets/images/solid_sample_gray.jpg;"}
          text={"Much longer title that wraps to multiple lines"}
        />
        <PortfolioCard
          image={"portfolio-website/src/assets/images/solid_sample_gray.jpg;"}
          text={"Much longer title that wraps to multiple lines"}
        />
      </div>
    </section>
  );
};

export default Portfolio;
