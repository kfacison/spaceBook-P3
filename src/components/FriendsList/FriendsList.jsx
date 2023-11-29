import React, { useState, useEffect } from "react";
import "./FriendsList.css";
import { getOther } from "../../utilities/profiles-api"; // Adjust this import based on your actual API utility functions
import { Link } from "react-router-dom";
export default function FriendsList({ myProfile, otherProfile }) {
  const [friends, setFriends] = useState([]);

  const profileToUse = myProfile || otherProfile;

  useEffect(() => {
    const fetchFriendsDetails = async () => {
      try {
        if (profileToUse && profileToUse.friends) {
          const friendsProfiles = await Promise.all(
            profileToUse.friends.map(async (friendId) => {
              try {
                return await getOther(friendId);
              } catch (error) {
                // Handle individual friend fetching error here if needed
                console.error(`Error fetching friend ${friendId}:`, error);
                return null; // or handle it in a way that suits your application
              }
            })
          );
  
          setFriends(friendsProfiles.filter((friend) => friend !== null));
        }
      } catch (error) {
        // Handle overall friends fetching error here if needed
        console.error('Error fetching friends:', error);
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
