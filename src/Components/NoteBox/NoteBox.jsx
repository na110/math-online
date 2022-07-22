import React from "react";
import { Link } from "react-router-dom";
import "./note-box.css";

export default function NoteBox() {
  return (
    <>
      <Link
        className="note-box bg-info text-white text-center p-5 col-12 col-md-5 text-decoration-none d-flex flex-column justify-content-center align-items-center rounded-4 shadow-lg"
        to="note"
      >
        <span>
          <i class="fa-solid fa-book mb-5"></i>
        </span>
        <h2>المذكرات</h2>
      </Link>
    </>
  );
}
