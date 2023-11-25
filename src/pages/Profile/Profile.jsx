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

  // Using pagePosts as it should load the posts for the profile/:id-- not just the logged in user's profile
  const [pagePosts, setPagePosts] = useState([]);

  // Function to retrieve all posts for the user's Profile page
  useEffect(function () {
    async function getPagePosts() {
      console.log("get profile page's Posts");
      //console.log(id);
      // Get the array of posts from the page profile's posts array
      // The controller then populates an array of posts documents from the profile's posts array
      // const posts = await getPosts(id);
      // console.log(posts);
      // // Set pagePosts state with the array of posts documents returned to the posts variable
      // setPagePosts(posts);
    }
    getPagePosts();
  }, []);

  return (
    <div id="profile-container">
      <div id="profile-left-side">
        <AboutMe myProfile={myProfile} />
      </div>
      <div id="profile-right-side">
        <FriendsList myProfile={myProfile} />
        {/* Need to pass down setPagePosts to update state when there is a new post */}
        <PostComponent pagePosts={pagePosts} setPagePosts={setPagePosts} />
      </div>
    </div>
  );
}
