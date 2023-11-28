import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import React, { useContext } from "react";

export default function NavBar({ user, setUser, myProfile }) {
  function handleLogOut() {
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
    
  }
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav>
      <div id="logo">
        <img src="https://imgur.com/cKhQa3t.png" alt="logo" id="logo-img" />
      </div>
      <Link to="/profiles" className="nav-links">
        All Users
      </Link>
      &nbsp; | &nbsp;
      <Link to={"/profiles/"+user?._id} className="nav-links">
        Profile
      </Link>
      &nbsp; | &nbsp;
      <Link to="/" className="nav-links">
        Home Page
      </Link>
      {/* <p>Welcome, {user.name}</p>  maybe we will use this */}
      <div id="right-side-navbar">
        <button onClick={toggleTheme}>Toggle Theme</button>

        <Link to="" onClick={handleLogOut} className="nav-links">
          Log Out
        </Link>
      </div>
    </nav>
  );
}
