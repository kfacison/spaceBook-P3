// import * as usersService from "../../utilities/users-service";
import "./AllProfiles.css";
import React, { useState, useEffect } from 'react';

import { getAll } from "../../utilities/profiles-api";

const AllProfiles = () => {
  const [allProfiles, setAllProfiles] = useState([])

useEffect(function() {
  async function getAllProfiles(){
    const allProfiles = await getAll();
    console.log(`Tried getting all prof ${allProfiles}`);
    setAllProfiles(allProfiles)
  }
  getAllProfiles();
}, []);
  return (
    <div>
      <h1>User List</h1>
    
      <ul>
        {allProfiles.map((user) => (
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
