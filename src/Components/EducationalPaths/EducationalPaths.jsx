import React from "react";
import first from "./../../images/first.jpg";
import "./educational-paths.css";
import { Link } from "react-router-dom";

export default function EducationalPaths() {
  return (
    <>
      <div className="educational-paths container-fluid my-5">
        <h2>المسارات التعليمية</h2>
        <div className="box row">
          <Link
            className="item col-md-6 col-lg-4 text-center text-decoration-none"
            to="first"
          >
            <div className="img-content">
              <img src={first} alt="" className="w-100" />
            </div>
            <h3 className="my-3 text-secondary">الصف الاول الاعدادي</h3>
          </Link>
          <Link
            className="item col-md-6 col-lg-4 text-center text-decoration-none"
            to="second"
          >
            <div className="img-content">
              <img src={first} alt="" className="w-100" />
            </div>
            <h3 className="my-3 text-secondary">الصف الثاني الاعدادي</h3>
          </Link>
          <Link
            className="item col-md-6 col-lg-4 text-center text-decoration-none"
            to="third"
          >
            <div className="img-content">
              <img src={first} alt="" className="w-100" />
            </div>
            <h3 className="my-3 text-secondary">الصف الثالث الاعدادي</h3>
          </Link>
        </div>
      </div>
    </>
  );
}
