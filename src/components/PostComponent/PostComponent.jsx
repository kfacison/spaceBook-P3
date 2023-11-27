import React, { useEffect, useState } from "react";
import "./PostComponent.css";
import { useParams } from "react-router-dom";

export default function PostComponent({ myProfile, otherProfile }) {
  let { id } = useParams();
  const [posts, setPosts] = useState([]);

  const profileToUse = myProfile || otherProfile;

  useEffect(() => {
    if (profileToUse) {
      setPosts(profileToUse.posts || []);
    }
  }, [myProfile, otherProfile]);

  return (
    <>
      {myProfile ? (
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
              {/* Iterate over old posts */}
              <li className="div-text">test</li>
              <hr />
              <li className="div-text">test</li>
              <hr />
              <li className="div-text">test</li>
              <hr />
              <li className="div-text">test</li>
              <hr />
            </ul>
          </div>
        </div>
      ) : (
        <div id="post-component-container">
          TIMELINE
          <div id="old-posts-container">
            OLD POSTS
            <ul id="old-posts-list">
              {/* Iterate over old posts */}
              <li className="div-text">test</li>
              <hr />
              <li className="div-text">test</li>
              <hr />
              <li className="div-text">test</li>
              <hr />
              <li className="div-text">test</li>
              <hr />
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
