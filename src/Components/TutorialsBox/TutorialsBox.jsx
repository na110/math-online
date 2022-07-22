import React from "react";
import { Link } from "react-router-dom";
import "./tutorial-box.css";

export default function TutorialsBox() {
  return (
    <>
      <Link
        className="tutorial-box bg-info text-white text-center p-5 col-12 col-md-5 text-decoration-none d-flex flex-column justify-content-center align-items-center rounded-4 shadow-lg"
        to="tutorial"
      >
        <span>
          <i className="fa-solid fa-graduation-cap mb-5"></i>
        </span>
        <h2>الدروس</h2>
      </Link>
    </>
  );
}
