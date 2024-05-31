import React from "react";
import BlogCard from "./BlogCard";

import projectsInfo from "../../assets/projectInfo/projectsinfo.js";

const Blog = () => {
  return (
    <section id="Blog">
      <div className="px-4 pt-5 my-5 text-center">
        <h1 className="display-6 fw-bold  section-head">Latest from Blog</h1>
        <p className="lead">
        “Check out my latest exciting projects on my blog. Go there now!”
        </p>
      </div>
      <div className="container mt-4 pb-5">
        <div className="row">
          <BlogCard
            key={projectsInfo[3].Id}
            image={projectsInfo[3].imgPath}
            title={projectsInfo[3].title}
            content={projectsInfo[3].info}
          />
          <BlogCard
            key={projectsInfo[1].Id}
            image={projectsInfo[1].imgPath}
            title={projectsInfo[1].title}
            content={projectsInfo[1].info}
          />
          <BlogCard
            key={projectsInfo[2].Id}
            image={projectsInfo[2].imgPath}
            title={projectsInfo[2].title}
            content={projectsInfo[2].info}
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
