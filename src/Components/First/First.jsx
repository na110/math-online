import React from "react";
import NoteBox from "../NoteBox/NoteBox";
import TutorialsBox from "../TutorialsBox/TutorialsBox";

export default function First() {
  return (
    <>
      <section className="first">
        <div className="container">
          <h2 className="mt-5">الصف الاول الاعدادي</h2>
          <div className="row justify-content-around align-items-center vh-100">
            <TutorialsBox />
            <NoteBox />
          </div>
        </div>
      </section>
    </>
  );
}
