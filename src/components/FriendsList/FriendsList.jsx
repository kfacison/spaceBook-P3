import React, { useState } from "react";
import "./FriendsList.css";
import axios from "axios";

export default function FriendsList({ myProfile }) {
  const [friends, setFriends] = useState(myProfile.friends);

  console.log(friends);
  return (
    <>
      <h3>BEST FRIENDS</h3>
      <div id="friends-list-container">
        {friends.slice(0, 6).map((friend, index) => (
          <div key={index} className="friend">
            {friend} {/* Display the username */}
          </div>
        ))}
      </div>
    </>
  );
}
