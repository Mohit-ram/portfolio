import React from "react";
import BlogCard from "./BlogCard";
import image from "../../assets/images/solid_sample_gray.jpg";

const Blog = () => {
  return (
    <section id="Blog">
      <div className="px-4 pt-5 my-5 text-center">
        <h1 className="display-6 fw-bold  section-head">Latest from Blog</h1>
        <p className="lead">
          Quickly design and customize responsive mobile-first sites with
          Bootstrap, the world’s most popular front-end open source toolkit,
          featuring Sass variables and mixins, responsive grid system, extensive
          prebuilt components, and powerful JavaScript plugins.
        </p>
      </div>
      <div className="container mt-4 pb-5">
        <div className="row">
          <BlogCard
            key={1}
            image={image}
            title={"Card Ttile 1"}
            content={"Some content for Card 1"}
          />
          <BlogCard
            key={2}
            image={image}
            title={"Card Ttile 2"}
            content={"Some content for Card 3"}
          />
          <BlogCard
            key={3}
            image={image}
            title={"Card Ttile 3"}
            content={"Some content for Card 3"}
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
