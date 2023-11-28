import React, { useState, useEffect } from "react";
import "./FriendsList.css";
import { getOther } from "../../utilities/profiles-api"; // Adjust this import based on your actual API utility functions
import { Link } from "react-router-dom";
export default function FriendsList({ myProfile, otherProfile }) {
  const [friends, setFriends] = useState([]);

  const profileToUse = myProfile || otherProfile;

  useEffect(() => {
    const fetchFriendsDetails = async () => {
      if (profileToUse && profileToUse.friends) {
        const friendsProfiles = await Promise.all(
          profileToUse.friends.map((friendId) => getOther(friendId)) // Assuming getProfile is your API utility to fetch a user profile by ID
        );
        setFriends(friendsProfiles);
      }
    };

    fetchFriendsDetails();
  }, [profileToUse]);

  return (
    <>
      <h3>BEST FRIENDS</h3>
      {friends.length > 0 ? (
        <div id="friends-list-container">
          {friends.slice(0, 6).map((friend, index) => (
            <Link to={"/profiles/" + friend._id} id="friend-list-avatar">
              <div key={index} className="friend">
                <img src={friend.avatar} alt={`${friend.username}'s avatar`} />
                <span>{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <h4>{profileToUse?.username} has no friends 🤣</h4>
      )}
    </>
  );
}
