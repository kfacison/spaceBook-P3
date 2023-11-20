import { useState, useEffect } from "react";
import AboutMe from "../../components/AboutMe/AboutMe";
import FriendsList from "../../components/FriendsList/FriendsList";
import PostComponent from "../../components/PostComponent/PostComponent";
import "./Profile.css";
import * as profilesAPI from "../../utilities/profiles-api";

export default function Profile({user}) {
  const [profile, setProfile] = useState([]);

  async function createNew(user) {
      const newProfile = await profilesAPI.createProfile(user)
      setProfile(newProfile);
  }

  useEffect(function() {
    async function getProfile(user){
      const myProfile = await profilesAPI.getProfile(user);
      console.log(`Tried getting prof ${myProfile}`);
      myProfile[0] ?
      setProfile(myProfile)
      :
      createNew(user);
    }
    getProfile(user);
  }, [user]);

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
