import React, { useState, useEffect, useContext } from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import FriendsList from "../../components/FriendsList/FriendsList";
import PostComponent from "../../components/PostComponent/PostComponent";
import "./Profile.css";
import {getPosts} from "../../utilities/posts-api";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Profile({ myProfile }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [myPosts, setMyPosts] = useState([]);

  // Function to retrieve all posts for the user's Profile page
  useEffect(function () {
    async function getMyPosts() {
      console.log("get my Posts");
      const posts = await getPosts(myProfile._id);
      console.log(posts);
      setMyPosts(posts);
    }
    getMyPosts();
  }, [myProfile]);

  return (
    <div id="profile-container">
      <div id="profile-left-side">
        <AboutMe myProfile={myProfile} />
      </div>
      <div id="profile-right-side">
        <FriendsList />
        <PostComponent myPosts={ myPosts } setMyPosts={ setMyPosts }/>
      </div>
    </div>
  );
}
