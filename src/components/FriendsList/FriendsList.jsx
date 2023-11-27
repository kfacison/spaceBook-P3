import React, { useState, useEffect } from "react";
import "./FriendsList.css";

export default function FriendsList({ myProfile, otherProfile }) {
  const [friends, setFriends] = useState([]);

  // Determine which profile to use
  const profileToUse = myProfile || otherProfile;

  useEffect(() => {
    // Set friends based on the chosen profile
    if (profileToUse) {
      setFriends(profileToUse.friends || []);
    }
  }, [myProfile, otherProfile, profileToUse]);

  return (
    <>
      <h3>BEST FRIENDS</h3>
      {friends.length > 0 ? (
        <div id="friends-list-container">
          {friends.slice(0, 6).map((friend, index) => (
            <div key={index} className="friend">
              {friend} {/* Assuming 'friend' is a string like a username */}
            </div>
          ))}
        </div>
      ) : (
        <h4>{profileToUse.username} has no friends 🤣 </h4>
      )}
    </>
  );
}
