import React, { useState, useEffect, useContext } from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import FriendsList from "../../components/FriendsList/FriendsList";
import PostComponent from "../../components/PostComponent/PostComponent";
import "./Profile.css";
import * as profilesAPI from "../../utilities/profiles-api";
import { ThemeContext } from "../../contexts/ThemeContext";
export default function Profile({ user }) {
  const [profile, setProfile] = useState([]);

  // async function createNew(user) {
  //   const newProfile = await profilesAPI.createProfile(user);
  //   setProfile(newProfile);
  // }

  useEffect(function () {
    async function getMyProfile() {
      const myProfile = await profilesAPI.getProfile(user);
      myProfile[0] ? setProfile(myProfile) 
      :
      // createNew(user);
      console.log("no profile");
    }
    getMyProfile();
  }, []);

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div id="profile-container">
      <div id="profile-left-side">
        <AboutMe profile={profile} />
      </div>
      <div id="profile-right-side">
        <FriendsList />
        <PostComponent />
      </div>
    </div>
  );
}
