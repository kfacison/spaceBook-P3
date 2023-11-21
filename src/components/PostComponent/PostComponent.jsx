import React from "react";
import "./PostComponent.css";

export default function PostComponent() {
  return (
    <>
      <div id="post-component-container">
        <div id="create-post-container">
          <form id="user-post-form-container">
            <textarea
              id="user-post-form"
              placeholder="What's on your mind?"
            ></textarea>
            <button>POST</button>
          </form>
        </div>
        TIMELINE
        <div id="old-posts-container">
          OLD POSTS
          <ul id="old-posts-list">
            {" "}
            {/*ADD FUNCTION TO ITERATE OVER OLD POSTS AND EXTRACT THIS TO COMPONENT*/}
            <li>test</li>
            <hr></hr>
            <li>test</li>
            <hr></hr>
            <li>test</li>
            <hr></hr>
            <li>test</li>
            <hr></hr>
          </ul>
        </div>
      </div>
    </>
  );
}
