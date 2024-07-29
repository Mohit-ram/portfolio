import React from "react";
import BlogCard from "./BlogCard";
import dappInfo from "../../assets/projectInfo/deployed-apps.js";

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
          <BlogCard
            key={dappInfo[2].Id}
            title={dappInfo[2].title}
            content={dappInfo[2].info}
            link={dappInfo[2].applink}
          />
          <BlogCard
            key={dappInfo[1].Id}
            title={dappInfo[1].title}
            content={dappInfo[1].info}
            link={dappInfo[1].applink}
          />
          <BlogCard
            key={dappInfo[0].Id}
            title={dappInfo[0].title}
            content={dappInfo[0].info}
            link={dappInfo[1].applink}
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
