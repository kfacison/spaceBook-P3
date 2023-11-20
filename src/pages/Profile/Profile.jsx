import React, { useState, useEffect, useContext } from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import FriendsList from "../../components/FriendsList/FriendsList";
import PostComponent from "../../components/PostComponent/PostComponent";
import "./Profile.css";
import { ThemeContext } from "../../contexts/ThemeContext";
export default function Profile({ myProfile }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div id="profile-container">
      <div id="profile-left-side">
        <AboutMe myProfile={myProfile} />
      </div>
      <div id="profile-right-side">
        <FriendsList />
        <PostComponent />
      </div>
    </div>
  );
}
