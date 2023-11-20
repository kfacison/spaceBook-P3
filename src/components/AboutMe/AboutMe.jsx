import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";

export default function AboutMe({ profile }) {
  return (
    <>
      <div id="profile-photo-container">div</div>
      <div id="about-me-box">ABOUT ME{profile.favoritePlanet}</div>
      <Link to="/profiles/:id/edit">EDIT PROFILE</Link>
    </>
  );
}
