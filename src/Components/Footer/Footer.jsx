import React from "react";

export default function Footer() {
  return (
    <>
      <footer class="navbar  bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            رياضيات اونلاين
          </a>
          <ul className="social-icons d-flex nav">
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
