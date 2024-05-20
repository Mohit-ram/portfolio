import React from 'react'

const BlogCard = ({image, title, content}) => {
  return (
    <div className="col-md-4">
            <div className="card">
              
              <img className="card-img-top img-fluid" style={{height:'300px', maxWidth: '400px'}} src={image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <a target='_blank' href="https://mohit-ram.github.io/my-blog/" className="btn my-button btn-primary">
                  Go to Blog
                </a>
              </div>
            </div>
          </div>
  )
}

export default BlogCard