import AboutMe from "../../components/AboutMe/AboutMe";
import FriendsList from "../../components/FriendsList/FriendsList";
import PostComponent from "../../components/PostComponent/PostComponent";
import "./Profile.css";

export default function Profile() {
  return (
    <div id="profile-container">
      <div id="profile-left-side">
        <AboutMe />
      </div>
      <div id="profile-right-side">
        <FriendsList />
        <PostComponent />
      </div>
    </div>
  );
}
