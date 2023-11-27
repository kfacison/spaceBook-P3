import React from "react";
import { useEffect, useState } from "react";
import "./PostComponent.css";
import { useParams } from "react-router-dom";
import * as postsAPI from "../../utilities/posts-api";

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
      const posts = await postsAPI.getPosts(myProfile._id);
      // console.log(posts);
      // // Set pagePosts state with the array of posts documents returned to the posts variable
      setPagePosts(posts);
    }
    getPagePosts();
  }, []);
  
  // Handle inputs to new post textbox
  const [newPost, setNewPost] = useState({
    content: "",
    author: myProfile._id
  });
  function handleChange(evt) {
    const newPostContent = { ...newPost, [evt.target.name]: evt.target.value };
    setNewPost(newPostContent);
  }

  // Handle submitting new post
  async function handleSubmit(evt) {
    evt.preventDefault();
    const submitNewPost = await postsAPI.createPost(myProfile._id, newPost);
    console.log("Sending data to utilities");
    await setPagePosts(submitNewPost);
  }

  // Display page's posts
  const displayPosts = pagePosts.map((p, idx) => (<li key={idx} >{p.content} <br></br> Written by: {p.author}</li>))

  return (
    <>
      <div id="post-component-container">
        {id === myProfile._id || id === myProfile.user ? (
          <div id="create-post-container">
            <form 
            onSubmit={handleSubmit} method="post" id="user-post-form-container">
              <label htmlFor="content">Type your new post here:</label>
              <input
                id="user-post-form"
                name="content"
                type="text"
                placeholder="What's on your mind?" value={newPost.content} onChange={handleChange}
              ></input>
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
