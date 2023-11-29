import React, { useEffect, useState } from "react";
import "./PostComponent.css";
import { useParams } from "react-router-dom";
import * as postsAPI from "../../utilities/posts-api";
import PostLI from "../PostsLI/PostLI";

export default function PostComponent({ myProfile, otherProfile }) {
  let { id } = useParams();
  const profileToUse = myProfile || otherProfile;
  const defaultNewPost = {
    content: "",
    author: profileToUse._id,
  }
  const [pagePosts, setPagePosts] = useState([]);
  const [newPost, setNewPost] = useState(defaultNewPost);

  // const [profileToUsePosts, setProfileToUsePosts] = useState({});

  // useEffect(() => {
  //   if (profileToUse) {
  //     setPagePosts(profileToUse.posts || []);
  //   }
  // }, [myProfile, otherProfile]);



  // Set the pagePosts state
  // useEffect(
  //   function () {
  //     async function getPagePosts() {
  //       if (myProfile) {
  //         // Pass in the the user's profile id (not the url id which is their user id)
  //         const posts = await postsAPI.getPosts(myProfile._id);
  //         setPagePosts(posts);
  //       } else {
  //         // For all other users, pass the url id (which is their profile id)
  //         const posts = await postsAPI.getPosts(id);
  //         setPagePosts(posts);
  //       }
  //     }
  //     getPagePosts();
  //   },
  //   [myProfile, profileToUse, id]
  // );
  
  useEffect(() => {
    async function getPagePosts() {
      try {
        let posts;
  
        if (myProfile) {
          // Pass in the user's profile id (not the url id, which is their user id)
          posts = await postsAPI.getPosts(myProfile._id);
        } else {
          // For all other users, pass the url id (which is their profile id)
          posts = await postsAPI.getPosts(id);
        }
  
        setPagePosts(posts);
      } catch (error) {
        console.error("Error fetching page posts:", error);
        // Handle the error, e.g., set an error state, display a message, etc.
      }
    }
  
    getPagePosts();
  }, [myProfile, profileToUse, id]);





  // Handle inputs to new post textbox
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
    setNewPost(defaultNewPost);
  }

  // Map the pagePosts array into PostLI React element
  const displayPosts = pagePosts.map((p, idx) => (
    <PostLI key={idx} post={p.content} createdAt={p.createdAt} />
  ));

  return (
    <>
      {myProfile && id === myProfile.user ? (
        <div id="post-component-container">
          <div id="create-post-container">
            <form
              onSubmit={handleSubmit}
              method="post"
              id="user-post-form-container"
            >
              <label>Type your new post here:</label>
              <input
                id="user-post-form"
                name="content"
                type="text"
                placeholder="What's on your mind?"
                value={newPost.content}
                onChange={handleChange}
              ></input>
              <button>POST</button>
            </form>
          </div>
          TIMELINE
          <div id="old-posts-container">
            OLD POSTS
            <ul id="old-posts-list">{displayPosts}</ul>
          </div>
        </div>
      ) : (
        <div id="post-component-container">
          TIMELINE
          <div id="old-posts-container">
            OLD POSTS
            <ul id="old-posts-list">
              {displayPosts}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
