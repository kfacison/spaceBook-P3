import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";

export default function AboutMe({ profile }) {
  return (
    <>
      <div id="profile-photo-container">div</div>
      <div id="about-me-wrapper">
        <div id="about-me-box">
          <div className="about-me-cat">Name: (user.name)</div>
          <div className="about-me-cat">Age: (user.age)</div>
          <div className="about-me-cat">
            Favorite Planet: (user.favoritePlanet)
          </div>
        </div>
        <Link to="/profiles/:id/edit" id="edit-profile-link">
          <img
            src="https://i.ibb.co/ysycYrk/edit-square-FILL0-wght400-GRAD0-opsz24.png"
            alt="Edit Icon"
            id="edit-button"
          />
        </Link>
      </div>
    </>
  );
}
