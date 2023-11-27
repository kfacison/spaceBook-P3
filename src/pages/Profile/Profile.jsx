import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import AboutMe from "../../components/AboutMe/AboutMe";
import FriendsList from "../../components/FriendsList/FriendsList";
import PostComponent from "../../components/PostComponent/PostComponent";
import "./Profile.css";
import { getPosts } from "../../utilities/posts-api";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Profile({ myProfile }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  let { id } = useParams();

  return (
    <div id="profile-container">
      <div id="profile-left-side">
        <AboutMe myProfile={myProfile} />
      </div>
      <div id="profile-right-side">
        <FriendsList myProfile={myProfile} />
        {/* Need to pass down setPagePosts to update state when there is a new post */}
        <PostComponent
          // pagePosts={pagePosts}
          // setPagePosts={setPagePosts}
          myProfile={myProfile}
        />
      </div>
    </div>
  );
}
