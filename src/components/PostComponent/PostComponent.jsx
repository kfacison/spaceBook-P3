import React from "react";
import { useEffect, useState } from "react";
import "./PostComponent.css";
import { useParams } from "react-router-dom";
import { getPosts } from "../../utilities/posts-api";

export default function PostComponent({ myProfile }) {
  let { id } = useParams();
  console.log(id)

  // Using pagePosts as it should load the posts for the profile/:id-- not just the logged in user's profile
  const [pagePosts, setPagePosts] = useState([]);

  // Function to retrieve all posts for the user's Profile page
  useEffect(function () {
    async function getPagePosts() {
      console.log("get profile page's Posts");
      console.log(myProfile._id);
      // Get the array of posts from the page profile's posts array
      // The controller then populates an array of posts documents from the profile's posts array
      const posts = await getPosts(myProfile._id);
      // console.log(posts);
      // // Set pagePosts state with the array of posts documents returned to the posts variable
      setPagePosts(posts);
    }
    getPagePosts();
  }, []);

  const displayPosts = pagePosts.map((p, idx) => (<li key={idx} >{p.content} <br></br> Written by: {p.author}</li>))

  return (
    <>
      <div id="post-component-container">
        {id === myProfile._id || id === myProfile.user ? (
          <div id="create-post-container">
            <form id="user-post-form-container">
              <textarea
                id="user-post-form"
                placeholder="What's on your mind?"
              ></textarea>
              <button>POST</button>
            </form>
          </div>
        ) : null}
        TIMELINE
        <div id="old-posts-container">
          OLD POSTS
          <ul id="old-posts-list">
            {displayPosts}
          </ul>
        </div>
      </div>
    </>
  );
}
