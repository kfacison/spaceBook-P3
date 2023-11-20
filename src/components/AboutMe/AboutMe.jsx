import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";

export default function AboutMe({ profile }) {
  return (
    <>
      <div id="profile-photo-container">div</div>
      <div id="about-me-wrapper">
        <div id="about-me-box">
          <div>Name: (user.name)</div>
          <div>Age: (user.age)</div>
          <div>Favorite Planet: (user.favoritePlanet)</div>
        </div>
        <Link to="/profiles/:id/edit" id="edit-profile-link">
          EDIT
        </Link>
      </div>
    </>
  );
}
