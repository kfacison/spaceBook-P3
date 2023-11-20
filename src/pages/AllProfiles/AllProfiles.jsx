import UserAvatar from "../../components/UserAvatar/UserAvatar";
import * as usersService from "../../utilities/users-service";
import "./AllProfiles.css";
import React, { useState, useEffect } from 'react';

const dummyUserAccounts = [
  { id: 1, username: 'user1', email: 'user1@example.com' },
  { id: 2, username: 'user2', email: 'user2@example.com' },

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
            <strong>Username:</strong> {user.username}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProfiles;































// export default function AllProfiles() {
//   //   async function handleCheckToken() {
//   //     const expDate = await usersService.checkToken();
//   //     console.log(expDate);
//   //   }

//   return (
//     <>
//       <h1>All Users</h1>
//       <div id="all-users-container">
//         {/* will need to extract each USER to be a component */}
//         <div className="fake-user">Fake user</div>
//         <div className="fake-user">Fake user</div>
//         <div className="fake-user">Fake user</div>
//         <div className="fake-user">Fake user</div>
//         <div className="fake-user">Fake user</div>
//         <div className="fake-user">Fake user</div>
//         <div className="fake-user">Fake user</div>
//         <div className="fake-user">Fake user</div>
//         <div className="fake-user">Fake user</div>
//         <div className="fake-user">Fake user</div>
//         <div className="fake-user">Fake user</div>
//         <div className="fake-user">Fake user</div>
//         <div className="fake-user">Fake user</div>
//         <div className="fake-user">Fake user</div>
//         <div className="fake-user">Fake user</div>
//         <div className="fake-user">Fake user</div>
//       </div>
//     </>
//   );
// }
