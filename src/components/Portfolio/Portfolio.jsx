import React from "react";
import PortfolioCard from "./PortfolioCard";
import projectsInfo from "../../assets/projectInfo/projectsinfo.js";
import img from "../../assets/projectInfo/mainImg001.jpg"

const Portfolio = () => {
  return (
    <section id="Porfolio">
      <div className="px-4 pt-5 my-5 text-center">
        <h1 className="display-6 fw-bold  section-head">Best Work</h1>
        <p className="lead">
        “Below, you’ll find some of my best work. Click to learn more.”
        </p>
      </div>
      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 mx-2 mb-5">
        <PortfolioCard
          image={projectsInfo[0].imgPath}
          text={projectsInfo[0].title}
          number={projectsInfo[0].number}
        />
        <PortfolioCard
          image={projectsInfo[1].imgPath}
          text={projectsInfo[1].title}
          number={projectsInfo[1].number}
        />
        <PortfolioCard
          image={projectsInfo[2].imgPath}
          text={projectsInfo[2].title}
          number={projectsInfo[2].number}
        />
        <PortfolioCard
          image={projectsInfo[3].imgPath}
          text={projectsInfo[3].title}
          number={projectsInfo[3].number}
        />
      </div>
    </section>
  );
};

export default Portfolio;
