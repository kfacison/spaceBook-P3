import UserAvatar from "../../components/UserAvatar/UserAvatar";
import * as usersService from "../../utilities/users-service";
import "./AllProfiles.css";

export default function AllProfiles() {
  //   async function handleCheckToken() {
  //     const expDate = await usersService.checkToken();
  //     console.log(expDate);
  //   }

  return (
    <>
      <h1>All Users</h1>
      <div id="all-users-container">
        {/* will need to extract each USER to be a component */}
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
      </div>
    </>
  );
}
