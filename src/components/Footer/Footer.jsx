import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use xlink:href="#bootstrap"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2024 MohitRam
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
            <i class="bi bi-linkedin"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
            <i class="bi bi-github"></i>
            </a>
          </li>

          <li className="ms-3">
            <a className="text-body-secondary" href="#">
            <i class="bi bi-folder-symlink-fill"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
