import React from "react";
import PortfolioCard from "./PortfolioCard";
import projectsInfo from "../../assets/projectInfo/projectsinfo.js";

const Portfolio = () => {
  return (
    <section id="Porfolio">
      <div className="px-4 pt-5 my-2 text-center">
        <h1 className="display-6 fw-bold  section-head">Blog Posts</h1>

        <p className="lead">
          “Below, you’ll find latest work from my blog. Click to read more.”
        </p>
        <a
          className="nav-link"
          aria-current="page"
          target="_blank"
          href="https://mohit-ram.github.io/my-blog/"
        >
          Go to Blog <i className="bi bi-box-arrow-up-right"></i>
        </a>
      </div>
      <div className="container">
        <div className="row row-cols-1    mx-2 mb-5">
          <PortfolioCard
            image={projectsInfo[0].imgPath}
            title={projectsInfo[0].title}
            number={projectsInfo[0].number}
          />
          <PortfolioCard
            image={projectsInfo[1].imgPath}
            title={projectsInfo[1].title}
            number={projectsInfo[1].number}
          />
          <PortfolioCard
            image={projectsInfo[2].imgPath}
            title={projectsInfo[2].title}
            number={projectsInfo[2].number}
          />
          <PortfolioCard
            image={projectsInfo[3].imgPath}
            title={projectsInfo[3].title}
            number={projectsInfo[3].number}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
