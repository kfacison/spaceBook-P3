// import * as usersService from "../../utilities/users-service";
import "./AllProfiles.css";
import React, { useState, useEffect } from "react";

import { getAll } from "../../utilities/profiles-api";
import { Link } from "react-router-dom";

const AllProfiles = () => {
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
        {allProfiles.map((user) => (
          <li key={user.id} className="avatar-container">
            <Link to={"/profiles/" + user._id}>
              {" "}
              <div className="user-avatar">P</div>
              <strong className="div-text">{user.username}</strong>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProfiles;
