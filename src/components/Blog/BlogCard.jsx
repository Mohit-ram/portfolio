import React from 'react'

const BlogCard = ({image, title, content}) => {
  return (
    <div className="col-md-4">
            <div className="card">
              <img className="card-img-top" src={image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <a href="#" className="btn my-button btn-primary">
                  Go to Blog
                </a>
              </div>
            </div>
          </div>
  )
}

export default BlogCard