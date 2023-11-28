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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    checkOther();

    async function checkOther() {
      //console.log(`the myProfile _id:${myProfile._id}, and myProfile.user:${myProfile.user} and, params id:${id}`);
      //if params matches myProfile.user then nothing
      if (myProfile.user === id) {
        console.log("they are the same");
        setOtherProfile(null);
      } else {
        //else get other profile
        //console.log(`they diff `);
        const other = await getOther(id);
        await setOtherProfile(other);
        //return other;
        //console.log(otherProfile);
      }
    }
  }, [id, myProfile]);
  useEffect(() => {
    setIsLoading(true);
    const fetchProfileData = async () => {
      if (id !== myProfile.user) {
        const other = await getOther(id);
        setOtherProfile(other);
      } else {
        setOtherProfile(null);
      }
      setIsLoading(false);
    };

    fetchProfileData();
  }, [id, myProfile.user]);

  if (isLoading) {
    return <div>Loading profile...</div>; // Or any other loading indicator
  }

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
