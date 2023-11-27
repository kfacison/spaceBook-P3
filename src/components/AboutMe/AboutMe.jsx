import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { getToken } from "../../utilities/users-service";

export default function AboutMe({ myProfile, otherProfile }) {
  let { id } = useParams();

  return (
    <>
      {myProfile ? (
        <>
          <div id="profile-photo-container">
            {myProfile.avatar && (
              <img
                src={myProfile.avatar}
                alt="Profile Avatar"
                className="profile-avatar"
              />
            )}
          </div>
          <div id="about-me-wrapper">
            <div id="about-me-box">
              <div className="about-me-cat">Name: {myProfile.username}</div>
              <div className="about-me-cat">Species: {myProfile.species}</div>
              <div className="about-me-cat">
                Favorite Planet: {myProfile.favPlanet}
              </div>
              <div className="about-me-cat">Bio: {myProfile.bio}</div>
            </div>
            {id === myProfile._id || id === myProfile.user ? (
              <Link
                to={"/profiles/" + myProfile.user + "/edit"}
                id="edit-profile-link"
              >
                <img
                  src="https://i.ibb.co/ysycYrk/edit-square-FILL0-wght400-GRAD0-opsz24.png"
                  alt="Edit Icon"
                  id="edit-button"
                />
              </Link>
            ) : null}
          </div>
        </>
      ) : (
        <>
          <div id="profile-photo-container">
            {otherProfile.avatar && (
              <img
                src={otherProfile.avatar}
                alt="Profile Avatar"
                className="profile-avatar"
              />
            )}
          </div>
          <div id="about-me-wrapper">
            <div id="about-me-box">
              <div className="about-me-cat">Name: {otherProfile.username}</div>
              <div className="about-me-cat">
                Species: {otherProfile.species}
              </div>
              <div className="about-me-cat">
                Favorite Planet: {otherProfile.favPlanet}
              </div>
              <div className="about-me-cat">Bio: {otherProfile.bio}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
