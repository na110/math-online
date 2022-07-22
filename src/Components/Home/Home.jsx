import React from "react";
import { Outlet } from "react-router-dom";
import EducationalPaths from "../EducationalPaths/EducationalPaths";
import "./home.css";

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="home-content bg-info">
          <div className="container">
            <div className="hero py-5 text-center">
              <h1 className="fs-1 fw-bolder mb-5">
                مرحبا بكم في منصة رياضيات اونلاين
              </h1>
              <p className="fs-4 px-5">
                رياضيات اونلاين هي منصة تعليمية تقوم علي تقديم العديد من دروس
                الرياضيات لمختلف الصفوف الاعدادية بشرح تفصيلي وتفاعلي باللغة
                العربية وخطط دراسة مع اختبارات لضمان فهم الدروس والتطبيق عليها.
              </p>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0dcaf0"
            fill-opacity="1"
            d="M0,192L40,165.3C80,139,160,85,240,90.7C320,96,400,160,480,154.7C560,149,640,75,720,53.3C800,32,880,64,960,106.7C1040,149,1120,203,1200,224C1280,245,1360,235,1400,229.3L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
        <div className="container">
          <EducationalPaths />
        </div>
      </section>
    </>
  );
}
