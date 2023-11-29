import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import AboutMe from "../../components/AboutMe/AboutMe";
import FriendsList from "../../components/FriendsList/FriendsList";
import PostComponent from "../../components/PostComponent/PostComponent";
import "./Profile.css";
import { getPosts } from "../../utilities/posts-api";
import { ThemeContext } from "../../contexts/ThemeContext";
import { getOther } from "../../utilities/profiles-api";

export default function Profile({ myProfile }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [otherProfile, setOtherProfile] = useState(false);
  let { id } = useParams();


 
  useEffect(() => {
    async function checkOther() {
      try {
        // if params matches myProfile.user then nothing
        if (myProfile.user === id) {
          console.log("they are the same");
          setOtherProfile(null);
        } else {
          // else get other profile
          const other = await getOther(id);
          setOtherProfile(other);
        }
      } catch (error) {
        console.error("Error checking other profile:", error);
        // Handle the error, e.g., set an error state, display a message, etc.
      }
    }
  
    checkOther();
  }, [id, myProfile]);

  return (
    <>
      {otherProfile ? (
        <div id="profile-container">
          <div id="profile-left-side">
            <AboutMe otherProfile={otherProfile} />
          </div>
          <div id="profile-right-side">
            <FriendsList otherProfile={otherProfile} />
            <PostComponent
              // pagePosts={pagePosts}
              // setPagePosts={setPagePosts}
              otherProfile={otherProfile}
            />
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
}