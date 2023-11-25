// import * as usersService from "../../utilities/users-service";
import "./AllProfiles.css";
import React, { useState, useEffect } from "react";
import { update } from "../../utilities/profiles-api";
import { getAll } from "../../utilities/profiles-api";
import { Link } from "react-router-dom";

const AllProfiles = ({ myProfile, setMyProfile }) => {
  const [allProfiles, setAllProfiles] = useState([]);

  useEffect(function () {
    async function getAllProfiles() {
      const allProfiles = await getAll();
      console.log(`Tried getting all prof ${allProfiles}`);
      setAllProfiles(allProfiles);
    }
    getAllProfiles();
  }, []);

  //  async function handleAddFriend(p){
  // const newFriend = {
  //   _id : myProfile._id, friends: p
  // }
  // console.log(newFriend)
  // const sendFriend = await update(newFriend)
  // setMyProfile(sendFriend);
  //   }

  async function handleAddFriend(friendId) {
    try {
      const friendsArray = Array.isArray(myProfile.friends)
        ? myProfile.friends
        : [];
      if (myProfile._id === friendId) {
        console.error("Cannot add yourself as a friend");
        return;
      }
      if (friendsArray.includes(friendId)) {
        console.error("Already added as a friend");
      }

      // Optimistically update the local state
      // const updatedProfile = {
      //   ...myProfile,
      //   friends: [...friendsArray, friendId],
      // };
      // setMyProfile(updatedProfile);

      const response = await update({
        ...myProfile,
        friends: [...friendsArray, friendId],
      });
      setMyProfile(response);
    } catch (error) {
      console.error("Error adding friend:", error);
      // Revert to the original state in case of an error
      setMyProfile(myProfile);
    }
  }
  return (
    <div>
      <h1>User List</h1>

      <ul id="all-users-container">
        {allProfiles.map((p) => (
          <li key={p._id} className="avatar-container">
            <Link to={"/profiles/" + p._id}>
              {" "}
              <div className="user-avatar">P</div>
              <strong className="div-text">{p.username}</strong>
            </Link>
            <button onClick={() => handleAddFriend(p._id)}>Add Friend</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProfiles;
