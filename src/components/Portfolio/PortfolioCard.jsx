import React from "react";

const PortfolioCard = ({ image, text }) => {
  return (
    <div className="col-lg-3">
      <div
        className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
        style={{
          backgroundImage: { image },
        }}
      >
        <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
          <h2 className="pt-2 mt-2 mb-2 lh-1 fw-bold">{text}</h2>
          <ul className="d-flex list-unstyled mt-auto">
            <li className="me-auto">
              <a href="#" className="btn my-button btn-primary px-3">
                Read more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
