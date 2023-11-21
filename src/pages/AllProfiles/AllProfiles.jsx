// import * as usersService from "../../utilities/users-service";
import "./AllProfiles.css";
import React, { useState, useEffect } from "react";
import { addFriend } from "../../utilities/profiles-api";
// import { getProfile } from "../../utilities/profiles-api";
import { getAll } from "../../utilities/profiles-api";
// import profile from "../../../models/profile";

const AllProfiles = ({user}) => {
  const [allProfiles, setAllProfiles] = useState([]);

  useEffect(function () {
    async function getAllProfiles() {
      const allProfiles = await getAll();
      console.log(`Tried getting all prof ${allProfiles}`);
      setAllProfiles(allProfiles);
    }
    getAllProfiles();
  }, []);
  
  
  return (
    <div>
      <h1>User List</h1>

      <ul id="all-users-container">
        {allProfiles.map((p) => (
          <li key={p._id} className="avatar-container">
            <div className="user-avatar">P</div>
            <strong className="div-text">{p.username}(Add Link)</strong>
            {/* <button onClick={() => handleAddFriend(p._id)}>Add Friend</button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProfiles;
