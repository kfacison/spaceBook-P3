// import * as usersService from "../../utilities/users-service";
import "./AllProfiles.css";
import React, { useState, useEffect } from "react";
import { update } from "../../utilities/profiles-api";
import { getAll } from "../../utilities/profiles-api";
import { Link } from "react-router-dom";

const AllProfiles = ({ myProfile, setMyProfile }) => {
  const localStorageKey = `addedFriends-${myProfile._id}`;

  const [allProfiles, setAllProfiles] = useState([]);

  useEffect(() => {
    async function getAllProfiles() {
      try {
        const allProfiles = await getAll(); // Assuming getAll is your API utility to fetch all profiles
        setAllProfiles(allProfiles);
      } catch (error) {
        // Handle error here if needed
        console.error('Error getting all profiles:', error);
      }
    }
  
    getAllProfiles();
  }, []);
  

  async function handleAddFriend(friendId) {
    try {
      const friendsArray = myProfile.friends;

      if (myProfile._id === friendId) {
        console.error("Cannot add yourself as a friend");
        return;
      }
      if (friendsArray?.includes(friendId)) {
        console.error("Already added as a friend");
      }

     
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
      <div id="all-users-container">
        {allProfiles.map((p) => {
          // Check if this profile is in the current user's friends list
          const isFriend = myProfile.friends?.includes(p._id);

          if (p._id !== myProfile._id) {
            return (
              <div key={p._id} className="avatar-container">
                <Link to={"/profiles/" + p._id}>
                  <div className="user-avatar">
                    {p.avatar && (
                      <img
                        src={p.avatar}
                        alt="Profile Avatar"
                        className="profile-avatar-all-page"
                      />
                    )}
                  </div>
                  <strong className="div-text">{p.username}</strong>
                </Link>
                <button onClick={() => handleAddFriend(p._id)}>
                  {isFriend ? "Added" : "Add Friend"}
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default AllProfiles;
