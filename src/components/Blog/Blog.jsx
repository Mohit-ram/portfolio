import React from "react";
import BlogCard from "./BlogCard";
import dappInfo from "../../assets/projectInfo/apps-deployed.js";

function createcard(dapp) {
  return (
    <BlogCard
    key={dapp.Id}
    title={dapp.title}
    link={dapp.appLink}
    number={dapp.prjNumber}
    />
  );
}

const Blog = () => {
  return (
    <section id="Blog">
      <div className="px-4 pt-5 my-5 text-center">
        <h1 className="display-6 fw-bold  section-head">Deployed AI apps</h1>
        <p className="lead">
          “Check out some of my deployed Apps. clik to open app”
        </p>
      </div>
      <div className="container mt-4 pb-5">
        <div className="row row-cols-1    mx-2 mb-5">
          {dappInfo.map(createcard)}
          
        </div>
      </div>
    </section>
  );
};

export default Blog;
