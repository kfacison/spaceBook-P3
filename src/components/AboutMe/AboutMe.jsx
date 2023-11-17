import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <>
      <div id="profile-photo-container">PHOTO</div>
      <div id="about-me-box">ABOUT ME</div>
      <Link to="/profiles/:id/edit">EDIT PROFILE</Link>
    </>
  );
}
