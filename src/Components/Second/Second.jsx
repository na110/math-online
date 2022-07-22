import React from "react";
import TutorialsBox from "../TutorialsBox/TutorialsBox";
import NoteBox from "../NoteBox/NoteBox";

export default function Second() {
  return (
    <>
      <section className="first">
        <div className="container">
          <h2 className="mt-5">الصف الثاني الاعدادي</h2>
          <div className="row justify-content-around align-items-center vh-100">
            <TutorialsBox />
            <NoteBox />
          </div>
        </div>
      </section>
    </>
  );
}
