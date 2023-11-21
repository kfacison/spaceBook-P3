// import * as usersService from "../../utilities/users-service";
import "./AllProfiles.css";
import React, { useState, useEffect } from "react";
import { update } from "../../utilities/profiles-api";
import { getAll } from "../../utilities/profiles-api";
import { Link } from "react-router-dom";

const AllProfiles = (myProfile, setMyProfile) => {
  const [allProfiles, setAllProfiles] = useState([]);

  useEffect(function () {
    async function getAllProfiles() {
      const allProfiles = await getAll();
      console.log(`Tried getting all prof ${allProfiles}`);
      setAllProfiles(allProfiles);
    }
    getAllProfiles();
  }, []);
  
 async function handleAddFriend(p){
const newFriend = {
  _id : myProfile._id, friends: p
}
const sendFriend = await update(newFriend)
setMyProfile(sendFriend);
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
