import UserAvatar from "../../components/UserAvatar/UserAvatar";
import * as usersService from "../../utilities/users-service";
import "./AllProfiles.css";
import React, { useState, useEffect } from "react";

const dummyUserAccounts = [
  { id: 1, username: "user1", email: "user1@example.com" },
  { id: 2, username: "user2", email: "user2@example.com" },
];

const AllProfiles = () => {
  const [userAccounts, setUserAccounts] = useState([]);
  useEffect(() => {
    setUserAccounts(dummyUserAccounts);
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userAccounts.map((user) => (
          <li key={user.id}>
            <strong>Username:</strong> {user.username}, <strong>Email:</strong>{" "}
            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProfiles;
