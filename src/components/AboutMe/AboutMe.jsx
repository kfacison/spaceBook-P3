import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";

export default function AboutMe({ myProfile }) {
  return (
    <>
      <div id="profile-photo-container">div</div>
      <div id="about-me-wrapper">
        <div id="about-me-box">
          <div className="about-me-cat">Name: {myProfile[0].username}</div>
          <div className="about-me-cat">Species: {myProfile[0].species}</div>
          <div className="about-me-cat">Favorite Planet: {myProfile[0].favPlanet}</div>
          <div className="about-me-cat">Bio: {myProfile[0].bio}</div>
        </div>
        {/* if the user have the same id them they can see the edit button {myProfile[0].user} */}
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
