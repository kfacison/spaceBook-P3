import React from "react";
import "./PostComponent.css";
import { useParams } from "react-router-dom";

export default function PostComponent({ myProfile }) {
  let { id } = useParams();
  console.log(id);
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
            {" "}
            {/*ADD FUNCTION TO ITERATE OVER OLD POSTS AND EXTRACT THIS TO COMPONENT*/}
            <li className="div-text">test</li>
            <hr></hr>
            <li className="div-text">test</li>
            <hr></hr>
            <li className="div-text">test</li>
            <hr></hr>
            <li className="div-text">test</li>
            <hr></hr>
          </ul>
        </div>
      </div>
    </>
  );
}
