import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <nav>
      <div id="logo">
        <img src="https://imgur.com/cKhQa3t.png" alt="logo" />
      </div>
      <Link to="/profiles">All Users</Link>
      &nbsp; | &nbsp;
      <Link to="/profile">Profile</Link>
      {/* <p>Welcome, {user.name}</p>  maybe we will use this */}
      <div id="right-side-navbar">
        <Link to="" onClick={handleLogOut}>
          Log Out
        </Link>
      </div>
    </nav>
  );
}
