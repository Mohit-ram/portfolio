import React from "react";

const BlogCard = ({ title, content, number, link }) => {
  return (
    // <div className="col-md-4">
    //         <div className="card">

    //           <img className="card-img-top img-fluid" style={{height:'300px', maxWidth: '400px'}} src={image} alt="Card image cap" />
    //           <div className="card-body" >
    //             <h5 className="card-title">{title}</h5>
    //             <p className="card-text " style={{height:'100px', maxWidth: '400px'}}>{content}</p>
    //             <a target='_blank' href="https://mohit-ram.github.io/my-blog/" className="btn my-button btn-primary">
    //               Go to Blog
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    // <div class="col-md-3">
    //   <div class="card mb-4 box-shadow">
    //     <img class="card-img-top" alt="Thumbnail [100%x225]" src={image} />
    //     <div class="card-body">
    //       <h6 className="card-title" style={{height:'40px', maxWidth: 'auto'}}>{title}</h6>
    //       <div class="d-flex justify-content-between align-items-center">
    //         <div class="btn-group">
    //           <a
    //             target="_blank"
    //             href={`https://mohit-ram.github.io/my-blog/src/projects/project${number}/project${number}.html`}
    //             className="btn my-button btn-primary"
    //           >
    //             Go to Page
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="app-card col-md-4">
      <h2>{title}</h2>
      <div className="app-info">
        <p>{content}</p>
      </div>
      <p>
        <a target="_blank" href={link} className="btn my-button btn-primary">
          Go to App
        </a>
        <a
          target="_blank"
          href={`https://mohit-ram.github.io/my-blog/src/projects/project${number}/project${number}.html`}
          className="btn my-button btn-primary"
        >
          Go to Project
        </a>
      </p>
    </div>
  );
};

export default BlogCard;
